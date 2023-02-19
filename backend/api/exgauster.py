from fastapi import APIRouter, WebSocket, Depends, BackgroundTasks
from motor.motor_asyncio import AsyncIOMotorCollection

from utils import KafkaConsumerContextManager, parse_and_build
from serializers import AnalyzeRequest, AnalyzeResponse
from config.initializers import init_database
from config import kafka_topics_ca


router = APIRouter(prefix="/exgausters", tags=["exgausters"])


@router.websocket("/{topic_name}")
async def websocket_endpoint(
        websocket: WebSocket,
        topic_name: str,
        db: Depends = Depends(init_database)
):
    await websocket.accept()
    async with KafkaConsumerContextManager(topic=topic_name) as consumer:
        async for message in consumer:
            collection: AsyncIOMotorCollection = db[message.topic]
            print(f"Received message: {message}")
            data = parse_and_build(message)
            await websocket.send_json(data.json())
            await collection.insert_one(data.dict())
            predict_collection: AsyncIOMotorCollection = db["predict_collection"]
            if await collection.count_documents(filter={}) % 360 == 0:  # обновляет предсказание каждые 6 часов
                pass  # вот тут будет функция вычисления
            last_prediction = await predict_collection.find_one(sort=[('_id', -1)])
            if last_prediction:
                await predict_collection.replace_one(last_prediction, last_prediction)
                await websocket.send_json(last_prediction.json())

    await websocket.close()
    await consumer.stop()


@router.get("/analyze", response_model=list[AnalyzeResponse])
async def get_analyze(filters: AnalyzeRequest = Depends(), db: Depends = Depends(init_database)):
    query = None
    if filters.start_datetime and filters.end_datetime:
        query = {
            "moment": {
                "$gte": filters.start_datetime,
                "$lte": filters.end_datetime
            }
        }
    collection = db[filters.topic]
    if not (limit := filters.limit):
        limit: int = await collection.count_documents(filter={})
        limit: int = int(limit/60) + 1

    skip: int = filters.skip
    skip_step: int = filters.skip
    results: list = []
    for _ in range(limit):
        collection = db[filters.topic].find(query, filters.exgausters).skip(skip).limit(1)
        document = await collection.to_list(length=filters.limit)
        results.extend(document)
        skip += skip_step

    return results

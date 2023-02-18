from fastapi import APIRouter, WebSocket, Depends

from utils import KafkaConsumerContextManager, parse_and_build
from serializers import AnalyzeRequest, AnalyzeResponse
from config.initializers import init_database
from config import kafka_topics_ca


router = APIRouter(prefix="/exgausters", tags=["exgausters"])


@router.websocket("/{topic_name}")
async def websocket_endpoint(
        websocket: WebSocket,
        topic_name: str = kafka_topics_ca.get("default_topic"),
        db: Depends = Depends(init_database)
):
    await websocket.accept()
    async with KafkaConsumerContextManager(topic=topic_name) as consumer:
        async for message in consumer:
            print(f"Received message: {message}")
            data = parse_and_build(message)
            await websocket.send_json(data.json())
            await db[message.topic].insert_one(data.dict())
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

    collection = db[filters.topic].find(query, filters.exgausters)
    results = await collection.to_list(length=filters.limit)
    return results

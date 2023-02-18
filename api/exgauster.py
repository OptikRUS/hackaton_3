from fastapi import APIRouter, WebSocket, Depends

from utils import KafkaConsumerContextManager, parse_and_build
from config.initializers import init_database


router = APIRouter(prefix="/exgausters", tags=["exgausters"])


@router.websocket("/{topic_name}")
async def websocket_endpoint(
        websocket: WebSocket,
        topic_name: str = "zsmk-9433-dev-01",
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

import asyncio

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorCollection

from config.initializers import init_database
from utils import KafkaConsumerContextManager, parse_and_build


async def consume():
    db: AsyncIOMotorClient = init_database()
    print()
    query = None
    result = db["zsmk-9433-dev-01"].find()
    print()
    results = await result.to_list(length=None)
    print()
    predict_collection: AsyncIOMotorCollection = db["predict_collection"]
    async with KafkaConsumerContextManager() as consumer:
        async for message in consumer:
            collection: AsyncIOMotorCollection = db[message.topic]
            response = parse_and_build(message)
            print(f"Received message: {response.dict()}")
            await collection.insert_one(response.dict())
            await predict_collection.insert_one(response.dict())
            print()
            last_prediction = await predict_collection.find_one(sort=[('_id', -1)])
            if last_prediction:
                await collection.replace_one(last_prediction, last_prediction, upsert=True)
            print()

asyncio.run(consume())

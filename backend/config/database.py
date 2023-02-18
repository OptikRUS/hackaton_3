from motor.motor_asyncio import AsyncIOMotorClient


class MongoDB:
    """
    Инициализация базы данных
    """
    def __init__(self, host: str, port: int, username: str, password: str, db_name: str) -> None:
        self.client = AsyncIOMotorClient(f"mongodb://{username}:{password}@{host}:{port}")
        self.db = self.client[db_name]

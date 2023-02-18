from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

from .database import MongoDB


def init_app() -> FastAPI:
    from config import app_config

    app = FastAPI(**app_config)
    return app


def init_cors(application: FastAPI) -> None:
    from fastapi.middleware.cors import CORSMiddleware
    from config import cors_config

    application.add_middleware(CORSMiddleware, **cors_config)


def init_routers(application: FastAPI) -> None:
    from config.routers import get_routers

    for router in get_routers():
        application.include_router(router)


def init_database() -> AsyncIOMotorClient:
    from config import database_config

    mongo_db: MongoDB = MongoDB(**database_config)

    return mongo_db.db

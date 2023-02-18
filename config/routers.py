from fastapi import APIRouter


def get_routers() -> list[APIRouter]:
    from api import exgausters_router

    routers: list[APIRouter] = list()

    routers.append(exgausters_router)

    return routers

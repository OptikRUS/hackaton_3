from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field

from config import kafka_topics_ca
from serializers.exgauster import Exgauster


class AnalyzeRequest(BaseModel):
    topic: str = Field(kafka_topics_ca.get("default_topic"))
    start_datetime: Optional[datetime]
    end_datetime: Optional[datetime]
    limit: Optional[int]
    exgauster_1_u_171: Optional[int]
    exgauster_2_u_172: Optional[int]
    exgauster_3_f_171: Optional[int]
    exgauster_4_f_172: Optional[int]
    exgauster_5_x_171: Optional[int]
    exgauster_6_x_172: Optional[int]

    @property
    def exgausters(self) -> dict:
        exgausters: dict = dict(moment=1)
        if self.exgauster_1_u_171:
            exgausters.setdefault("exgauster_1_u_171", 1)
        if self.exgauster_2_u_172:
            exgausters.setdefault("exgauster_2_u_172", 1)
        if self.exgauster_3_f_171:
            exgausters.setdefault("exgauster_3_f_171", 1)
        if self.exgauster_4_f_172:
            exgausters.setdefault("exgauster_4_f_172", 1)
        if self.exgauster_5_x_171:
            exgausters.setdefault("exgauster_5_x_171", 1)
        if self.exgauster_6_x_172:
            exgausters.setdefault("exgauster_6_x_172", 1)
        return exgausters


class AnalyzeResponse(BaseModel):
    """
    Модель ответа
    """
    moment: Optional[datetime]
    exgauster_1_u_171: Optional[Exgauster]
    exgauster_2_u_172: Optional[Exgauster]
    exgauster_3_f_171: Optional[Exgauster]
    exgauster_4_f_172: Optional[Exgauster]
    exgauster_5_x_171: Optional[Exgauster]
    exgauster_6_x_172: Optional[Exgauster]

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
    skip: Optional[int] = 60
    exgauster_1_u_171: Optional[int]
    exgauster_2_u_172: Optional[int]
    exgauster_3_f_171: Optional[int]
    exgauster_4_f_172: Optional[int]
    exgauster_5_x_171: Optional[int]
    exgauster_6_x_172: Optional[int]

    @property
    def exgausters(self) -> dict:
        exgauster_fields = [
            "exgauster_1_u_171",
            "exgauster_2_u_172",
            "exgauster_3_f_171",
            "exgauster_4_f_172",
            "exgauster_5_x_171",
            "exgauster_6_x_172",
        ]

        all_none = all(getattr(self, field, None) is None for field in exgauster_fields)
        if all_none:
            exgausters = {field: 1 for field in exgauster_fields}
        else:
            exgausters = {
                field: getattr(self, field, None)
                for field in exgauster_fields
                if getattr(self, field, None) is not None
            }
        exgausters["moment"] = 1

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

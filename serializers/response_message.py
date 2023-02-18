from datetime import datetime
from serializers.exgauster import Exgauster

from pydantic import BaseModel


class ResponseMessage(BaseModel):
    """
    Модель ответа
    """
    moment: datetime
    exgauster_1_u_171: Exgauster
    exgauster_2_u_172: Exgauster
    exgauster_3_f_171: Exgauster
    exgauster_4_f_172: Exgauster
    exgauster_5_x_171: Exgauster
    exgauster_6_x_172: Exgauster

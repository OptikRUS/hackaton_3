from serializers import (
    RequestMessage,
    ResponseMessage,
    build_exgauster_1,
    build_exgauster_2,
    build_exgauster_3,
    build_exgauster_4,
    build_exgauster_5,
    build_exgauster_6
)


def parse_and_build(msg: RequestMessage) -> ResponseMessage:
    message = RequestMessage.parse_raw(msg.value.decode("utf-8"))
    exgauster_1 = build_exgauster_1.build_exgauster_1_u_171(message)
    exgauster_2 = build_exgauster_2.build_exgauster_2_u_172(message)
    exgauster_3 = build_exgauster_3.build_exgauster_3_f_171(message)
    exgauster_4 = build_exgauster_4.build_exgauster_4_f_172(message)
    exgauster_5 = build_exgauster_5.build_exgauster_5_x_171(message)
    exgauster_6 = build_exgauster_6.build_exgauster_6_x_172(message)

    response = ResponseMessage(
        moment=message.moment,
        exgauster_1_u_171=exgauster_1,
        exgauster_2_u_172=exgauster_2,
        exgauster_3_f_171=exgauster_3,
        exgauster_4_f_172=exgauster_4,
        exgauster_5_x_171=exgauster_5,
        exgauster_6_x_172=exgauster_6,
    )
    return response

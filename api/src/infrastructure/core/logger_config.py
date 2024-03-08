# import json
# import logging
# from logtail import LogtailHandler
# from flask_restful import request
# from infrastructure.core.settings import settings
# from infrastructure.utils import Utils


# handler = LogtailHandler(source_token=settings.BETTERSTACK_SOURCE_TOKEN)
# logger = logging.getLogger(__name__)
# logger.setLevel(logging.INFO)
# logger.handlers = []
# logger.addHandler(handler)


# def get_token_user_id(headers):
#     full_token = headers.get("Authorization")
#     token = full_token.split(" ")[1] if full_token else ""
#     data = None
#     try:
#         utils = Utils()
#         data = utils.tokens.decode_access_token(token=token)
#     except Exception:
#         data = None
#     return data["user_id"] if data else None


# def remove_sensitive_data(body_str, path):
#     return {}


def send_log():
    return True
    # headers = request.headers
    # user_id = get_token_user_id(headers=headers)
    # path = request.path
    # method = request.method
    # message = f"[{method}] {path}"
    # body_str = request.get_data().decode("utf-8")
    # body = remove_sensitive_data(body_str=body_str, path=path)

    # if method != "OPTIONS":
    #     logger.info(
    #         message,
    #         extra={
    #             "method": method,
    #             "path": path,
    #             "user_id": user_id,
    #             "body": body,
    #         },
    #     )

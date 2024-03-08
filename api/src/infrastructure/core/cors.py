from flask import Flask
from flask_cors import CORS
from infrastructure.core.settings import settings


def cors_config(app: Flask) -> None:
    origins = (
        ["https://drinquepedia.com"]
        if settings.ENV == "production"
        else ["http://localhost:5050", "https://drinquepedia.com"]
    )
    CORS(
        app,
        resources={r"/*": {"origins": origins}},
    )

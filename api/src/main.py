from typing import Tuple

from flask import Flask
from flask_restful import Api
from infrastructure.core.cors import cors_config
from infrastructure.core.database import db, ma
from infrastructure.core.exception_handlers import (
    not_found_handler,
    unhandled_exception_handler,
)
from infrastructure.core.logger_config import send_log
from infrastructure.core.settings import settings
from infrastructure.routes.v1.routes import setup_routes


def create_app() -> Flask:
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = settings.DB_URL
    register_cors(app)
    register_routes(app)
    register_errorhandlers(app)
    register_loggers(app)
    register_extensions(app)
    return app


def register_cors(app: Flask) -> None:
    cors_config(app)


def register_routes(app: Flask) -> None:
    api = Api(app, prefix=settings.API_V1_PREFIX)
    setup_routes(api)


def register_errorhandlers(app: Flask) -> None:
    @app.errorhandler(Exception)
    def handle_exception(error: Exception) -> Tuple[dict[str, str], int]:
        return unhandled_exception_handler(error)

    @app.errorhandler(404)
    def handle_not_found(error: Exception) -> Tuple[dict[str, str], int]:
        return not_found_handler(error)


def register_loggers(app: Flask) -> None:
    @app.before_request
    def before_request() -> None:
        send_log()


def register_extensions(app: Flask) -> None:
    db.init_app(app)
    ma.init_app(app)
    return None


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=3000, debug=True)

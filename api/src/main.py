from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource
from infrastructure.core.database import db, ma

# from infrastructure.routes.v1.routes import setup_routes
# from infrastructure.core.logger_config import send_log
from infrastructure.core.settings import settings
from models import Drink
from schemas.drink import DrinkSchema


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = settings.DB_URL
    register_cors(app)
    register_routes(app)
    register_errorhandlers(app)
    # register_loggers(app)
    register_extensions(app)
    return app


def register_cors(app):
    origins = ["http://localhost:5050", "https://drinquepedia.com"]
    cors = CORS(
        app,
        resources={r"/*": {"origins": origins}},
    )
    return cors


def register_routes(app):
    # api = Api(app, prefix=settings.API_V1_PREFIX)
    health_api = Api(app)
    # setup_routes(api)

    class Health(Resource):
        def get(self):
            query = db.select(Drink).where(
                Drink.id == "87ecda1c-433a-4aab-aa76-e38858fd9bc1"
            )
            drink = db.session.scalar(query)
            return {"drink": DrinkSchema().dump(drink)}, 200
            # return {"health": "drinquepedia2 "}, 200

    health_api.add_resource(Health, "/health")


def register_errorhandlers(app):
    @app.errorhandler(Exception)
    def handle_exception(error):
        error_message = (
            "Unhandled error" if str(error).__contains__("sqlalchemy") else str(error)
        )
        return {"code": "UNHANDLED_ERROR", "message": error_message}, 500


# def register_loggers(app):
#     @app.before_request
#     def before_request():
#         send_log()


def register_extensions(app):
    db.init_app(app)
    ma.init_app(app)
    return None


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=3000, debug=True)

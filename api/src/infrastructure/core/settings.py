import os

from dotenv import load_dotenv
from sqlalchemy.orm import declarative_base

load_dotenv()


class Settings:
    ENV = os.environ.get("ENV")
    API_V1_PREFIX = "/v1"
    DB_URL = f"mysql+pymysql://{os.environ.get('MYSQL_USER')}:{os.environ.get('MYSQL_PASSWORD')}@{os.environ.get('MYSQL_HOST')}:{os.environ.get('MYSQL_PORT')}/{os.environ.get('MYSQL_DATABASE')}?use_unicode=True"
    DB_BASE_MODEL = declarative_base()
    WEB_BASE_URL = os.environ.get("WEB_BASE_URL") or ""
    API_BASE_URL = os.environ.get("API_BASE_URL") or ""

    class Config:
        case_sensitive = True


settings = Settings()

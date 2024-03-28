FROM python:3.12.2

ENV POETRY_VIRTUALENVS_CREATE=false
ENV POETRY_VIRTUALENVS_IN_PROJECT=false
ENV POETRY_NO_INTERACTION=1

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN python3 -m pip install poetry

RUN poetry install

COPY . .

EXPOSE 3000

ENTRYPOINT ["sh", "/app/entrypoint.sh"]

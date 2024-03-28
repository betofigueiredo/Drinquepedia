#!/bin/sh

alembic upgrade head

python src/main.py

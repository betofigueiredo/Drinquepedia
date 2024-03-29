ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

ifndef APPLICATION_ENV
	include api/.env
endif

build:
	docker compose build

rebuild:
	docker compose build --no-cache

rb_web:
	docker compose build drinquepedia_web --no-cache

rb_api:
	docker compose build drinquepedia_api --no-cache

up:
	docker compose up

up_d:
	docker compose up -d

down:
	docker compose down


ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

ifndef APPLICATION_ENV
	include .env
endif

build:
	docker compose build

rebuild:
	docker compose build --no-cache

rb-web:
	docker compose build drinquepedia_web --no-cache

rb-api:
	docker compose build drinquepedia_api --no-cache

up:
	docker compose up

up-d:
	docker compose up -d

down:
	docker compose down

deploy-web:
	cd web; npm run build; rsync -azP --delete dist/ $(SSH_WEB_USER)@$(SSH_WEB_HOST):$(SSH_WEB_FOLDER)

deploy-api:
	rsync -azP --delete api/ $(SSH_API_USER)@$(SSH_API_HOST):$(SSH_API_FOLDER)

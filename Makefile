NAME=laravel8-blog
VERSION=0

Uid = $(shell id -u)
Gid = $(shell id -g)
pwd = $(shell pwd)

build:
	docker run --rm -u $(Uid):$(Gid) \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php80-composer:latest \
        composer install --ignore-platform-reqs \
    && cp .env.example .env

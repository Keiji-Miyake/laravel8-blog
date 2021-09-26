# laravel-blog

Laravel 練習用

-   Laravel8
-   Laravel sail
-   Laravel Breeze

## 構築

```shell
vendor/bin/sail composer require laravel/breeze --dev
vendor/bin/sail artisan breeze:install react
vendor/bin/sail composer require barryvdh/laravel-debugbar --devcomposer require
vendor/bin/sail npm install
vendor/bin/sail npm run dev
vendor/bin/sail artisan migrate
```

## migrate

```shell
vendor/bin/sail artisan migrate:fresh --seed
```

## シーディング

```shell
# 作成
vendor/bin/sail artisan make:seeder UserSeeder
## 作成したら、DatabaseSeeder.phpに登録する。
# 実行
vendor/bin/sail artisan db:seed
vendor/bin/sail artisan db:seed --class=UserSeeder

```

## Eloquent

```shell
# モデルとFlightFactoryクラスを生成
php artisan make:model Flight --factory
php artisan make:model Flight -f
# モデルとFlightSeederクラスを生成
php artisan make:model Flight --seed
php artisan make:model Flight -s
# モデルとFlightControllerクラスを生成
php artisan make:model Flight --controller
php artisan make:model Flight -c
# モデルとマイグレーション、ファクトリ、シーダ、およびコントローラを生成
php artisan make:model Flight -mfsc
# モデルとマイグレーション、ファクトリ、シーダ、およびコントローラを生成する短縮形
php artisan make:model Flight --all
# ピボットモデルを生成
php artisan make:model Member --pivot
```

## フォームリクエストバリデーション

```shell
vendor/bin/sail artisan make:request Post/StoreRequest
```

## ブラウザテスト

```shell
vendor/bin/sail composer require --dev laravel/dusk
vendor/bin/sail artisan dusk:install
vendor/bin/sail dusk
```

## CodeSniffer

### PHP

```shell
# install
vendor/bin/sail composer require squizlabs/php_codesniffer --dev
# composer.json 修正
    "scripts": {
        ...
        "phpcs": [
            "phpcs --standard=PSR12"
        ],
        "phpcbf": [
            "phpcbf --standard=PSR12"
        ]
    },
# 判定
vendor/bin/sail composer phpcs /path/to/dir or file
# 修正
vendor/bin/sail composer phpcbf /path/to/dir or file
```

### JS

ESLint と Prettier を併用する。
コード整形は Prettier で行うのがよい(できることが多い、設定が手軽で確実)。

```shell
# 判定
vendor/bin/sail npx eslint resources/js
# 修正(prettierでやったほうがいい)
vendor/bin/sail npx eslint resources/js --fix
# 判定
vendor/bin/sail npx prettier --check .
# 修正
vendor/bin/sail npx prettier --write .
```

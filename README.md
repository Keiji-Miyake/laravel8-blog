# laravel-blog

Laravel練習用

- Laravel8
- Laravel sail
- Laravel Breeze

```
vendor/bin/sail composer require laravel/breeze --dev
vendor/bin/sail artisan breeze:install react
vendor/bin/sail npm install
vendor/bin/sail npm run dev
vendor/bin/sail artisan migrate
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

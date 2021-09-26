# Frontend 開発環境

## Linter + Formatter

-   Linter: ESLint (https://eslint.org/docs/rules/)
-   Formatter: Prettier(プリティア) (https://prettier.io/docs/en/options.html)

### eslint install

```shell
vendor/bin/sail npm install --save-dev eslint
vendor/bin/sail npx eslint --init
```

### eslint plugin install

#### import のソート

```shell
vendor/bin/sail npm install --save-dev eslint-plugin-import
# Edit .eslintrc.*
    "extends": [
        ...
+       "plugin:import/warnings",
        "prettier",
    ],
...
    "rules": {
+       "import/order": [
+           "warn",
+           {
+               "alphabetize": { "order": "asc" },
+               "newlines-between": "always"
+           }
+       ]
    }
```

### prettier

```shell
vendor/bin/sail npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
touch .prettierignore
```

### eslint の prettier パッケージインストール

```shell
vendor/bin/sail npm install --save-dev eslint-config-prettier #（ESLint のフォーマット関連のルールを全て無効にする、要は Prettier が整形した箇所に関してエラーを出さなくなる）
# Edit .eslintrc.* (必ずextendsの最後に加える)
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

## git commit 時に実行されるようにする

-   pre-commit hook

### package install

-   husky: Git コミット時やプッシュ時に指定したコマンドを実行できる
-   lint-stage: Git のステージに追加されたファイルにのみに ESLint などのリントを実行できる

```shell
vendor/bin/sail npm install husky lint-staged --save-dev
```

### husky setup

```shell
# Git フックを有効に。.husky/ と husky.sh が作られる
vendor/bin/sail npx husky install
# prepareに設定。再構築時に npm installをすると自動で実行される
vendor/bin/sail npm set-script prepare "husky install"
# pre-commit フックを追加する
vendor/bin/sail npx husky add .husky/pre-commit "vendor/bin/sail npx lint-staged"
# package.jsonに lint-staged の設定を追加する
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ]
  },

```

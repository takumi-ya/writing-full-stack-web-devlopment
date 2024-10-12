# backend

## 使用フレームワーク

Django(python)を使用

## 立ち上げ方

```bash
python manage.py runserver --settings config.settings.development
```

## パッケージ管理

requirements.txtで管理

## 各種コマンド

今回のアプリでは下記のコマンドに付け加えて以下のオプションをつけることが多い

```bash
--settings config.settings.development
```

### makemigrations

モデルの変更を検出し新しいマイグレーションのコードを生成する

```bash
python manage.py makemigrations
```

### migrate

生成されたマイグレーションをデータベースに適用する

```bash
python manage.py migrate
```

### showmigrations

適用されたマイグレーションと未適用のマイグレーションのリストを表示する

```bash
python manage.py showmigrations
```

### sqlmigrate

特定のマイグレーションに関連するSQLステートメントを表示する。これはデータベースに変更を与えない

```bash
python manage.py sqlmigrate [app_name] [migration_name]
```

### rollback

前のマイグレーションに戻す。これはmigrateコマンドともに使用する

```bash
python manage.py migrate [app_name] [previous_migration_name]
```

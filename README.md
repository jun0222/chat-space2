# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groupesテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|index: true, unique: true, null: false|

### Association
- has_many users
- has_many messages


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|index: true, unique: true, null: false|

### Association
- has_many messages
- has_many groupes


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text|foreign_key: true,null: false|

### Association
- belongs_to user
- belongs_to group


## group_memberテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

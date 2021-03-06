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

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|unique: true, null: false|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|index: true, unique: true, null: false|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text||
|image|text||
|user_id|integer||
|group_id|integer||

### Association
- belongs_to :user
- belongs_to :group


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

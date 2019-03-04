lock '~> 3.11.0'
#アプリケーション名
set :application,'chat-space2'
#レポジトリURL
set :repo_url, 'git@github.com:jun0222/chat-space2.git'
#対象ブランチ masterに固定
# set :branch, 'master'
#デプロイ先ディレクトリ フルパスで指定
# set :deploy_to, '/var/www/test'
#バージョン管理方法 subverion, git, mercurial, cvs, bzrなど
# set :scm, :git
#情報レベル info or debug
# set :log_level, :debug
#sudoに必要 これをtrueにするとssh -tで実行される
# set :pty, true
#sharedに入るものを指定
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')
#capistrano用bundleするのに必要
set :rbenv_type, :user
set :rbenv_ruby, '2.3.1'

# set :default_env, { path: "/usr/local/rbenv/shims:/usr/local/rbenv/bin:$PATH" }
#5回分のreleasesを保持する
# set :keep_releases, 5
set :ssh_options, auth_methods: ['publickey'],
                  keys: ['~/.ssh/pengin.pem']

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
set :keep_releases, 5

after 'deploy:publishing', 'deploy:restart'

#タスク定義
namespace :deploy do #タスクnamespace
    #desc 'タスク説明'
    #task :restart do #タスク定義
        #ここにタスク処理内容を記述
    #end
  #after :finishing, 'deploy:cleanup' #task実行タイミングを指定できます。詳細は下記
  #http://capistranorb.com/documentation/getting-started/flow/
    #サンプルにunicorn再起動タスク
    # desc 'Restart application'
    task :restart do
      invoke 'unicorn:restart' #lib/capustrano/tasks/unicorn.cap内処理を実行
    end
  # after :finishing, 'deploy:cleanup'
end


# config valid for current version and patch releases of Capistrano

# コメントアウトにlockから.gitまでを変えた。
# lock "~> 3.11.0"

# set :application, "my_app_name"
# set :repo_url, "git@example.com:me/my_repo.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

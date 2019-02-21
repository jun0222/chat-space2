Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  get '/users/search', to: 'users#search'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end

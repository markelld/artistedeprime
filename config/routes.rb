Rails.application.routes.draw do  
  # resources :comments
  # resources :posts 
  # resources :comments, only: :index
  #comments need to reference post
  resources :users
  resources :comments 
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    post '/auth/login', to: 'authentication#login' 
    get '/auth/verify', to: 'authentication#verify'  
    resources :users, only: :create
end

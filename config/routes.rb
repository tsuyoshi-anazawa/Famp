Rails.application.routes.draw do

  root 'posts#index'
  resources :posts, only: [:new,:create,:index,:show,:destroy]
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :flashcards
  resources :user_cardsets
  resources :cardsets
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

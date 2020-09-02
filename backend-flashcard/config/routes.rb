Rails.application.routes.draw do
  resources :flashcards
  
  resources :cardsets do 
    post('/flashcards', to: 'flashcards#create')
  end
  resources :users

  post('/login', to: 'authentication#login')
  post('/logout', to: 'authentication#logout')
  get('/is_logged_in', to: 'authentication#is_logged_in')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

class Cardset < ApplicationRecord
    has_many :user_cardsets
    has_many :users, through: :user_cardsets
    has_many :flashcards

end

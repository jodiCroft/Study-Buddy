class User < ApplicationRecord
  has_many :user_cardsets
  has_many :cardsets, through: :user_cardsets
  has_secure_password

  validates :username, presence: true, uniqueness: true



  
end

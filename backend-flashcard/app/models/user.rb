class User < ApplicationRecord
  has_many :cardsets
  
  has_secure_password

  validates :username, presence: true, uniqueness: true



  
end

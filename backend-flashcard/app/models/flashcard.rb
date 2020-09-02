class Flashcard < ApplicationRecord
  belongs_to :cardset
  has_one :user, through: :cardset
  validates :cardset_id, presence: true
end

class Flashcard < ApplicationRecord
  belongs_to :cardset
 
  validates :cardset_id, presence: true
end

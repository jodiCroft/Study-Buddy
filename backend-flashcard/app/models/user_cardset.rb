class UserCardset < ApplicationRecord
  belongs_to :user
  belongs_to :cardset
end

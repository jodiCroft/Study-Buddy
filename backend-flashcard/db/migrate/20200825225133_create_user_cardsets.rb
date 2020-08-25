class CreateUserCardsets < ActiveRecord::Migration[6.0]
  def change
    create_table :user_cardsets do |t|
      t.references :user, null: false, foreign_key: true
      t.references :cardset, null: false, foreign_key: true

      t.timestamps
    end
  end
end

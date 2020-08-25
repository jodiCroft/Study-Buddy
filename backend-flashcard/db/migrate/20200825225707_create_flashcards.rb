class CreateFlashcards < ActiveRecord::Migration[6.0]
  def change
    create_table :flashcards do |t|
      t.string :front
      t.string :back
      t.string :hint
      t.references :cardset, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateCardsets < ActiveRecord::Migration[6.0]
  def change
    create_table :cardsets do |t|
      t.string :title
      t.string :subject
      t.string :access
      t.string :description

      t.timestamps
    end
  end
end

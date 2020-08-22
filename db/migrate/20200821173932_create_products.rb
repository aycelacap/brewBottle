class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :category_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.timestamps
    end
  end
end

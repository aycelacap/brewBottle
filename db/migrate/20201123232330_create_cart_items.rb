class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity
      t.timestamps
    end

    add_index :cart_items, :user_id, :unique => false
    add_index :cart_items, :product_id, :unique => false
    add_index :cart_items, [:user_id, :product_id], :unique => true
  end
end


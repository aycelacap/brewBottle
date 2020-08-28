class AddColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :item_type, :string, null: false 
  end
end

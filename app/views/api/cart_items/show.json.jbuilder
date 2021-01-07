json.extract! @cart_item, :id, :user_id, :product_id, :quantity
json.product @cart_item.product, :category_id, :name, :description, :item_type, :price
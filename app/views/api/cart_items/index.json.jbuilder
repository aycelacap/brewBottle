@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item, :category_id, :name, :description, :item_type, :price
        json.product do 
            json.partial! "api/products/product", product: cart_item.product
            json.photoUrl url_for(cart_item.product.photo)
        end
    end
end 
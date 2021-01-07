@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item, :id, :product_id, :user_id, :quantity
        json.product do 
            # debugger
            json.partial! "api/products/product", product: cart_item.product
            # json.partial! "api/products/product", :products [@products]
            # json.photoUrl url_for(cart_item.product.photo)
            # json.photoUrls @product.photos.first { |file| url_for(file) }

            
        end
        # json.productPrice cart_item.product.price
    end
end 
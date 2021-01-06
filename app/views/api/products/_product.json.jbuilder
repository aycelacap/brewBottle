# @products.each do |product|
    # debugger
    json.set! product.id do
        # place debugger here
    
        json.extract! product, :category_id, :name, :description, :item_type, :price
        # json.photos url_for(product.photos)
        # we are not able to access the photos for the cartitems index, idk why
    end
# end
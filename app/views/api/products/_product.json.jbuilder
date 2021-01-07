# @products.each do |product|
    # debugger

    # json.set! product.id do
        # place debugger here
    
        json.extract! product, :category_id, :name, :description, :item_type, :price
        # json.photoUrls @product.photos.map { |file| url_for(file) }
        # we are not able to access the photos for the cartitems index, idk why yet
    # end
# end   
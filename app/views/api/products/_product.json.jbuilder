# @products.each do |product|
    # debugger
    json.set! product.id do
        json.extract! product, :category_id, :name, :description, :item_type, :price
        # json.photos url_for(product.photos)
    end
# end
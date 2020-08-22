@products.each do |product|
    json.set! product.id do
        json.extract! product, :category_id, :name, :description, :item_type, :price 
    end
end
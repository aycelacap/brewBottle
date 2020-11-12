json.extract! product, :category_id, :name, :description, :item_type, :price


# if @product.photo.attached?
json.photo url_for(product.photo)
# else
#     json.photo ''
# end
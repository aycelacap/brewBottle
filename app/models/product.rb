class Product < ApplicationRecord
    validates :category_id, :name, :description, :item_type, :price, presence: true

    has_one_attached :photo
end

#  q = (category_id: 101, name: "test1", description: "this is a test", item_type: "i may not need this column", price: 1000)
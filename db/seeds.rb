# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

demo1 = User.create!(email: "caffeinated@brewbottle.cafe", first_name: "Caffeinated", last_name: "Brew", password: "hunter12")

product1 = Product.create!(category_id: 100, name: "Chemex", description: "Made from borosilicate glass and fastened with a wood collar and tie, the Chemex Coffeemaker brews without imparting any flavors of its own", item_type: "coffee supply", price: 39.99)
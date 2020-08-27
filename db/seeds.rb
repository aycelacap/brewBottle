# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

# consumption
# productx = Product.create!(category_id: 105, name: "", description: "", item_type: "consumption", price:)

# supply
# productx = Product.create!(category_id: 100, name: "", description: "", item_type: "coffee supply", price:)




require 'open-uri'
demo1 = User.create!(email: "caffeinated@brewbottle.cafe", first_name: "Caffeinated", last_name: "Brew", password: "hunter12")

product4 = Product.create!(category_id: 105, name: "Opascope Espresso", description: "Opascope Espresso is a refreshing addition to a lineup once dominated by dense, chocolatey selections. It yields an effervescent shot, packed with stripes of tropicalia.", item_type: "consumption", price: 24.99)

file400 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/espresso1O.jpg')
file401 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/espresso2O.jpg')

product4.photos.attach(io: file400, filename: 'espresso1O.jpg')
product4.photos.attach(io: file401, filename: 'espresso2O.jpg')


# P2
product5 = Product.create!(category_id: 105, name: "Classic Blend Granola with Your Choice of a Blue Bottle Coffee Blend", description: "At Blue Bottle, we don’t necessarily believe in reinvention. Instead, we’re more about refining familiar comforts so they reach new heights. To wit, we bake our 
Classic Granola slowly with warm spices and both maple syrup and brown sugar, so it tastes richer, with a more satisfying crunch than any other granola we’ve ever tried. For our whole-bean coffee blends, we bring together high-quality, organic coffee so they create consistently delicious, harmonious cups, tasting better than you ever thought your morning coffee could.
Because we love how coffee draws out granola’s flavors, we’re offering them together. Try the granola Blue Bottle cafe style, with steamed milk. You can also enjoy it over yogurt or as a snack on its own. Either way, try it with a cup of coffee on the side.", item_type: "consumption", price: 27)

file500 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/granola1.jpg')
file501 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/granola2.jpg')

product5.photos.attach(io: file500, filename: 'granola1.jpg')
product5.photos.attach(io: file501, filename: 'granola2.jpg')


# P3

product39 = Product.create!(category_id: 100, name: "Blue Bottle x Fellow Electric Kettle", description: "We worked with San Francisco-based coffee tools designer Fellow to create this custom kettle, crafted in our signature Fog Grey, to evoke the calming tones of our cafes. With twelve hundred watts, it brings water to the desired temperature quickly, and its hold mode sustains that temperature for up to an hour. Its swan neck and maple handle gives you full control over the speed and volume of your pour. And the built-in timer tracks your brew time without the hassle of a stopwatch. All of that is controlled by a single knob, which makes the kettle a streamlined joy to use.", item_type: "coffee supply", price: 195)

file390 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/kettle1.jpg')
file391 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/kettle2.jpg')
product39.photos.attach(io: file390, filename: "kettle1.jpg")
product39.photos.attach(io: file391, filename: "kettle2.jpg")

# P4

product3 = Product.create!(category_id: 105, name: "Colombia Popayán Fall Harvest", description: "From the coffee-growing region near the western Colombian city of Popayán, this single origin delivers the chocolate and brown-sugar notes of Latin America along with a delicious complexity and a mix of citrusy and apple-like acidity.", item_type: "consumption", price: 15.99)

file300 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/coffeeBeanBag1.jpg')
file301 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/coffeeBeanBag2.jpg')

product3.photos.attach(io: file300, filename: 'coffeeBeanBag1.jpg')
product3.photos.attach(io: file301, filename: 'coffeeBeanBag2.jpg')

# P5




# P6



# P7

product6 = Product.create!(category_id: 105, name: "Blend Box", description: "Our blends are carefully chosen from two or three coffees for their harmonious relationship in the cup. Roasted with desired flavor profiles in mind, each blend combines varying regions, climates, and processing methods to arrive at something that’s as comforting as an old friend, but flushed with the excitement of first love.", item_type: "consumption", price: 35)

file600 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/beans1.jpg')
file601 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/beans2.jpg')

product6.photos.attach(io: file600, filename: 'beans1.jpg')
product6.photos.attach(io: file601, filename: 'beans2.jpg')



product7 = Product.create!(category_id: 105, name: "Espresso Set", description: "While you can use any coffee to make espresso, we created these blends specifically for using with this potent brew method. From the fruity Opascope to the chocolatey Hayes Valley, these showcase the spectrum of what this drink can be.", item_type: "consumption", price: 36)

file700 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/espr1.jpg')
file701 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/espr2.jpg')

product7.photos.attach(io: file700, filename: "espr1.jpg")
product7.photos.attach(io: file701, filename: "espr2.jpg'")

# file700 = open('')
# file701 = open('')
# product7.photos.attach(io: file00, filename: "")
# product7.photos.attach(io: file01, filename: "")

product8 = Product.create!(category_id: 105, name: "Bella Donovan", description: "Bella Donovan is the wool sweater of our blends—comforting, cozy, and enveloping. Our most popular blend, Bella is a variation of the archetypal Moka-Java pairing, in which a wild and jammy natural from Ethiopia finds balance with more substantive coffees from Sumatra and Peru. It stands on the darker side of things, weathers the rigors of the automatic drip machine well, and stands up to milk or cream—though it is just as elegant black.", item_type: "consumption", price: 18)

file800 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/cozycoff1.jpg')
file801 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/cozycoff2.jpg')
product8.photos.attach(io: file800, filename: "cozycoff1.jpg")
product8.photos.attach(io: file801, filename: "cozycoff2.jpg")

# P9

product9 = Product.create!(category_id: 105, name: "Giant Steps", description: 'Named after John Coltrane\'s Giant Steps, this dense and substantial coffee is not unlike the jazz visionary\'s signature "sheets of sound.” Our darkest blend, comprising organic coffees from Uganda, Papua New Guinea, and Sumatra, is downright viscous in the cup. Just like Coltrane\'s ability to cascade into high-pitched octaves with maximum control, this coffee\'s inflections of stone fruit lighten without losing focus. Improvisations of milk or cream—in any proportion—shine.', item_type: "consumption", price: 18)

file900 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/coltrane1.jpg')
file901 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/coltrane2.jpg')
product9.photos.attach(io: file900, filename: "coltrane1.jpg")
product9.photos.attach(io: file901, filename: "coltrane2.jpg")

# product10 = Product.create!(category_id: 105, name: "Three Africas", description: "Three Africas marries the radiant fruit of two coffees from Ethiopia, one washed and one natural, with the balance and authority of a washed coffee from Uganda. Each component excels on its own, but together, they traverse boundaries. No matter the brew method, this blend, which is our brightest, has good body and an approachable complexity that takes to cream well, but stands just as radiantly on its own.", item_type: "consumption", price: 18)

# product11 = Product.create!(category_id: 105, name: "Beta Blend", description: "While many of our coffee blends are noteworthy for their sturdiness, the glassy and floral Beta Blend is cut from a different cloth. What began as a collaboration between our sourcing and digital teams has evolved into a delicate counterpoint to our heftier blends that is available for online purchase exclusively.", item_type: "consumption", price: 18)

# product12 = Product.create!(category_id: 105, name: "Brazil Caconde Serra do Cigano Valley", description: "Don’t let this chocolaty coffee’s easy appeal fool you. Its very existence owes to years of dreaming and hard work. The exporter behind it, Fazenda Ambiental Fortaleza (or FAF), is one of our oldest relationships. Since first tasting their own coffee back in 2011, they’ve gone from a sole organic farm in southern Brazil to the leader of a coalition of farmers dedicated to sustainable coffee production. You might call this single origin the grandchild of FAF, for it comes from nearby farms in the Serro do Cigano Valley and is naturally processed by João Hamilton, an early acolyte of FAF and mentor to neighboring farmers today.", item_type: "consumption", price: 12.50)

# product13 = Product.create!(category_id: 105, name: "Colombia Yacuanquer Constellations", description: "We love this coffee for its ease, but its slinky complexity is what keeps us wanting more. Like many Colombian single origins, it has a sweetness that veers toward browned sugars and dried fruit. Yet it’s the presence of more herbaceous and floral notes tucked beneath that sweetness (we can’t help but think of chamomile tea), not to mention a vivid brightness, that imbues every sip with both comfort and wonder. Its source is the 2,000-member Café Occidente cooperative, which hand-selects 100 farmers’ complementary washed-process coffees and combines them to make this gleaming cup.", item_type: "consumption", price: 12.50)

# product14 = Product.create!(category_id: 105, name: "Costa Rica Chirripó Régulo de Rivas", description: "We first encountered Régulo Gerardo Urena’s farm in Costa Rica’s Brunca region in 2013. Back then, specialty coffee buyers rarely gave the country’s southernmost region a thought. Farmers like Régulo, who had recently acquired tools to oversee coffee production from seed to export, were quick to change minds—ours included. We’ve been particularly impressed by his array of honey-processed coffees. He’s well situated to support that range. Nestled between two mountain ranges, which are themselves bordered by Panama and the Pacific, Urena makes the most of Brunca’s diverse microclimates by controlling every aspect of production on his farm.", item_type: "consumption", price: 12.50)

# product15 = Product.create!(category_id: 105, name: "Costa Rica Tarrazu La Lia", description: "Located in the interior mountains of Costa Rica, the Tarrazú coffee-growing region is the most famous in the country. These beans come from La Lia, a micromill founded by brothers Luis Alberto and Oscar Adolfo Monge, who have mastered what’s known as honey processing. Like painters selecting from a palette, they can calibrate how much fruit remains on the bean as it dries. The more fruit, the darker the “honey” and the more richly fruited the brew. Processed with nearly all the fruit scrubbed off the seed, this coffee is considered a “white” honey. On the spectrum, it’s the most refined and results in laser-focused flavors from first sip to last.", item_type: "consumption", price: 13)

# product16 = Product.create!(category_id: 105, name: "Mexico Chiapas Bella Vista Mayan Harvest", description: "After moving to San Francisco, Rosalba Cifuentes Tovia realized specialty coffee shops in the US rarely featured Mexican coffee. Remembering her extended family grew coffee in the mountains of Bella Vista in Chiapas, Mexico, she started exporting coffee from them and other farmers. By focusing on improving the quality of coffee grown, she has changed the lives of many smallholders there. Our partners at Royal Coffee introduced us to Mayan Harvest, and we are thrilled to offer this coffee for the first time. With its sweetness, full body, and raspberry nuance, it showcases the quality possible in coffees from Mexico.", item_type: "consumption", price: 12)

# product17 = Product.create!(category_id: 105, name: "Papua New Guinea Eastern Highlands Baroida Estate", description: "In the specialty coffee world, the South Pacific country of Papua New Guinea is a country to watch. After several years’ declining production, the industry is back on the rise, with bean quality constantly improving. We’re thrilled to offer this coffee from Baroida Estate for the first time. A remote plantation on Mount Jabara in the Eastern Highlands region, Baroida is producing some of the finest Papua New Guinea coffees we’ve ever tasted. It has the typical dried-fruit notes of the region plus an exceptionally deep sweetness. The Colbran family has owned Baroida Estate since the 1960s; they are setting new standards for quality as well as community stewardship, not only keeping meticulous records about their own lots, but also helping local growers process their coffees to reach the specialty market.", item_type: "consumption", price: 13)

# product18 = Product.create!(category_id: 105, name: "Rwanda Nyanza Iwacu", description: "Every year, we cup the latest offerings from the Rwanda Trading Company. This year, the lot from the Iwacu Washing Station was one of our favorites. Its tropical acidity reveals how sweet and effervescent the Bourbon variety can be when processed with meticulous care. The station is located in southern Rwanda, where water is scarce and washing stations are smaller than those in the west of the country. Fortunately, the team expertly harnesses the hard work of its contributing farmers to make beautiful coffee. Water-efficient processing technologies, shipshape bookkeeping, and progressive profit-sharing have helped Iwacu grow four times larger than it was when we first started enjoying its coffees in 2013.", item_type: "consumption", price: 12.25)

# product19 = Product.create!(category_id: 105, name: "17ft Ceiling Espresso", description: "Named for the building specs in our Mint Plaza cafe in San Francisco, this espresso blend is pure pleasure. We reverse-engineered a blue-collar Italian espresso blend (yes, Robusta!) with high-quality organic coffee to make a sturdy, crema-heavy, and unpretentious espresso. If Hayes Valley Espresso is like consuming a volume of In Search of Lost Time in liquid form, then 17ft Ceiling is like flipping through The New Yorker—edifying without being overly taxing.", item_type: "consumption", price: 18)

# product20 = Product.create!(category_id: 105, name: "Hayes Valley Espresso", description: "We developed our darkest espresso for the launch of our first brick-and-mortar in our friend Loring’s garage in Hayes Valley. Years later, it remains the standard espresso in all of our cafes. Lower-toned and minimally bright, Hayes Valley Espresso pulls a straight shot with a voluptuous tawny crema and a somewhat dangerous-looking viscosity. Milk, in any quantity, adds romance to the coffee’s brooding aspects, bringing out the inherent chocolate and adding a smooth, rounded touch.", item_type: "consumption", price: 18)

# product21 = Product.create!(category_id: 105, name: "Night Light Decaf", description: "Decaf should never feel like a concession. In fact, we consider this coffee a reward in its own right, especially given that its adherents drink it solely for its flavor.
# Like its predecessor, Decaf Noir, Night Light remains a delicious fusion of coffees from Sumatra and Central America, decaffeinated with the mind-boggling and chemical-free Swiss Water Process. And like Decaf Noir, this sweet and satisfying blend proves that decaf never has to compromise flavor—our coffee team describes it as “creamy and versatile” with decadent “malt” undertones.
# As for whether or not you still need an actual night light? We’ll let you decide. But we suggest that, like this coffee, your choice is guided by beauty rather than necessity.", item_type: "consumption", price: 20)


# # supply
# # productx = Product.create!(category_id: 100, name: "", description: "", item_type: "coffee supply", price:)

product22 = Product.create!(category_id: 100, name: "Kiyosumi pot", description: "We spent a year of research and tried 70 prototypes to develop our original pot with a team of engineers. After we landed on our design, we turned to skilled ceramicists in Japan to craft it for us. For the fifth anniversary of our first cafe opening in Japan, we created this limited-edition version in the subtle grey hue that matches the exterior of our Tokyo flagship, the Kiyosumi Shirakawa cafe.", item_type: "coffee supply", price: 30)


file220 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/teapot1.jpg')
file221 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/teapot2.jpg')
product22.photos.attach(io: file220, filename: "teapot1.jpg")
product22.photos.attach(io: file221, filename: "teapot2.jpg")

# P23

product23 = Product.create!(category_id: 100, name: "Hario Pot", description: "From Japan, the Hario pot joins form and function to make luscious cold brew effort-free.
All you need is ground coffee, clean water, and 8 to 12 hours in the refrigerator. The ultrafine filter means the cold brew pours out crystal clear.
Bonus: the filter is easily removable. Take it out and the glass and silicone bottle transforms into a stunning carafe for any beverage.", item_type: "coffee supply", price: 45)

file230 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/clayPot1.jpg')
file231 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/clayPot2.jpg')
product23.photos.attach(io: file230, filename: "clayPot1.jpg")
product23.photos.attach(io: file231, filename: "clayPot2.jpg")


# P24

product24 = Product.create!(category_id: 100, name: "Bodum Chambord 17oz French Press", description: "This excellent single-person French press from Bodum includes chrome feet, black bakelite plastic knob and handle, and special Bodum-designed insulated lid. This three-tasse design has better heat retention than the skinny three-tasse size.", item_type: "coffee supply", price: 40)

file240 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/frenchPress1.jpg')
file241 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/frenchPress2.jpg')
product24.photos.attach(io: file240, filename: "frenchPress1.jpg")
product24.photos.attach(io: file241, filename: "frenchPress2.jpg")

# product25 = Product.create!(category_id: 100, name: "Hario Nel Drip Set", description: "The wood-neck nel drip brews a coffee that is as clean as the Chemex, but denser and more viscous. Coffee from a nel is thick, focused and incredibly sweet – texturally reminiscent of mulled wine. It's quite moody and fragile, too: Water that's too hot, a hurried pour, or even an offhand remark might wither its complexity.", item_type: "coffee supply", price: 50)

# product26 = Product.create!(category_id: 100, name: "Bonavita 8-Cup Connoisseur Coffee Brewer", description: "The most elegant coffee you can make with a machine", item_type: "coffee supply", price: 190)

product27 = Product.create!(category_id: 100, name: "Coffee Carafe", description: "Our collaboration with Kinto began when we purchased a mere three cups from the Japanese company for one of our Tokyo cafes. We were so enamored with the quality that we decided to work together to make a custom carafe for our shops. We refined the dimensions and the height until we got it just right. And now, we’re offering this carafe for use in your home. It’s the same carafe that’s on the bar at every Blue Bottle in the U.S. and Tokyo. Once dripped, we recommend serving it in Kinto’s rounded mugs with maple wood saucers. They’re a pleasure to hold.", item_type: "coffee supply", price: 25)

file270 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/japMug1.jpg')
file271 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/japMug2.jpg')
product27.photos.attach(io: file270, filename: "japMug1.jpg")
product27.photos.attach(io: file271, filename: "japMug2.jpg")

# 

product1 = Product.create!(category_id: 100, name: "Chemex", description: "Made from borosilicate glass and fastened with a wood collar and tie, the Chemex Coffeemaker brews without imparting any flavors of its own.", item_type: "coffee supply", price: 39.99)

file100 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/chemex.jpg')
file101 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/chemexHipster1.jpg')

product1.photos.attach(io: file100, filename: 'chemex.jpg')
product1.photos.attach(io: file101, filename: 'chemexHipster.jpg')

# product28 = Product.create!(category_id: 100, name: "Blue Bottle Pour Over Kit", description: "Our Pour Over Kit gives you the tools and expertise you need to enjoy Blue Bottle cafe-quality coffee at home. If you’ve never tried our method before, brewing coffee with the Blue Bottle pour-over method is like switching from a butter knife to a Japanese cleaver: The coffee comes out clearer, cleaner, more fundamentally itself.", item_type: "coffee supply", price: 59)

# product29 = Product.create!(category_id: 100, name: "Blue Bottle Coffee Filters", description: "Our proprietary filters are made just for the Blue Bottle Coffee Dripper. They require no pre-wetting before use and impart no papery taste to the final cup.", item_type: "coffee supply", price: 15)

# product30 = Product.create!(category_id: 100, name: "AeroPress Filters", description: "These are the standard Aerobie Aeropress filters. One per serving. Enjoy!", item_type: "coffee supply", price: 6)

# product31 = Product.create!(category_id: 100, name: "Bonmac #4 Filters", description: "These are far and away our favorite filters for use in the Bonmac pour-over.", item_type: "coffee supply", price: 10)

# product32 = Product.create!(category_id: 100, name: "Chemex 6-Cup Filters", description: "This is a dispenser pack of (100) Chemex FS-100 Bonded Filter Squares. These filters will work and are designed for all sizes and styles of Chemex Coffee Brewers, particularly the 6-Cup brewer also available in our store.", item_type: "coffee supply", price: 11)

# product33 = Product.create!(category_id: 100, name: "Hario Nel Drip Spare Filters", description: 'Just as a bachelor regards his favorite pair of skivvies with an undying dedication that disregards basic tenets of sanity (and sanitariness), so too does the die-hard nel aficionado often push his filters to their stained and frayed brink. To this, we say "No more!" Our spare filter set includes three brand new filters, without the extra cost of a hoop or carafe. Let\'s face it: Everyone needs a change from time to time.', item_type: "coffee supply", price: 15)

# product34 = Product.create!(category_id: 100, name: "Hario Nel Drip Spare Hoop and Filter", description: "Perhaps you're interested in nel drip but don't want to add another carafe to your life? This set has all you need to filter coffee in the nel drip style, plus three spare flannel filters. Hoop is the same. Filter is the same. Hario-made. A modest amount of maintenance is necessary to keep the filters producing clean coffee.", item_type: "coffee supply", price: 25)

# product35 = Product.create!(category_id: 100, name: "Baratza Encore Grinder", description: "Whether you are looking for an espresso grinder or a grinder to help you explore that extensive range of brew methods, the Encore is a great all-around home grinder.", item_type: "coffee supply", price: 139)

# product36 = Product.create!(category_id: 100, name: "Baratza Vario Grinder", description: "Great coffees balance sweetness, acidity and body to create the perfect cup of coffee. The Baratza Vario is a perfect example of a great grinder combining ease-of-use and a sleek appearance with a penchant for bringing out fantastic flavors in your beans.
# This professional-grade grinder fits anywhere, from your kitchen to your office to your cafe. While sporting a small footprint, the Vario features an impressive range of capabilities, boasting 230 distinct and repeatable grind settings from fine grind for espresso to coarse grind for press pot.
# The design is beautiful as well as functional. Vario’s intuitive macro/micro adjustments make it easy to get the grind for a perfect espresso finish. Need something a little different? With a simple slide of the lever, you can switch from espresso to other coffee styles. And it couldn’t be easier to get the perfect amount — digital timers and three user-programmable buttons make accurate one-touch dosing and repeatable grind times a snap.
# The Vario’s unique 54mm ceramic flat burrs provide accurate, fast-grinding performance and remain sharp for twice as long as the best steel burrs. The high-torque DC motor and belt drive transmission mean your beans are in for a smooth, cool ride.
# As always, it’s not just what’s inside that matters; the Vario’s smooth operation carries over from internal to external, with front-mounted, easy-access control units, an 8 oz. grounds coffee collection bin, and Baratza’s exclusive PortaHolder for hands-free grinding into an espresso machine portafilter.", item_type: "coffee supply", price: 479)

# product37 = Product.create!(category_id: 100, name: "Baratza Virtuoso+ Grinder", description: "The Virtuoso+ lives up to its name by providing technical skill, classic style and a consistent, quality grind.", item_type: "coffee supply", price: 269)

# product38 = Product.create!(category_id: 100, name: "Takahiro Pour Over Kettle", description: "What a sports car is on the road, this kettle is in your hands: silky, responsive, and inimitably stylish. Handmade in Japan, this kettle has a cult following among Japanese baristas and devoted home brewers around the world. The graceful swan neck spout allows you precise control over your flow—necessary for the most expressive pour over.", item_type: "coffee supply", price: 135)



# product40 = Product.create!(category_id: 100, name: "Tsuki Usagi Jirushi Slim Pot", description: "Another kettle! We like this one as much as the Hario Buono, or maybe a touch more. It's beautifully made, holds a little less water (about 0.7 liters), and, unlike the Buono, is not suitable for heating water directly on the stove. But it's delightfully compact and, in the right hands, has a very silky pour.", item_type: "coffee supply", price: 60)

product41 = Product.create!(category_id: 100, name: "Hario Buono Kettle", description: "The Hario Buono swan-necked kettle is an indispensable tool for carefully executing pour-over coffee. This kettle works fine on a gas, induction, or electric stovetop. Uncomplicated and charming, it looks great on your stove, and is a pleasant introduction to the challenges of the slow pour. It holds approximately 1.2 liters.", item_type: "coffee supply", price: 55)

file410 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/sfPricedKettle.jpg')
file411 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/sfPricedKettle2.jpg')
product41.photos.attach(io: file410, filename: "sfPricedKettle.jpg")
product41.photos.attach(io: file411, filename: "sfPricedKettle2.jpg")

# product42 = Product.create!(category_id: 100, name: "Wood-Handled Pouring Kettle", description: "We like this kettle as much or perhaps a little more than the Hario Buono Kettle. Sturdily built in Japan, it's just the ticket for making a pour-over or Chemex. Not recommended for direct heating over a gas flame. It holds approximately 1 liter.", item_type: "coffee supply", price: 60)

product2 = Product.create!(category_id: 105, name: "Five-Pack Dark Cold Brew", description: "Our darkest blend, comprising organic coffees from Uganda, Papua New Guinea, and Sumatra, is downright viscous in the cup. Just like Coltrane’s ability to cascade into high-pitched octaves with maximum control, this coffee’s inflections of stone fruit lighten without losing focus. Improvisations of milk or cream—in any proportion—shine.", item_type: "consumption", price: 24.99)

file200 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/five-pack.jpg')
file201 = open('https://brewbottle-seeds.s3-us-west-1.amazonaws.com/five-pack2.jpg')

product2.photos.attach(io: file200, filename: 'five-pack.jpg')
product2.photos.attach(io: file201, filename: 'five-pack2.jpg')

# product43 = Product.create!(category_id: 100, name: "Fellow Stagg EKG Pour-Over Kettle", description: "Fellow designs kettles that make your morning ritual easier and more wondrous to behold. Their Stagg™ EKG Pour Over Kettle is an electric kettle ideal for a person who makes pour overs or French press and wants to get the most out of their machine: Twelve-hundred watts brings water up to the desired temperature quickly; a hold mode sustains temperature for up to an hour; and a built-in timer helps you brew the perfect cup of coffee—without the hassle of an additional timer or stopwatch.", item_type: "coffee supply", price: 149)

# product44 = Product.create!(category_id: 100, name: "Fellow Stagg Stovetop Pour-Over Kettle", description: "The Stagg™ Pour Over Kettle is for the aesthete who wants a tool to be as useful as it is elegant. Built for gas, electric, and induction stovetops, Stagg™ Stovetop Pour Over Kettle’s ergonomic grip and counterbalanced handle make for an unwavering pour, while its graceful spout ensures an even flow rate with to-the-drop precision. Available in matte black, your eyes will be satiated even before your cup of coffee is ready to drink.", item_type: "coffee supply", price: 79)

# product45 = Product.create!(category_id: 100, name: "Blue Bottle Coffee x Fellow — Stagg™ Mini Pour-Over Kettle", description: "When it comes to delicious coffee, every aspect of your pour-over ritual plays a part, from the grind of your beans to the rate of your bloom. With its precision-pour spout, the Stagg™ Mini Pour-Over Kettle gives you total control over the volume and speed of every pour, allowing you to create a cup that matches your instrument in elegance and beauty.
# Complete your pour-over experience with our Coffee Essentials Kit, now paired with this stunning kettle. It’s everything you need to make delicious pour-over coffee.", item_type: "coffee supply", price: 89)

# product46 = Product.create!(category_id: 100, name: "Acaia Pearl Model S Scale", description: "We use Acaia’s elegant and futuristic Pearl scale in all our cafes—it’s one of our secrets for brewing consistently delicious coffee every day. Acaia created an even more durable and user-friendly scale with the Model S, which displays the weight and time of your pour and also shows you the flow rate. A more consistently accurate flow rate usually means more delicious coffee. Think of the Model S as a world-class coffee coach who helps you refine your pour-over technique.
# Brewers who want to go deeper can create or download custom brew recipes to the Acaia smartphone app and then upload them to the scale. The scale will then prompt you with how much coffee to add and when and how much water to pour so you can hit every coffee’s sweet spot. Go team.", item_type: "coffee supply", price: 189)

# product47 = Product.create!(category_id: 100, name: "Acaia Pearl Scale", description: "A marriage of clean, modern design and brilliant functionality, this digital scale monitors the weight, time, and flow-rates as you brew coffee. Its Bluetooth connectivity means you can sync the timer with your mobile device, and its USB port lets you recharge the scale easily. Next stop: the moon.", item_type: "coffee supply", price: 140)

# product48 = Product.create!(category_id: 100, name: "BT Wedge Distribution Tool", description: "When you make espresso at home, it's more important than you might realize to distribute the grounds evenly before brewing; this distributor does that for you. South Korean cafe owner Il Seon Jeon designed a version of this distributor with a proprietary wedge shape to distribute the coffee without prematurely compressing it. Its polished surface means the grounds never stick. He then partnered with Utah-based company, Saint Anthony Industries, to precision-machine the stainless steel. Topped off with hardwood, the distributor is both a joy to hold as well as use.", item_type: "coffee supply", price: 149)

# product49 = Product.create!(category_id: 100, name: "Blue Bottle Cupping Spoon", description: "For the first time this year, we’re offering our coffee team’s stainless steel cupping spoon, a must-have at Blue Bottle HQ for evaluating roasts. It’s made by W. Wright Cutlery and Silverware in Sheffield, England, a family-run business in operation for over a century that’s become the specialty coffee world’s spoon maker of choice. An absolute pleasure to hold, the spoon has a rounded, deep bowl that makes for easier slurping, to amplify the aromas and flavors of coffee. We’ve engraved the handle with our Blue Bottle logo and included coffee cupping instructions.", item_type: "coffee supply", price: 19)

# product50 = Product.create!(category_id: 100, name: "Espresso Tamper", description: "To create a properly extracted espresso, the grounds must be compressed into a puck. When evenly compressed, a process called tamping, the grounds resist the pressure of the water so the coffee can brew to the right concentration.
# A good-quality tamper is essential to this process. We particularly love this tamper from St. Anthony, because it's just heavy enough to help you tamp with ease and its rounded wooden handle is a joy to hold. Known for its handcrafted coffee tools, St. Anthony, a company we deeply admire, also makes the distribution tool we use in our cafes.", item_type: "coffee supply", price: 87)

# product51 = Product.create!(category_id: 100, name: "Hario Range Server", description: "Given the array of breathtakingly beautiful glass decanting vessels available to wine devotees (and the encouraging downturn in collective scoffing at their raison d’être), we feel very comfortable presenting you with the Hario Range Server. It comfortably houses 360 ml, pours beautifully, and gives coffee an elegant venue in which it can cool and aerate before service. It is dishwasher safe.", item_type: "coffee supply", price: 25)

# product52 = Product.create!(category_id: 100, name: "Hario Scale", description: "Manufactured by our friends over at Hario Japan, this scale is durable, hyper-compact and quite sensitive. It measures in tenths of a gram, includes a built-in timer, and has a maximum capacity of 2 kilos (4.4 pounds). It comes in one color, matte black, which for our money is the best possible color a scale can come in. It takes two AAA batteries, which are included; and its modest dimensions – 7.5\" by 4.75\" by 1.2\" – make it a pleasingly practical option for travel.", item_type: "coffee supply", price: 60)

# product53 = Product.create!(category_id: 100, name: "Third Wave Water", description: "When I make coffee at home, I more often than not use Third Wave Water™. The flavors of the coffee are more focused when not obscured by poorly or inconsistently treated municipal water. —Ben Brewer, Director of Quality Control

# There are enough things to worry about when making coffee. Water quality doesn’t need to be one of them. But water, as much as any other variable, determines the deliciousness of your coffee. And while many cafes have fancy filtration systems in place, homes rarely do.

# Third Wave Water™ provides a simple solution to a complex problem: Powdered minerals when combined with distilled water, make a water with ideal mineral content for coffee brewing. The company makes two kinds—one for pour overs, the other for espresso. Both yield delicious results.", item_type: "coffee supply", price: 15)

















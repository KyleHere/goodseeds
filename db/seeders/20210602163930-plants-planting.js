'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = 'Plants';
        return queryInterface.bulkInsert(options, [
            { name: 'Aloe Vera', scientificName: 'Aloe vera', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/aloe-vera.jpeg' },
            { name: 'Jade Plant', scientificName: 'Crassula ovata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/jade-plant.jpeg' },
            { name: 'Spider Plant', scientificName: 'Chlorophytum comosum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/spider-plant.jpeg' },
            { name: 'Desert Rose', scientificName: 'Adenium obesum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/desert-rose.jpeg' },
            { name: 'Christmas Cactus', scientificName: 'Schlumbergera truncata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/christmas-cactus.jpeg' },
            { name: 'Moth Orchid', scientificName: 'Phalaenopsis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/moth-orchid.jpeg' },
            { name: 'ZZ Plant', scientificName: 'Zamioculcas zamiifolia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/zz-plant.jpeg' },
            { name: 'Ceriman', scientificName: 'Monstera deliciosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/ceriman.jpeg' },
            { name: 'Ponytail Palm', scientificName: 'Beaucarnea recurvata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/ponytail-palm.jpeg' },
            { name: 'Inch Plant', scientificName: 'Callisia repens', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/inch-plant.jpeg' },
            { name: 'String of Pearls', scientificName: 'Curio rowleyanus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/string-of-pearls.jpeg' },
            { name: 'Snake Plant', scientificName: 'Sansevieria cylindrica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/snake-plant.jpeg' },
            { name: 'Purple Shamrock', scientificName: 'Oxalis triangularis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/purple-shamrock.jpeg' },
            { name: 'Florist Kalanchoe', scientificName: 'Kalanchoe blossfeldiana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/florist-kalanchoe.jpeg' },
            { name: 'Fiddle Leaf Fig', scientificName: 'Ficus lyrata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/fiddle-leaf.jpeg' },
            { name: 'Parlor Palm', scientificName: 'Chamaedorea elegans', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/parlor-palm.jpeg' },
            { name: 'Golden Barrel Cactus', scientificName: 'Echinocactus grusonii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/golden-barrel.jpeg' },
            { name: 'English Ivy', scientificName: 'Hedera helix', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/english-ivy.jpeg' },
            { name: 'Flapjacks', scientificName: 'Kalanchoe luciae', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/flapjacks.jpeg' },
            { name: 'Panda Plant', scientificName: 'Kalanchoe tomentosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/panda-plant.jpeg' },
            { name: 'Haworthia', scientificName: 'Haworthiopsis reinwardtii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/haworthia.jpeg' },
            { name: 'Silver Squill', scientificName: 'Ledebouria socialis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/silver-squill.jpeg' },
            { name: 'Shrimp Plant', scientificName: 'Justicia brandegeeana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/shrimp-plant.jpeg' },
            { name: 'Coleus', scientificName: 'Coleus scutellarioides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/coleus.jpeg' },
            { name: 'Rubber Plant', scientificName: 'Ficus elastica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rubber-plant.jpeg' },
            { name: 'Queen of the Night', scientificName: 'Epiphyllum oxypetalum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/queen-of-the-night.jpeg' },
            { name: 'Wax Plant', scientificName: 'Hoya carnosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/wax-plant.jpeg' },
            { name: 'Chinese Money Plant', scientificName: 'Pilea peperomioides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/chinese-money-plant.jpeg' },
            { name: 'Prayer Plant', scientificName: 'Maranta leuconeura', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/prayer-plant.jpeg' },
            { name: 'Strawberry Begonia', scientificName: 'Saxifraga stolonifera', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/strawberry-begonia.jpeg' },
            { name: 'Arrowhead Plant', scientificName: 'Syngonium podophyllum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/arrowhead-plant.jpeg' },
            { name: 'Polka Dot Plant', scientificName: 'Hypoestes phyllostachya', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/polka-dot.jpeg' },
            { name: 'Elephant Bush', scientificName: 'Portulacaria afra', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/elephant-bush.jpeg' },
            { name: 'Bay Laurel', scientificName: 'Laurus nobilis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/bay-laurel.jpeg' },
            { name: 'String of Buttons', scientificName: 'Crassula perforata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/string-of-buttons.jpeg' },
            { name: 'Lucky Bamboo', scientificName: 'Dracaena sanderiana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/lucky-bamboo.jpeg' },
            { name: 'Zebra Haworthia', scientificName: 'Haworthiopsis fasciata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/zebra-haworthia.jpeg' },
            { name: 'Money Tree', scientificName: 'Pachira aquatica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/money-tree.jpeg' },
            { name: 'Gardenia', scientificName: 'Gardenia jasminoides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/gardenia.jpeg' },
            { name: 'Tree Philodendron', scientificName: 'Thaumatophyllum bipinnatifidum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/tree-philodendron.jpeg' },
            { name: 'Watch Chain Plant', scientificName: 'Crassula muscosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/watch-chain-plant.jpeg' },
            { name: 'Pencil Tree', scientificName: 'Euphorbia tirucalli', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pencil-tree.jpeg' },
            { name: 'Boston Fern', scientificName: 'Nephrolepis exaltata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/boston-fern.jpeg' },
            { name: 'Sensitive Plant', scientificName: 'Mimosa pudica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/sensitive-plant.jpeg' },
            { name: 'Rattlesnake Plant', scientificName: 'Goeppertia lancifolia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rattlesnake-plant.jpeg' },
            { name: 'Easter Cactus', scientificName: 'Hatiora gaertneri', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/easter-cactus.jpeg' },
            { name: 'Dwarf Umbrella Tree', scientificName: 'Schefflera arboricola', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/dwarf-umbrella.jpeg' },
            { name: 'Spineless Yucca', scientificName: 'Yucca gigantea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/spineless-yucca.jpeg' },
            { name: 'Lavender Scallops', scientificName: 'Kalanchoe fedtschenkoi', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/lavender-scallops.jpeg' },
            { name: 'Weeping Fig', scientificName: 'Ficus benjamina', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/weeping-fig.jpeg' },
            { name: 'Hardy Begonia', scientificName: 'Begonia grandis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/hardy-begonia.jpeg' },
            { name: 'Jewel Orchid', scientificName: 'Ludisia discolor', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/jewel-orchid.jpeg' },
            { name: 'Oyster Plant', scientificName: 'Tradescantia spathacea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/oyster-plant.jpeg' },
            { name: 'Bat Flower', scientificName: 'Tacca chantrieri', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/bat-flower.jpeg' },
            { name: 'Peace Lily', scientificName: 'Spathiphyllum wallisii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/peace-lily.jpeg' },
            { name: 'Lace Aloe', scientificName: 'Aristaloe aristata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/lace-aloe.jpeg' },
            { name: 'Golden Shrimp Plant', scientificName: 'Pachystachys lutea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/golden-shrimp-plant.jpeg' },
            { name: 'Corkscrew Vine', scientificName: 'Vigna caracalla', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/corkscrew-vine.jpeg' },
            { name: 'Butterfly Amaryllis', scientificName: 'Hippeastrum papilio', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/butterfly-amaryllis.jpeg' },
            { name: 'Corn Plant', scientificName: 'Dracaena fragrans', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/corn-plant.jpeg' },
            { name: 'Pink Lantern', scientificName: 'Medinilla magnifica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pink-lantern.jpeg' },
            { name: 'Pin Stripe Plant', scientificName: 'Goeppertia ornata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pin-stripe.jpeg' },
            { name: 'Sweetheart Hoya', scientificName: 'Hoya kerrii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/sweetheart-hoya.jpeg' },
            { name: 'Swiss Cheese Philodendron', scientificName: 'Monstera adansonii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/swiss-cheese.jpeg' },
            { name: 'Mother of Thousands', scientificName: 'Kalanchoe delagoensis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/mother-of-thousands.jpeg' },
            { name: 'Pineapple', scientificName: 'Ananas comosus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pineapple-plant.jpeg' },
            { name: 'Croton', scientificName: 'Codiaeum variegatum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/croton-plant.jpeg' },
            { name: 'Arabian Jasmine', scientificName: 'Jasminum sambac', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/arabian-jasmine.jpeg' },
            { name: 'Basket Plant', scientificName: 'Callisia fragrans', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/basket-plant.jpeg' },
            { name: 'Watermelon Peperomia', scientificName: 'Peperomia argyreia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/watermelon-plant.jpeg' },
            { name: 'Pink Quill', scientificName: 'Wallisia cyanea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pink-quill.jpeg' },
            { name: 'Buddha Belly Plant', scientificName: 'Jatropha podagrica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/buddha-belly.jpeg' },
            { name: 'Gardenias', scientificName: 'Gardenia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/gardenia.jpeg' },
            { name: 'Japanese Aralia', scientificName: 'Fatsia japonica', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/japanese-aralia.jpeg' },
            { name: 'Rattail Cactus', scientificName: 'Disocactus flagelliformis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rattail-cactus.jpeg' },
            { name: 'Orchid', scientificName: 'Cattleya', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/orchid.jpeg' },
            { name: 'Dragonfruit', scientificName: 'Hylocereus polyrhizus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/dragon-fruit.jpeg' },
            { name: 'Brazilian Plume', scientificName: 'Justicia carnea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/brazilian-plume.jpeg' },
            { name: 'Cardboard Palm', scientificName: 'Zamia furfuracea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/cardboard-palm.jpeg' },
            { name: 'Aluminum Plant', scientificName: 'Pilea cadierei', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/aluminum-plant.jpeg' },
            { name: 'Purple Heart', scientificName: 'Tradescantia pallida', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/purple-heart.jpeg' },
            { name: 'Soap Aloe', scientificName: 'Aloe maculata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/soap-aloe.jpeg' },
            { name: 'Orchid Cactus', scientificName: 'Disocactus ackermannii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/orchid-cactus.jpeg' },
            { name: 'Coconut Orchid', scientificName: 'Maxillaria tenuifolia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/coconut-cactus.jpeg' },
            { name: 'African Milk Tree', scientificName: 'Euphorbia trigona', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/african-milk-tree.jpeg' },
            { name: 'Senecio', scientificName: 'Curio talinoides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/senecio.jpeg' },
            { name: 'Bengal Clock Vine', scientificName: 'Thunbergia grandiflora', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/bengal-clock-vine.jpeg' },
            { name: 'Hoya', scientificName: 'Hoya curtisii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/hoya-plant.jpeg' },
            { name: 'Viejita', scientificName: 'Mammillaria hahniana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/viejita.jpeg' },
            { name: 'Ghost Plant', scientificName: 'Graptopetalum paraguayense', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/ghost-plant.jpeg' },
            { name: 'Japanese Holly Fern', scientificName: 'Cyrtomium falcatum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/japanese-holly-fern.jpeg' },
            { name: 'Ming Aralia', scientificName: 'Polyscias fruticosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/ming-aralia.jpeg' },
            { name: 'Trailing Jade', scientificName: 'Kleinia petraea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/trailing-jade.jpeg' },
            { name: 'Cane Begonia', scientificName: 'Begonia coccinea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/cane-begonia.jpeg' },
            { name: 'Red Edge Peperomia', scientificName: 'Peperomia tricolor', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/red-edge.jpeg' },
            { name: 'Slipper Orchid', scientificName: 'Paphiopedilum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/slipper-orchids.jpeg' },
            { name: 'Dancing Bones Cactus', scientificName: 'Hatiora salicornioides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/dancing-bones.jpeg' },
            { name: 'Miniature Pine Tree', scientificName: 'Crassula tetragona', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pine-tree.jpeg' },
            { name: 'Zebra Plant', scientificName: 'Aphelandra squarrosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/zebra-plant.jpeg' },
            { name: 'Bleeding Heart', scientificName: 'Clerodendrum thomsoniae', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/bleeding-hearts.jpeg' },
            { name: 'Peanut Cactus', scientificName: 'Echinopsis chamaecereus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/peanut-cactus.jpeg' },
            { name: 'Blue Ginger', scientificName: 'Dichorisandra thyrsiflora', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/blue-ginger.jpeg' },
            { name: 'Crinkle Leaf Plant', scientificName: 'Adromischus cristatus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/crinkle-leaf.jpeg' },
            { name: 'Lipstick Plant', scientificName: 'Aeschynanthus radicans', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/lipstick-plant.jpeg' },
            { name: 'Peacock Plant', scientificName: 'Goeppertia makoyana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/peacock-plant.jpeg' },
            { name: 'String of Turtles', scientificName: 'Peperomia rotundifolia', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/string-of-turtles.jpeg' },
            { name: 'Rhipsalis', scientificName: 'Rhipsalis pilocarpa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rhipsalis.jpeg' },
            { name: 'Swedish Ivy', scientificName: 'Plectranthus verticillatus', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/swedish-ivy.jpeg' },
            { name: 'Velvet Leaf Philodendron', scientificName: 'Philodendron hederaceum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/velvet-leaf.jpeg' },
            { name: 'White Velvet', scientificName: 'Tradescantia sillamontana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/white-velvet.jpeg' },
            { name: 'Sand Rose', scientificName: 'Anacampseros rufescens', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/sand-rose.jpeg' },
            { name: 'Ball Moss', scientificName: 'Tillandsia recurvata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/ball-moss.jpeg' },
            { name: 'Creeping Fig', scientificName: 'Ficus pumila', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/creeping-fig.jpeg' },
            { name: 'Bromeliad', scientificName: 'Guzmania', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/bromeliad.jpeg' },
            { name: 'Blue Chalksticks', scientificName: 'Curio repens', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/blue-chalksticks.jpeg' },
            { name: 'Butterfly Pea', scientificName: 'Clitoria ternatea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/butterfly-pea.jpeg' },
            { name: 'Firecracker Plant', scientificName: 'Cuphea ignea', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/firecracker.jpeg' },
            { name: 'Canambaia', scientificName: 'Rhipsalis teres', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/canambaia.jpeg' },
            { name: 'Chinese Evergreen', scientificName: 'Aglaonema commutatum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/chinese-evergreen.jpeg' },
            { name: 'Flower Dust Plant', scientificName: 'Kalanchoe pumila', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/flower-dust.jpeg' },
            { name: 'Cape Sundew', scientificName: 'Drosera capensis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/cape-sundew.jpeg' },
            { name: 'Spiny Pennywort', scientificName: 'Orostachys spinosa', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/spiny-pennywort.jpeg' },
            { name: 'Hanging Lobster Claw', scientificName: 'Heliconia rostrata', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/hanging-lobster.jpeg' },
            { name: 'Rex Begonia Vine', scientificName: 'Cissus javana', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rex-begonia.jpeg' },
            { name: 'Furry Kittens', scientificName: 'Cyanotis somaliensis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/furry-kittens.jpeg' },
            { name: 'Carrion Plant', scientificName: 'Ceropegia grandiflora', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/carrion-plant.jpeg' },
            { name: 'Pink Ice Plant', scientificName: 'Oscularia deltoides', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pink-ice.jpeg' },
            { name: 'Kalanchoe', scientificName: 'Kalanchoe millotii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/kalanchoe.jpeg' },
            { name: 'Purple Bell Vine', scientificName: 'Rhodochiton atrosanguineum', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/purple-bell.jpeg' },
            { name: 'Pincushion Peperomia', scientificName: 'Peperomia ferreyrae', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/pincushion-peperomia.jpeg' },
            { name: 'Fishtail Palm', scientificName: 'Caryota mitis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/fishtail-palm.jpeg' },
            { name: 'Rieger Begonia', scientificName: 'Begonia x hiemalis', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/riger-begonia.jpeg' },
            { name: 'Douglas Meadowfoam', scientificName: 'Limnanthes douglasii', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/douglas-meadowfoam.jpeg' },
            { name: 'Rosary Vine', scientificName: 'Crassula rupestris', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/rosary-vine.jpeg' },
            { name: 'Michoga', scientificName: 'Echinopsis huascha', imgUrl: 'https://goodseeds-by-gnamma.s3.us-west-1.amazonaws.com/michoga.jpeg' },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        options.tableName = 'Plants';
        return queryInterface.bulkDelete(options, null, {});
    }
};

export const productsList = [
    //burger
    {
        title: "shiitake mushroom",
        description: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75",
        imageWithCombo: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F74cd2faaa22109ae867c94197aa6b5fc.png&w=96&q=75",
        category: "burger",
        topSelling: true,
        details: {
            size: [
                { title: '150gm', price: 155 },
                { title: '200gm', price: 190 },
                { title: '400gm', price: 280 }
            ],
            bread: [
                { title: 'white', price: 0 },
                { title: 'brown', price: 5 }
            ],
            comboOptions: true,
            drinks: true,
            extras: true
        },
    },
    {
        title: "ANIMAL STYLE",
        description: "Crispy onion rings, topped with semi dijon mustard, creamy Buffalo sauce, and cheddar cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F36db94ef11461ebb6d1712215b530fb5.png&w=256&q=75",
        price: "EGP 155",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false,

    },
    {
        title: "BACON MUSHROOM JACK",
        description: "Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75",
        price: "EGP 190",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: true
    },
    {
        title: "OLD SCHOOL",
        description: "Pure beef burger patty, topped with our signature Buffalo sauce and cheddar cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fb4a9bce0163404b97f76e9cec638bb08.png&w=256&q=75",
        price: "EGP 145",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "BLUE CHEESE",
        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fb75ecb94aa633b1545de1318f9ca6d00.png&w=256&q=75",
        price: "EGP 150",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "THE RASTAFARI",
        description: "Crispy cheddar jalapeño bites, on a grilled burger patty with Cheddar cheese and creamy Buffalo sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fff183e68e89cbe5674dfb3c8e7b1a26b.png&w=256&q=75",
        price: "EGP 170",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "THE MUSCULAR",
        description: "Pure beef burger, topped with crispy cheese and creamy Buffalo sauce. Only for the serious eaters.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F802131a7b4dd1d3a1ca23625a53082c3.png&w=256&q=75",
        price: "EGP 175",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "THE SECRET BURGER",
        description: "Flamed burger patty with crispy onion and BBQ sauce with caramelized onion, topped with crispy secret cheese, and creamy Buffalo sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ff887f2ac7f1212f18ade68c61ca6075c.png&w=256&q=75",
        price: "EGP 180",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "HITCHHIKER",
        description: "Crispy mini Mozzarella bites, loaded with ketchup and mustard drops, beef bacon, and creamy Buffalo sauce on top of our pure beef burger patty.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F28ef9f8e1a9beb94215ed3bad733fe3c.png&w=256&q=75",
        price: "EGP 190",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "X URBAN",
        description: "A juicy burger patty with cheddar cheese, beef bacon, crispy onion rings with BBQ sauce, and caramelized onions.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F3cd5acc623e770c0388edf1d1c2c486b.png&w=256&q=75",
        price: "EGP 195",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "DOUBLE JAB",
        description: "Crispy cheese stuffed with beef bacon, topped with crispy onion, BBQ sauce, grilled burger patty, and smoked cheese sauce with mushroom.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F1dc8ed21ded6112b74fd79ed9cac077c.png&w=256&q=75",
        price: "EGP 205",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHARVROILED BBQ",
        description: "Grilled burger topped with sweet onion, BBQ sauce, creamy Charbroiled sauce, and Swiss cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F52c2c0cb4355e196903e8a64ebe94da0.png&w=256&q=75",
        price: "EGP 150",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHOLO'S",
        description: "Pickled sliced jalapeños, Buffalo sauce and cheddar cheese on top of our pure beef burger patty.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fce05d752c3ce86256f7c58445c8c2c90.png&w=256&q=75",
        price: "EGP 150",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "GRUNGY",
        description: "Pure beef burger patty, topped with our custom Grungy sauce, cheddar cheese, tomatoes, onion.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fde19c6b5cbb03bfc24ea31e5b0259121.png&w=256&q=75",
        price: "EGP 145",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "TRUFFLE BEEF BURGER",
        description: "Flame grilled burger with Sautéed mushroom, crispy onion, truffle sauce, and cheddar cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc189b5157ba5d891611ca27130e99ca8.png&w=256&q=75",
        price: "EGP 165",
        category: "burger",
        size: ['150', '200', '250'],
        topSelling: false
    },
    //chicken
    {
        title: "RASTAFARI CHICKEN",
        description: "Crispy cheddar jalapeño bites, with chicken strips, cheddar cheese and creamy Buffalo sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ff3da7a1ac56e2121f21e49b5b2e1622f.png&w=256&q=75",
        price: "EGP 145",
        category: "chicken",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHICKEN DITCH",
        description: "Chicken strips topped with beef bacon, sautéed mushroom, cheddar cheese, and our custom Secret sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ffce09e6a80b59a8cf77275475988c79a.png&w=256&q=75",
        price: "EGP 185",
        category: "chicken",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHOLO'S CHICKEN",
        description: "Chicken strips with pickled sliced jalapeños, Buffalo sauce, and melted cheddar cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F730e9ce3b48956379c62c9ca72ac2b42.png&w=256&q=75",
        price: "EGP 140",
        category: "chicken",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHICKEN BUSTER",
        description: "Chicken strips with Buffalo sauce and melted cheddar cheese.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F5f9673352a1f5fafd00e3e2ae90af631.png&w=256&q=75",
        price: "EGP 135",
        category: "chicken",
        size: ['150', '200', '250'],
        topSelling: true,
    },
    {
        title: "CHICKEN CRUSH",
        description: "Your choice of grilled or fried chicken with cheddar cheese, tomato, onion and mayo dijon.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8ae609f040a825addd016fc7ec08d7a9.png&w=256&q=75",
        price: "EGP 150",
        category: "chicken",
        size: ['150', '200', '250'],
        topSelling: false
    },
    //keto
    {
        title: "KETO LETTUCE WRAP",
        description: "Pure beef burger embedded in fresh whole romaine lettuce with cheddar cheese. Served with our..",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F107de22f659cd70e480e6ac560ef7d59.png&w=256&q=75",
        price: "EGP 165",
        category: "keto",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "KETO SHIITAKE MUSHROOM",
        description: "Sautéed fresh mushroom, cheddar cheese, and beef burger patty embedded in fresh whole romaine.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F084465fc13ed66144c17a5bc9f37524d.png&w=256&q=75",
        price: "EGP 170",
        category: "keto",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "SKINNY BUFFALO",
        description: "A grilled lean burger patty on a multi-grain bread bun with Thousand Island sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F933b3b93e79dc4ecae3d0af378b4ec84.png&w=256&q=75",
        price: "EGP 145",
        category: "keto",
        size: ['150', '200', '250'],
        topSelling: false
    },
    //appetizers
    {
        title: "LARGE FRENCH FRIES",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fea4bf95a863a674e0ae15fe02cafcebd.png&w=256&q=75",
        price: "EGP 35",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "BUFFALO FRIES",
        description: "French Fries with Ketchup, Mayonnaise and fresh onion.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8451f4eff364a68c8f9ed01d0fdb5b84.png&w=256&q=75",
        price: "EGP 60",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "COLESLAW",
        description: "Fried Buffalo Wings Served with Ranch Sauce or Wings Sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F00e14cb2b9b112c1ec40d7697e4ce5a3.png&w=256&q=75",
        price: "EGP 75",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "FRIED BUFFALO WINGS",
        description: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F5542a555dd006d63d373c6a23f57ca00.png&w=256&q=75",
        price: "EGP 80",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHEDDAR JALAPENO BITES",
        description: "Served with Ranch sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Faae91c5c0548fc3be5a977beaacf5f76.png&w=256&q=75",
        price: "EGP 70",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "MOZZARELLA BITES",
        description: "Served with Ranch sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8171f754ddaf57e6a3c4501b28abc209.png&w=256&q=75",
        price: "EGP 120",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "BACON FRIES",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0a8f39bde7dc27f249a1b1d36d73ebe3.png&w=256&q=75",
        price: "EGP 75",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHEESY FRIES",
        description: "Served with Thousand Island sauce",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4550b3ccfea85ef780f441ae4c83bc56.png&w=256&q=75",
        price: "EGP 70",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHEESE ONION BOMB",
        description: "Whole onion rings stuffed with cheese, served with free sauce",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0a8f39bde7dc27f249a1b1d36d73ebe3.png&w=256&q=75",
        price: "EGP 75",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "ONION RINGS",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4550b3ccfea85ef780f441ae4c83bc56.png&w=256&q=75",
        price: "EGP 70",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "MUNCH BOX",
        description: "Box of 4 side items (Fried chicken wings - Onion rings - Mozzarella sticks)",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F6e98465e852f3ec7285c670f94caf2ec.png&w=256&q=75",
        price: "EGP 40",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "HAND CUT WEDGES",
        description: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F831265fd3bdbbb29dd966336ff579422.png&w=256&q=75",
        price: "EGP 225",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "CHICKEN TENDERS",
        description: "Pieces of Chicken Tenders Served with Ranch sauce",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F2e08dbc9ce048332a0b11bc8b165e009.png&w=256&q=75",
        price: "EGP 95",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "Chicken Fries",
        description: "10 Pieces of Chicken Fries served with Ranch Cup",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb666406ac37bf44f8b31849ec0ee48ed.png&w=256&q=75",
        price: "EGP 80",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    {
        title: "DIABLO FRIES",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F3eac81c9e5cb012fc7eae7578a8ffeab.png&w=256&q=75",
        price: "EGP 45",
        category: "appetizers",
        size: ['150', '200', '250'],
        topSelling: false
    },
    //sauces
    {
        title: "MUSTARD",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fd657260b7da71715c209e2d9355def36.png&w=256&q=75",
        price: "EGP 5",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "KETCHUP",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F41a277c946e35a12ad0227b2572e917c.png&w=256&q=75",
        price: "EGP 2.5",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "CHEDDAR CHEESE SAUCE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F1bb8e64ccb038d875244c1ea2bbb2891.png&w=256&q=75",
        price: "EGP 20",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "BUFFALO SAUCE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8bf4273178b92fdb18438b2413e0fe4e.png&w=256&q=75",
        price: "EGP 10",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "MAYONNAISE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8e388f1948e7754daa467a2348ff09c9.png&w=256&q=75",
        price: "EGP 5",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "RANCH SAUCE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F80033c188b6c87f8ef4e026182907e1e.png&w=256&q=75",
        price: "EGP 10",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "THOUSAND ISLAND SAUCE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc264684275c150adc27ad6626141be67.png&w=256&q=75",
        price: "EGP 10",
        category: "sauces",
        size: '',
        topSelling: false
    },
    {
        title: "BBQ SAUCE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F730c25fef19002ab4d0306c3dc6357a2.png&w=256&q=75",
        price: "EGP 10",
        category: "sauces",
        size: '',
        topSelling: false
    },

    //dessert
    {
        title: "BLUEBERRY CHEESECAKE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F3c45b0dfba0fd0664b7fde22592a5fa8.png&w=256&q=75",
        price: "EGP 75",
        category: "desserts",
        size: '',
        topSelling: false
    },
    {
        title: "LOTUS CHEESECAKE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F32e21a32d4e55705d9b3235bb02e804c.png&w=256&q=75",
        price: "EGP 75",
        category: "desserts",
        size: '',
        topSelling: false
    },
    {
        title: "APPLE PIE",
        description: "Apple & cinnamon pie",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Ff5afb2abb2f7e443a2d999d1c13164d2.png&w=256&q=75",
        price: "EGP 25",
        category: "desserts",
        size: '',
        topSelling: false
    },
    {
        title: "COOKIE SLICE",
        description: "cookie slice",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4da287b4d273f703a9ea8f30ff5183f5.png&w=256&q=75",
        price: "EGP 75",
        category: "desserts",
        size: '',
        topSelling: false
    },
    //drinks
    {
        title: "ORANGE JUICE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0de776208dca33c7a7c1274c3468a4ac.png&w=256&q=75",
        price: "EGP 20",
        category: "drinks",
        size: '',
        topSelling: false
    },
    {
        title: "PURE APPLE JUICE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F9f9d227549b8d0c81257dded1ebe0c7d.png&w=256&q=75",
        price: "EGP 15",
        category: "drinks",
        size: '',
        topSelling: false
    },
    {
        title: "WATER BOTTLE",
        description: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb4c9969a147297e6f3e852c84d7c319f.png&w=256&q=75",
        price: "EGP 10",
        category: "drinks",
        size: '',
        topSelling: false
    },
    {
        title: "BIG COLA",
        description: "Big Cola",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F6edb0b9192937d5ca1bc10c593aad455.png&w=256&q=75",
        price: "EGP 15",
        category: "drinks",
        size: '',
        topSelling: false
    },
    {
        title: "GREEN COLA",
        description: "Green Cola Can",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F38665d2e749bab3015013ee18b624b30.png&w=256&q=75",
        price: "EGP 25",
        category: "drinks",
        size: '',
        topSelling: false
    },
    {
        title: "GREEN LEMON",
        description: "Green Lemon Can",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc77f8008403cc8299bf0f30f387493ce.png&w=256&q=75",
        price: "EGP 25",
        priceInCombo: "11.4",
        category: "drinks",
        size: '',
        topSelling: false
    }
]

export const menuCategoriesList = [
    {
        title: 'offer',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fcategories%2FarabicOffers.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fcategories%2Foffers.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#offer"
    },
    {
        title: 'burger',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fb591cbdc3fb54941714506586a824619.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc2219d84f87ae7b450150d3147e05b4f.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#burger"
    },
    {
        title: 'chicken',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F4074ca15ee7bb8e0160a6571f456feb0.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc8698e385ea4a0641fcf0dac240911ff.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#chicken"
    },
    {
        title: 'keto',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F87a45fa92d70cde3c8b15f2452311ef9.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F796fcf4984123bdd005d8ff6243502df.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#keto"
    },
    {
        title: 'appetizers',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F759238311743f35c6298dab1dd6ca028.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fdcaafe42932f53396b0c5e693adf2b2d.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#appetizers"
    },
    {
        title: 'sauces',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F178143235354329d55276b2c900fb358.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Ffaac7c82b65453afc51e956495647091.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#sauces"
    },
    {
        title: 'desserts',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Ff6f881c261b268f448c006a20acea8b1.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fa9fe795a2d53c1263c2b29e0b9495195.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#desserts"
    },
    {
        title: 'drinks',
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F02aa2b608d2efc3ba78b35ec7799ea06.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F14851a28feec6094518723ac1bcc0b4b.png&w=96&q=75'
        },
        link: "http://localhost:5173/Menu#drinks"
    }
]

export const comboOptionsList = [
    {
        title: "",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75",
        description: "Choose sandwich only",
        price: 0
    },
    {
        title: "onion rings combo",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F00ce021cd267db0707e68103dbfc6b77.png&w=96&q=75",
        description: "Onion Rings, soft drink, and a dipping sauce",
        price: 75
    },
    {
        title: "cheesy fries combo (french fries)",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F5378f829aaa33e7f689eb32eaddf285c.png&w=96&q=75",
        description: "Cheesy French Fries, soft drink and a dipping sauce",
        price: 95
    },
    {
        title: "blanco fries combo (rench fries)",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fa4b4412f6682497273f06448c0797012.png&w=96&q=75",
        description: "Blanco French Fries, soft drink, and a dipping sauce",
        price: 80
    },
    {
        title: "french fries combo",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F58e25ac9017639ca108175c1712b7ae3.png&w=96&q=75",
        description: "French Fries, Soft Drink, and a Dipping Sauce",
        price: 55
    },
    {
        title: "diablo fries combo",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fbb98f47136cd01807094ec287b20d23f.png&w=96&q=75",
        description: "Diablo fries, Soft Drink, and a dipping sauce",
        price: 70
    },
]

export const extrasList = [
    {
        title: "jalapeño",
        price: 10
    },
    {
        title: "beef bacon",
        price: 60
    },
    {
        title: "sautéed mushroom",
        price: 25
    },
    {
        title: "chedder cheese",
        price: 15
    },
    {
        title: "salad cup",
        price: 5
    },
    {
        title: "pickles",
        price: 5
    },

]

export const drinksList = [
    {
        title: "orange juice",
        price: 10
    },
    {
        title: "pure apple juice",
        price: 6
    },
    {
        title: "big cola",
        price: 0
    },
    {
        title: "green cola",
        price: 11.4
    },
    {
        title: "green lemon",
        price: 11.4
    }
]

export const offersList = [
    {
        title: "4 in the box",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2Fe71df04a4ffdedd9f80e9abb339da238.png&w=256&q=75",
        dexcriop: "4 200gm sandwiches with 4 hero fries and your choice of 4 drinks."
    },

]
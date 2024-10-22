export const productsList = [
    //burger
    {
        title: { en: "shiitake mushroom", ar: "شيتاكي مشروم" },
        description: {
            en: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
            ar: "قطع المشروم السوتيه مع المايونيز الكريمي وجبنة شيدر وبرجر اللحم الصافي."
        },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75",
        imageWithCombo: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F74cd2faaa22109ae867c94197aa6b5fc.png&w=96&q=75",
        price: 155,
        category: "burger sandwiches",
        details: {
            size: [
                { title: '150', price: 155 },
                { title: '200', price: 190 },
                { title: '400', price: 280 }
            ],
            bread: true,
            comboOptions: true,
            drinks: true,
            extras: true
        },
    },
    {
        title: { en: "animal style", ar: "أنيمال ستايل" },
        description: {
            en: "Crispy onion rings, topped with semi dijon mustard, creamy Buffalo sauce, and cheddar cheese.",
            ar: "حلقات البصل المقرمش والمسطرده الديجون وصوص البافالو الكريمي والجبنة الشيدر مع قطعة البرجر."
        },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F36db94ef11461ebb6d1712215b530fb5.png&w=256&q=75",
        price: 155,
        category: "burger sandwiches",
        details: {
            size: [
                { title: '150', price: 155 },
                { title: '200', price: 180 },
                { title: '400', price: 285 }
            ],
            bread: true,
            comboOptions: true,
            drinks: true,
            extras: true
        },
    },
    {
        title: { en: "bacon mashroom jack", ar: "بيكون مشروم جاك" },
        description: {
            en: "Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.",
            ar: "قطع من البيكون البقري مع صوص المايونيز الكريمي والجبنة الشيدر والمشروم السوتيه وبرجر اللحم الصافي."
        },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75",
        price: 190,
        category: "burger sandwiches",
        details: {
            size: [
                { title: '150', price: 190 },
                { title: '200', price: 225 },
                { title: '400', price: 310 }
            ],
            bread: true,
            comboOptions: true,
            drinks: true,
            extras: true
        },
    },
    {
        title: { en: "old school", ar: "أولد سكول" },
        description: {
            en: "Pure beef burger patty, topped with our signature Buffalo sauce and cheddar cheese.",
            ar: "برجر اللحم الصافي مع الجبنة الشيدر وصوص البافالو الكريمي."
        },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fb4a9bce0163404b97f76e9cec638bb08.png&w=256&q=75",
        price: 145,
        category: "burger sandwiches",
        details: {
            size: [
                { title: '150', price: 145 },
                { title: '200', price: 175 },
                { title: '400', price: 270 }
            ],
            bread: true,
            comboOptions: true,
            drinks: true,
            extras: true
        },
    },
    {
        title: { en: "BLUE CHEESE", ar: ';lkasjdf' },
        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fb75ecb94aa633b1545de1318f9ca6d00.png&w=256&q=75",
        price: 150,
        category: "burger sandwiches",
        size: ['150', '200', '250'],
    },
    //     {
    //         title: "THE RASTAFARI",
    //         description: "Crispy cheddar jalapeño bites, on a grilled burger patty with Cheddar cheese and creamy Buffalo sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fff183e68e89cbe5674dfb3c8e7b1a26b.png&w=256&q=75",
    //         price: 170,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "THE MUSCULAR",
    //         description: "Pure beef burger, topped with crispy cheese and creamy Buffalo sauce. Only for the serious eaters.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F802131a7b4dd1d3a1ca23625a53082c3.png&w=256&q=75",
    //         price: 175,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "THE SECRET BURGER",
    //         description: "Flamed burger patty with crispy onion and BBQ sauce with caramelized onion, topped with crispy secret cheese, and creamy Buffalo sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ff887f2ac7f1212f18ade68c61ca6075c.png&w=256&q=75",
    //         price: 180,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "HITCHHIKER",
    //         description: "Crispy mini Mozzarella bites, loaded with ketchup and mustard drops, beef bacon, and creamy Buffalo sauce on top of our pure beef burger patty.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F28ef9f8e1a9beb94215ed3bad733fe3c.png&w=256&q=75",
    //         price: 190,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "X URBAN",
    //         description: "A juicy burger patty with cheddar cheese, beef bacon, crispy onion rings with BBQ sauce, and caramelized onions.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F3cd5acc623e770c0388edf1d1c2c486b.png&w=256&q=75",
    //         price: 195,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "DOUBLE JAB",
    //         description: "Crispy cheese stuffed with beef bacon, topped with crispy onion, BBQ sauce, grilled burger patty, and smoked cheese sauce with mushroom.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F1dc8ed21ded6112b74fd79ed9cac077c.png&w=256&q=75",
    //         price: 205,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHARVROILED BBQ",
    //         description: "Grilled burger topped with sweet onion, BBQ sauce, creamy Charbroiled sauce, and Swiss cheese.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F52c2c0cb4355e196903e8a64ebe94da0.png&w=256&q=75",
    //         price: 150,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHOLO'S",
    //         description: "Pickled sliced jalapeños, Buffalo sauce and cheddar cheese on top of our pure beef burger patty.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fce05d752c3ce86256f7c58445c8c2c90.png&w=256&q=75",
    //         price: 150,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "GRUNGY",
    //         description: "Pure beef burger patty, topped with our custom Grungy sauce, cheddar cheese, tomatoes, onion.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fde19c6b5cbb03bfc24ea31e5b0259121.png&w=256&q=75",
    //         price: 145,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "TRUFFLE BEEF BURGER",
    //         description: "Flame grilled burger with Sautéed mushroom, crispy onion, truffle sauce, and cheddar cheese.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc189b5157ba5d891611ca27130e99ca8.png&w=256&q=75",
    //         price: 165,
    //         category: "burger sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     //chicken
    //     {
    //         title: "RASTAFARI CHICKEN",
    //         description: "Crispy cheddar jalapeño bites, with chicken strips, cheddar cheese and creamy Buffalo sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ff3da7a1ac56e2121f21e49b5b2e1622f.png&w=256&q=75",
    //         price: 145,
    //         category: "chicken sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHICKEN DITCH",
    //         description: "Chicken strips topped with beef bacon, sautéed mushroom, cheddar cheese, and our custom Secret sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ffce09e6a80b59a8cf77275475988c79a.png&w=256&q=75",
    //         price: 185,
    //         category: "chicken sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHOLO'S CHICKEN",
    //         description: "Chicken strips with pickled sliced jalapeños, Buffalo sauce, and melted cheddar cheese.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F730e9ce3b48956379c62c9ca72ac2b42.png&w=256&q=75",
    //         price: 140,
    //         category: "chicken sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: { en: "chicken buster", ar: "" },
    //         description: "Chicken strips with Buffalo sauce and melted cheddar cheese.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F5f9673352a1f5fafd00e3e2ae90af631.png&w=256&q=75",
    //         price: 135,
    //         category: "chicken sandwiches",
    //         size: ['150', '200', '250'],

    //     },
    //     {
    //         title: "CHICKEN CRUSH",
    //         description: "Your choice of grilled or fried chicken with cheddar cheese, tomato, onion and mayo dijon.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8ae609f040a825addd016fc7ec08d7a9.png&w=256&q=75",
    //         price: 150,
    //         category: "chicken sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     //keto
    //     {
    //         title: "KETO LETTUCE WRAP",
    //         description: "Pure beef burger embedded in fresh whole romaine lettuce with cheddar cheese. Served with our..",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F107de22f659cd70e480e6ac560ef7d59.png&w=256&q=75",
    //         price: 165,
    //         category: "keto & light sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "KETO SHIITAKE MUSHROOM",
    //         description: "Sautéed fresh mushroom, cheddar cheese, and beef burger patty embedded in fresh whole romaine.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F084465fc13ed66144c17a5bc9f37524d.png&w=256&q=75",
    //         price: 170,
    //         category: "keto & light sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "SKINNY BUFFALO",
    //         description: "A grilled lean burger patty on a multi-grain bread bun with Thousand Island sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F933b3b93e79dc4ecae3d0af378b4ec84.png&w=256&q=75",
    //         price: 145,
    //         category: "keto & light sandwiches",
    //         size: ['150', '200', '250'],
    //     },
    //     //appetizers
    //     {
    //         title: "LARGE FRENCH FRIES",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fea4bf95a863a674e0ae15fe02cafcebd.png&w=256&q=75",
    //         price: 35,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "BUFFALO FRIES",
    //         description: "French Fries with Ketchup, Mayonnaise and fresh onion.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8451f4eff364a68c8f9ed01d0fdb5b84.png&w=256&q=75",
    //         price: 60,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "COLESLAW",
    //         description: "Fried Buffalo Wings Served with Ranch Sauce or Wings Sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F00e14cb2b9b112c1ec40d7697e4ce5a3.png&w=256&q=75",
    //         price: 75,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "FRIED BUFFALO WINGS",
    //         description: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F5542a555dd006d63d373c6a23f57ca00.png&w=256&q=75",
    //         price: 80,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHEDDAR JALAPENO BITES",
    //         description: "Served with Ranch sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Faae91c5c0548fc3be5a977beaacf5f76.png&w=256&q=75",
    //         price: 70,
    //         category: "appetizers",
    //         size: ['150', '200', '250']  ,
    //     },
    //     {
    //         title: "MOZZARELLA BITES",
    //         description: "Served with Ranch sauce.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8171f754ddaf57e6a3c4501b28abc209.png&w=256&q=75",
    //         price: 120,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "BACON FRIES",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0a8f39bde7dc27f249a1b1d36d73ebe3.png&w=256&q=75",
    //         price: 75,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHEESY FRIES",
    //         description: "Served with Thousand Island sauce",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4550b3ccfea85ef780f441ae4c83bc56.png&w=256&q=75",
    //         price: 70,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHEESE ONION BOMB",
    //         description: "Whole onion rings stuffed with cheese, served with free sauce",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0a8f39bde7dc27f249a1b1d36d73ebe3.png&w=256&q=75",
    //         price: 75,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "ONION RINGS",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4550b3ccfea85ef780f441ae4c83bc56.png&w=256&q=75",
    //         price: 70,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "MUNCH BOX",
    //         description: "Box of 4 side items (Fried chicken wings - Onion rings - Mozzarella sticks)",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F6e98465e852f3ec7285c670f94caf2ec.png&w=256&q=75",
    //         price: 40,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "HAND CUT WEDGES",
    //         description: "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F831265fd3bdbbb29dd966336ff579422.png&w=256&q=75",
    //         price: 225,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "CHICKEN TENDERS",
    //         description: "Pieces of Chicken Tenders Served with Ranch sauce",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F2e08dbc9ce048332a0b11bc8b165e009.png&w=256&q=75",
    //         price: 95,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: { en: "chicken fries", ar: "" },
    //         description: "10 Pieces of Chicken Fries served with Ranch Cup",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb666406ac37bf44f8b31849ec0ee48ed.png&w=256&q=75",
    //         price: 80,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     {
    //         title: "DIABLO FRIES",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F3eac81c9e5cb012fc7eae7578a8ffeab.png&w=256&q=75",
    //         price: 45,
    //         category: "appetizers",
    //         size: ['150', '200', '250'],
    //     },
    //     //sauces
    //     {
    //         title: "MUSTARD",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fd657260b7da71715c209e2d9355def36.png&w=256&q=75",
    //         price: 5,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "KETCHUP",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F41a277c946e35a12ad0227b2572e917c.png&w=256&q=75",
    //         price: 2.5,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "CHEDDAR CHEESE SAUCE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F1bb8e64ccb038d875244c1ea2bbb2891.png&w=256&q=75",
    //         price: 20,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "BUFFALO SAUCE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8bf4273178b92fdb18438b2413e0fe4e.png&w=256&q=75",
    //         price: 10,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "MAYONNAISE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8e388f1948e7754daa467a2348ff09c9.png&w=256&q=75",
    //         price: 5,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "RANCH SAUCE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F80033c188b6c87f8ef4e026182907e1e.png&w=256&q=75",
    //         price: 10,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "THOUSAND ISLAND SAUCE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc264684275c150adc27ad6626141be67.png&w=256&q=75",
    //         price: 10,
    //         category: "sauces",
    //         size: '',
    //     },
    //     {
    //         title: "BBQ SAUCE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F730c25fef19002ab4d0306c3dc6357a2.png&w=256&q=75",
    //         price: 10,
    //         category: "sauces",
    //         size: '',
    //     },

    //     //dessert
    //     {
    //         title: "BLUEBERRY CHEESECAKE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F3c45b0dfba0fd0664b7fde22592a5fa8.png&w=256&q=75",
    //         price: 75,
    //         category: "desserts",
    //         size: '',
    //     },
    //     {
    //         title: "LOTUS CHEESECAKE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F32e21a32d4e55705d9b3235bb02e804c.png&w=256&q=75",
    //         price: 75,
    //         category: "desserts",
    //         size: '',
    //     },
    //     {
    //         title: { en: "apple pie", ar: "" },
    //         description: "Apple & cinnamon pie",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Ff5afb2abb2f7e443a2d999d1c13164d2.png&w=256&q=75",
    //         price: 25,
    //         category: "desserts",
    //         size: '',
    //     },
    //     {
    //         title: "COOKIE SLICE",
    //         description: "cookie slice",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F4da287b4d273f703a9ea8f30ff5183f5.png&w=256&q=75",
    //         price: 75,
    //         category: "desserts",
    //         size: '',
    //     },
    //     //drinks
    //     {
    //         title: "ORANGE JUICE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F0de776208dca33c7a7c1274c3468a4ac.png&w=256&q=75",
    //         price: 20,
    //         category: "drinks",
    //         size: '',
    //     },
    //     {
    //         title: "PURE APPLE JUICE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F9f9d227549b8d0c81257dded1ebe0c7d.png&w=256&q=75",
    //         price: 15,
    //         category: "drinks",
    //         size: '',
    //     },
    //     {
    //         title: "WATER BOTTLE",
    //         description: "",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb4c9969a147297e6f3e852c84d7c319f.png&w=256&q=75",
    //         price: 10,
    //         category: "drinks",
    //         size: '',
    //     },
    //     {
    //         title: "BIG COLA",
    //         description: "Big Cola",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F6edb0b9192937d5ca1bc10c593aad455.png&w=256&q=75",
    //         price: 15,
    //         category: "drinks",
    //         size: '',
    //     },
    //     {
    //         title: "GREEN COLA",
    //         description: "Green Cola Can",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F38665d2e749bab3015013ee18b624b30.png&w=256&q=75",
    //         price: 25,
    //         category: "drinks",
    //         size: '',
    //     },
    //     {
    //         title: "GREEN LEMON",
    //         description: "Green Lemon Can",
    //         image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fc77f8008403cc8299bf0f30f387493ce.png&w=256&q=75",
    //         price: 25,
    //         priceInCombo: "11.4",
    //         category: "drinks",
    //         size: '',
    //     }
]

export const menuCategoriesList = [
    {
        title: { en: 'offers', ar: "عروض" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fcategories%2FarabicOffers.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fcategories%2Foffers.png&w=96&q=75'
        }

    },
    {
        title: { en: 'burger sandwiches', ar: "برجر" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fb591cbdc3fb54941714506586a824619.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc2219d84f87ae7b450150d3147e05b4f.png&w=96&q=75'
        }
    },
    {
        title: { en: 'chicken sandwiches', ar: "تشيكن" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F4074ca15ee7bb8e0160a6571f456feb0.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc8698e385ea4a0641fcf0dac240911ff.png&w=96&q=75'
        }
    },
    {
        title: { en: 'keto & light sandwiches', ar: "ساندوتشات الكيتو- لايت" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F87a45fa92d70cde3c8b15f2452311ef9.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F796fcf4984123bdd005d8ff6243502df.png&w=96&q=75'
        }
    },
    {
        title: { en: 'appetizers', ar: "اصناف جانبية" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F759238311743f35c6298dab1dd6ca028.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fdcaafe42932f53396b0c5e693adf2b2d.png&w=96&q=75'
        }
    },
    {
        title: { en: 'sauces', ar: "صوصات" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F178143235354329d55276b2c900fb358.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Ffaac7c82b65453afc51e956495647091.png&w=96&q=75'
        }
    },
    {
        title: { en: 'desserts', ar: "حلويات" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Ff6f881c261b268f448c006a20acea8b1.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fa9fe795a2d53c1263c2b29e0b9495195.png&w=96&q=75'
        }
    },
    {
        title: { en: 'drinks', ar: "مشروبات" },
        image: {
            ar: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F02aa2b608d2efc3ba78b35ec7799ea06.png&w=96&q=75',
            en: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F14851a28feec6094518723ac1bcc0b4b.png&w=96&q=75'
        }
    }
]

export const comboOptionsList = [
    {
        title: { en: "no combo", ar: "لا اضافة" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75",
        description: { en: "Choose sandwich only", ar: "ساندوش فقط" },
        price: 0
    },
    {
        title: { en: "onion rings combo", ar: "حلقات البصل المقرمشة" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F00ce021cd267db0707e68103dbfc6b77.png&w=96&q=75",
        description: { en: "Onion Rings, soft drink, and a dipping sauce", ar: "حلقات البصل المقرمشة مع مشروب غازي و صوص" },
        price: 75
    },
    {
        title: { en: "cheesy fries combo (french fries)", ar: "(تشيزي فرايز كومبو(فريتش فرايز" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F5378f829aaa33e7f689eb32eaddf285c.png&w=96&q=75",
        description: { en: "Cheesy French Fries, soft drink and a dipping sauce", ar: "تشيزي فرينش فرايز مع مشروب غازي و صوص" },
        price: 95
    },
    {
        title: { en: "blanco fries combo (rench fries)", ar: "(بلانكو فرايز كومبو (فريتش فرايز" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fa4b4412f6682497273f06448c0797012.png&w=96&q=75",
        description: { en: "Blanco French Fries, soft drink, and a dipping sauce", ar: "بلانكو فرينش فرايز مع مشروب غازي و صوص" },
        price: 80
    },
    {
        title: { en: "french fries combo", ar: "كومبو فرينش فرايز" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F58e25ac9017639ca108175c1712b7ae3.png&w=96&q=75",
        description: { en: "French Fries, Soft Drink, and a Dipping Sauce", ar: "فرينش فرايز مع مشروب غازي و صوص" },
        price: 55
    },
    {
        title: { en: "diablo fries combo", ar: "ديابلو فرايز" },
        image: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fbb98f47136cd01807094ec287b20d23f.png&w=96&q=75",
        description: { en: "Diablo fries, Soft Drink, and a dipping sauce", ar: "ديابلو فرايز مع مشروب غازي و صوص" },
        price: 70
    },
]

export const extrasList = [
    {
        title: { en: "jalapeño", ar: "هالپينيو" },
        price: 10
    },
    {
        title: { en: "beef bacon", ar: "بيكون بقري" },
        price: 60
    },
    {
        title: { en: "sautéed mushroom", ar: "مشروم سوتية" },
        price: 25
    },
    {
        title: { en: "chedder cheese", ar: "جبنة شيدر" },
        price: 15
    },
    {
        title: { en: "salad cup", ar: "علبة سلطة" },
        price: 5
    },
    {
        title: { en: "pickles", ar: "مخلل" },
        price: 5
    },

]

export const drinksList = [
    {
        title: { en: "orange juice", ar: "عصير برتقال" },
        price: 10
    },
    {
        title: { en: "pure apple juice", ar: "عصير تفاح بيور" },
        price: 6
    },
    {
        title: { en: "big cola", ar: "بيج كولا" },
        price: 0
    },
    {
        title: { en: "green cola", ar: "جرين كولا" },
        price: 11.4
    },
    {
        title: { en: "green lemon", ar: "جرين ليمون" },
        price: 11.4
    }
]

export const offersList = [
    {
        title: "Buff One",
        images: {
            swiperWeb:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/c65d20d5c77eb0b08dcb3d2639fd13d1.png",
            swiperMobile:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/e66d5a6bf26725009930c11643a762db.png",
            keen: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2Fffaf41774acf69dbf5495e170f3e6347.png&w=640&q=75",
            details:
                "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2Fb645ddd7acf4b9a0cb96aaebd9824b97.png&w=256&q=75",
        },
        description: "Your choice of a 150gm sandwich with French Fries",
        price: 105,

        tab: [
            {
                title: "choice",
                details: {
                    titleL: "Extras",
                    description: "Apple Pie (EGP 20.00)",
                    price: 20,
                },
            },
            {
                title: "fries",
                details: {
                    friseSmail: true,
                    friesLarge: true,
                    quantity: 1,
                },
            },
        ],
    },

    {
        title: "Buff Two",
        images: {
            swiperWeb:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/a70b771aa3afd58d2b04cb6b348c26b6.png",
            swiperMobile:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/85be0753aafcd1d7aacaabd15c6cc61b.png",
            keen: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2F2a193572c206bd7113450bccbdbadd83.png&w=640&q=75",
            details:
                "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2F128404621aefddb18dfb39461e4bc1fe.png&w=256&q=75",
        },
        description:
            "Your choice of a 150gm sandwich with regular chicken sandwich, French fries and a Soft Drink",
        price: 105,
        tab: [
            { title: "choice" },
            {
                title: "fries",
                details: {
                    friseSmail: true,
                    friesLarge: true,
                    quantity: 1,
                },
            },
            {
                title: "drink",
                details: {
                    quantity: 1,
                    drink: [
                        { title: "Big cola", price: 0 },
                        { title: "Pure Apple Juice (EGP 6.00)", price: 6 },
                    ],
                },
            },
            { title: "extraItem" },
        ],
    },

    {
        title: "4 in the box",
        images: {
            swiperWeb:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/20f582541433e4713c3743e382a9b4f9.png",
            swiperMobile:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/f7f4d68734f3e45afe055da6a25fa33b.png",
            keen: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2F65ded6536caaf8d6487414ed50705c67.png&w=1080&q=75",
            details:
                "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2Fe71df04a4ffdedd9f80e9abb339da238.png&w=256&q=75",
        },
        description:
            "4 200gm sandwiches with 4 hero fries and your choice of 4 drinks.",
        price: 699,
        tab: [
            { title: "choice1" },
            { title: "choice2" },
            { title: "choice3" },
            { title: "choice4" },
            {
                title: "fries",
                details: {
                    friseSmail: true,
                    friesLarge: false,
                    quantity: 4,
                },
            },
            {
                title: "drinks",
                details: {
                    quantity: 4,
                    drink: [
                        { title: "Big cola", price: 0 },
                        { title: "Pure Apple Juice (EGP 6.00)", price: 6 },
                        { title: "Orange Juice (EGP 10.00)", price: 10 },
                    ],
                },
            },
        ],
    },

    {
        title: "Agmad 3",
        images: {
            swiperWeb:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/a1974b69b81f2fca482f886fab76948a.png",
            swiperMobile:
                "https://buffalonlineorderingprod.s3.eu-west-1.amazonaws.com/carousels/ad67aac59f375f0b1be848ef61f2ae51.png",
            keen: "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2F8288ee9df2e386a185aa76e6f8cee25b.png&w=640&q=75",
            details:
                "https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Foffers%2Ffe22c8d92581c5639cd057fa7080bc7e.png&w=256&q=75",
        },
        description: "3 200gm sandwiches with 3 hero fries & 3 drinks.",
        price: 470,

        tab: [
            { title: "choice1" },
            { title: "choice2" },
            { title: "choice3" },
            {
                title: "fries",
                details: {
                    friseSmail: true,
                    friesLarge: false,
                    quantity: 3,
                },
            },
            {
                title: "drinks",
                details: {
                    quantity: 3,
                    drink: [
                        { title: "Big cola", price: 0 },
                        { title: "Pure Apple Juice (EGP 6.00)", price: 6 },
                        { title: "Orange Juice (EGP 10.00)", price: 10 },
                    ],
                },
            },
        ],
    },
];

export const productOffers = [
    "shiitake mushroom",
    "Keto Lettuce Wrap",
    "ANIMAL STYLE",
    "Old School",
    "Cholo's Chicken",
    "Chicken Buster",
];

export const topSellingList = [
    'shiitake mushroom',
    'bacon mashroom jack',
    'chicken buster',
    'apple pie',
    'chicken fries'
]

export const breadList = [

    {
        title: { en: 'white', ar: 'عيش ابيض' },
        price: 0
    },
    {
        title: { en: 'brown', ar: 'عيش بني' },
        price: 5
    },
    {
        title: { en: 'lettuce bun', ar: 'خبز الخس' },
        price: 30
    }
]

export const branchesList = [
    {
        name: 'al-ahly',
        address: '٩ ش حافظ رمضان - متفرع من احمد فخري - مدينه نصر',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0675106,31.3468592,17z/data=!4m6!3m5!1s0x14583e0ba3c57a49:0x53bd4e78acadf3b!8m2!3d30.06854!4d31.3501!16s%2Fg%2F11ggnfchkd?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'alex-semouha',
        address: 'شــــارع الطيار محمود شكري - سموحـــه',
        src: 'https://www.google.com/maps/place/Buffalo+Burger+smouha/@31.2178889,29.9441969,18.3z/data=!4m6!3m5!1s0x14f5c522fa296467:0xd9f75af57c758390!8m2!3d31.2179831!4d29.9459529!16s%2Fg%2F11k5zklq1h?entry=tts&shorturl=1'
    },
    {
        name: 'almaza-avenue-mall',
        address: 'Almaza Avenue Mall',
        src: 'https://www.google.com/maps/place/Almaza+Avenue+Mall/@30.0924272,31.3453517,17z/data=!3m1!4b1!4m6!3m5!1s0x145815b42aaee707:0xab349ff18d15352a!8m2!3d30.0924226!4d31.3479266!16s%2Fg%2F11j8nwr25m?entry=tts&g_ep=EgoyMDI0MDkyNS4wKgBIAVAD'
    },
    {
        name: 'truimph',
        address: '١٠٥ ش النزهه مصر الجديد',
        src: 'https://www.google.com/maps/place/105+El-Nozha,+El+Nozha,+Cairo+Governorate+4470142/@30.0993622,31.3408215,17z/data=!3m1!4b1!4m6!3m5!1s0x145815e55b291b51:0xcff912a8b0e211be!8m2!3d30.0993576!4d31.3433964!16s%2Fg%2F11bw3y15z3?entry=tts&shorturl=1'
    },
    {
        name: 'zayed',
        address: 'السرايا مول - الشيخ زايد',
        src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.029968,30.9956077,19z/data=!4m6!3m5!1s0x14585b87427c0c31:0xd56cfa2263cc5904!8m2!3d30.0300981!4d30.9957818!16s%2Fg%2F11fjz4l_79?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'almaza-mall',
        address: 'مول الماظه',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0820864,31.3656564,18z/data=!4m6!3m5!1s0x14583d3caec6af9d:0xe0b7f70e0e503110!8m2!3d30.0821015!4d31.3664652!16s%2Fg%2F11h5mnwzmx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'concord-mall',
        address: 'فرع كونكورد بلازا مول القاهره الجديده',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0249122,31.4822205,20z/data=!4m6!3m5!1s0x1458239c37cb50b3:0x6177d53402cde9f2!8m2!3d30.0249122!4d31.4826478!16s%2Fg%2F11g0mvqmys?entry=tts&shorturl=1'
    },
    {
        name: 'el-obour',
        address: 'جولــف سيتـــي مـــــول - طـريــق مصـــر الاسمــاعيليــة',
        src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.17433,31.473216,17z/data=!4m6!3m5!1s0x14581b5e2e3541c7:0xc1e0d7bb5b649b42!8m2!3d30.1747529!4d31.4763521!16s%2Fg%2F11qqzs6cgx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'new-cairo-1',
        address: ' التجمع الاول',
        src: "https://www.google.com/maps/place/30%C2%B003'10.1%22N+31%C2%B026'32.7%22E/@30.0527982,31.4398428,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0527982!4d31.4424177?hl=en&entry=ttu"
    },
    {
        name: 'shobra',
        address: '212 شارع شبرا امام صيدليات مصر',
        src: 'https://goo.gl/maps/MU3oZSSHDRSCxPUc9'
    },
    {
        name: 'drive-thru',
        address: 'غرب سوميد - مول جرين بارك المجاورة الاولي بجوار جو باص',
        src: 'https://goo.gl/maps/9CvZbCXMPtj4HxvA9'
    },
    {
        name: 'ismailia',
        address: 'شــــارع شبين الكــوم - أمــــام بنزينـــــة توتـــــال',
        src: 'https://goo.gl/maps/WvkL3xveocD6jTQLA'
    },
    {
        name: 'mall-of-egypt',
        address: 'مول مصر',
        src: 'https://www.google.com/maps/place/%D9%85%D9%88%D9%84+%D9%85%D8%B5%D8%B1%E2%80%AD/@29.9712029,31.0154256,16z/data=!4m6!3m5!1s0x145851ee0be1eec3:0xa5b302adfcac13d1!8m2!3d29.9724274!4d31.0164062!16s%2Fg%2F11g8_2kq5p?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'port-said',
        address: 'شارع طرح البحر - حي شرق بورسعيد',
        src: 'https://www.google.com/maps/place//@31.2710227,32.3010397,18z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'sheraton',
        address: '2 شــــارع انقرة - أمــــام مركز الالعاب الرياضية',
        src: 'https://www.google.com/maps/place/%D8%A8%D9%81%D8%A7%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.10916,31.376304,17z/data=!3m1!4b1!4m6!3m5!1s0x145816683d373641:0x43010af9938f7f81!8m2!3d30.10916!4d31.376304!16s%2Fg%2F11c0rq37sc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'hurghada',
        address: 'القرى السياحية - الغردقة - البحر الاحمر',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@27.1737554,33.8239781,13.67z/data=!4m7!3m6!1s0x1452870949b09d3b:0xd38e8fa2174eda25!8m2!3d27.1899487!4d33.8330103!15sChdidWZmYWxvIGJ1cmdlciBodXJnaGFkYSIDiAEBWhkiF2J1ZmZhbG8gYnVyZ2VyIGh1cmdoYWRhkgEUZmFzdF9mb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11jjb3xpzb?entry=tts&shorturl=1'
    },
    {
        name: 'zahraa-elmaadi',
        address: 'ع3 -ش الخمسين-تقسيم الرقابه الاداريه-بجوار صيدليه علاج',
        src: 'https://www.google.com/maps/place/Buffalo+burger/@29.9650292,31.3080568,19z/data=!4m6!3m5!1s0x145839a70f08907f:0x8de689a45febb143!8m2!3d29.965412!4d31.3087932!16s%2Fg%2F11swq59z59?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'alex-aasafra',
        address: '730 طريق الجيش قصر الاليزيه - العصافرة على البحر بجوار كافيتريا النجمة',
        src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@31.2763442,30.003067,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5d101e81dd519:0x67eef3608aa6ba40!8m2!3d31.2763442!4d30.003067!16s%2Fg%2F11nnwk67tt?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'city-stars',
        address: 'Mall of arabia',
        src: 'https://www.google.com/maps/place/Food+Court+Mall+of+Arabia/@30.0054897,30.9701348,17z/data=!3m1!4b1!4m6!3m5!1s0x14585744572fd851:0x95284e4049bf89b8!8m2!3d30.0054851!4d30.9727097!16s%2Fg%2F11c584ky_1?entry=tts&shorturl=1'
    },
    {
        name: 'al-haram',
        address: '١٧٥ ش الهرم امام مسرح الزعيم',
        src: 'https://www.google.com/maps/place/176+%D8%A7%D9%84%D9%87%D8%B1%D9%85%D8%8C+%D8%A3%D9%88%D9%84%D9%89+%D8%A7%D9%84%D9%87%D8%B1%D9%85%D8%8C+%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%D9%8A%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9+3531301%E2%80%AD/@29.9946845,31.1603689,18z/data=!4m6!3m5!1s0x145845dc8616ae3b:0xc89b5fd14e2f8dd4!8m2!3d29.9949019!4d31.1622105!16s%2Fg%2F11fnyzlfx7?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'asyut',
        address: 'ابراج نايل بلازا - ش احمد علي علوبه',
        src: 'https://www.google.com/maps/place/Buffalo+burger/@27.1921244,31.1870005,19z/data=!4m6!3m5!1s0x14450b53bf2aeb23:0x693a3198d0f376c0!8m2!3d27.1925107!4d31.1878883!16s%2Fg%2F11h_cykbwx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'elmanyal',
        address: 'المنيل',
        src: 'https://www.google.com/maps/place/Buffalo+Burger+Manial+branch+-+%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D9%86%D9%8A%D9%84%E2%80%AD/@30.0226393,31.2207741,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474e6e3956e3:0xa3c50e24450f336e!8m2!3d30.0226347!4d31.225645!16s%2Fg%2F11trx18gjg?entry=tts&shorturl=1'
    },
    {
        name: 'al-sherouk-city',
        address: 'سيتي بلازا مول - الشروق الدور الارضي',
        src: 'https://www.google.com/maps/place/Buffalo+Burger+-+City+Plaza+Mall/@30.1144769,31.6064442,17z/data=!3m1!4b1!4m6!3m5!1s0x14581de9c96e3ab5:0x8077b994cff6602!8m2!3d30.1144769!4d31.6064442!16s%2Fg%2F11c3sr0zcc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'al-rehab-city-food-court',
        address: 'الرحاب - بوابه ٦ - الفود كورد - بجوار اربياتا',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0591127,31.4897694,17z/data=!3m1!4b1!4m6!3m5!1s0x1458194c26e7d12f:0x20c95ae3f1678ac0!8m2!3d30.0591127!4d31.4897694!16s%2Fg%2F11ghmbttw3?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'downtown-mall',
        address: 'قطاميه داون تاون مول - مبني S1 - الدور الارضي -قطعه A شارع التسعين',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0177319,31.4058723,14.85z/data=!3m1!5s0x14583cefe5e4eb99:0x382d242e33b636d!4m6!3m5!1s0x14583dab4fc73631:0x563c644602257d45!8m2!3d30.0174232!4d31.4119593!16s%2Fg%2F11f7s99_9t?entry=tts&shorturl=1'
    },
    {
        name: 'maadi',
        address: '27 شــــارع النصـــر - أمــــام سيراميكــا كليــوبـاتــــــرا',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@29.9747194,31.2414082,13z/data=!4m6!3m5!1s0x1458386406821efb:0xf12859a068970ca5!8m2!3d29.9747194!4d31.2793301!16s%2Fg%2F11ggnf9m5z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'syria',
        address: '48 شارع البطل احمد عبد العزيز',
        src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1+(%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D9%86)%E2%80%AD/@30.0539071,31.2007727,18z/data=!4m6!3m5!1s0x145841799489faed:0x9abd4a72cd8fbcea!8m2!3d30.0548995!4d31.2043034!16s%2Fg%2F11kpfh4g80?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'alex',
        address: 'ش المشير-سيتى سكوير مول -الاسكندرية',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.2271618,29.8527976,12z/data=!4m7!3m6!1s0x14f5c4ee79455bcb:0x39a10881bfbad68b!8m2!3d31.2271618!4d29.9419867!15sCg5CdWZmYWxvIEJ1cmdlciIDiAEBWhAiDmJ1ZmZhbG8gYnVyZ2VykgEUZmFzdF9mb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11g9sz6t9z?entry=tts&shorturl=1'
    },
    {
        name: 'october',
        address: 'البطئ--موازي للمحور المركزي، قسم أول 6 أكتوبر، اول 6 أكتوبر، الجيزة - مول سيتي سكيب',
        src: 'https://www.google.com/maps/place/Point+Fashion/@29.962917,30.9263969,17z/data=!3m1!4b1!4m6!3m5!1s0x1458566ecb51b3bb:0x2c2103aa799a0331!8m2!3d29.962917!4d30.9263969!16s%2Fg%2F122z2g2y?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'faisal',
        address: '124 شــــارع فيصـل - أمــــام شــــارع المستشفــي',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@29.9954449,31.143223,16z/data=!4m6!3m5!1s0x145845b8b1b0e1fd:0xf0632c7c554791bc!8m2!3d29.9954448!4d31.1510869!16s%2Fg%2F11hdy84rl6?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'city-stars',
        address: 'سيتـــي ستــــارز فــودكـورت - الــــدور 8',
        src: 'https://www.google.com/maps/search/%D8%B3%D9%8A%D8%AA%D9%80%D9%80%D9%80%D9%8A+%D8%B3%D8%AA%D9%80%D9%80%D9%80%D9%80%D8%A7%D8%B1%D8%B2+%D9%81%D9%80%D9%80%D9%88%D8%AF%D9%83%D9%80%D9%88%D8%B1%D8%AA+%E2%80%AD/@30.0729535,31.3425886,17z?entry=tts&shorturl=1'
    },
    {
        name: 'hadayek-el-ahram',
        address: 'الثروة المعدنية - حدائق الاهرام',
        src: 'https://www.google.com/maps/place/Buffalo+Burger+%D8%A8%D8%A7%D9%81%D8%A7%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1(+%D8%AD%D8%AF%D8%A7%D8%A6%D9%82+%D8%A7%D9%84%D8%A7%D9%87%D8%B1%D8%A7%D9%85)%E2%80%AD/@29.9812057,31.1053452,20z/data=!4m6!3m5!1s0x14584f5a31847cbb:0x48c27ffe3c06947!8m2!3d29.9812832!4d31.1058247!16s%2Fg%2F11jccd_0t_?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'el-mansoura',
        address: 'شــــارع الجمهورية - أمــــام كليـــة الحقـــــــــوق',
        src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@31.0458225,31.3504653,17z/data=!4m6!3m5!1s0x14f79dd7d5e3e025:0xcfa9effce868519c!8m2!3d31.0458501!4d31.3542442!16s%2Fg%2F11ggnfccl1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'zamalek',
        address: 'ش طه حسين - اليمامه سنتر',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.2312137,28.632133,8z/data=!3m1!5s0x145840e3c46353ef:0xa2615a82a076a41!4m7!3m6!1s0x145840e3db5e5231:0xa5caad275e350a68!8m2!3d30.0637886!4d31.2207915!15sChZidWZmYWxvIGJ1cmdlciB6YW1hbGVrIgOIAQFaGCIWYnVmZmFsbyBidXJnZXIgemFtYWxla5IBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA!16s%2Fg%2F11b5phnqlz?entry=tts&shorturl=1'
    },
    {
        name: 'el-batrawy',
        address: '٢٧ ش البطراوي - عباس العقاد',
        src: 'https://www.google.com/maps/place/%D8%A8%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.0618788,31.3360246,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e6926c30827:0x694bd01370f7038c!8m2!3d30.0618788!4d31.3360246!16s%2Fg%2F11hcw6b0fw?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'madinty',
        address: 'فــودكـورت Open Air Mall',
        src: 'https://www.google.com/maps/place/Food+Hall+-+Open+Air+Mall/@30.1066564,31.6261773,17z/data=!3m1!4b1!4m6!3m5!1s0x14581de89e7edc41:0xd544701510e43a10!8m2!3d30.1066564!4d31.6261773!16s%2Fg%2F11r_xr3b6g?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'mokkatam',
        address: 'شارع 9 امام حديقه الاندلس – المقطم',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0361252,31.2254038,13z/data=!4m7!3m6!1s0x14583924239276b5:0xa67d619fdb4bdcf5!8m2!3d30.0083261!4d31.3120851!15sChdidWZmYWxvIGJ1cmdlciBtb2thdHRhbVoZIhdidWZmYWxvIGJ1cmdlciBtb2thdHRhbZIBFGZhc3RfZm9vZF9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1YkdKWGNuVjNSUkFC4AEA!16s%2Fg%2F11p9sf_jhs?entry=tts&shorturl=1'
    },
    {
        name: 'roxy',
        address: 'ش الاهرم - مصر الجديدة',
        src: 'https://www.google.com/maps/place/Buffalo+burger/@30.0882299,31.3171464,16z/data=!4m6!3m5!1s0x14583fc9adb17707:0xf4f30a321d7bcd18!8m2!3d30.0902668!4d31.3201711!16s%2Fg%2F11rwtwvr12?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'tanta',
        address: '45 شــــارع الجيــش - أمــــام دار المناسبات',
        src: 'https://www.google.com/maps/place/%E2%80%8E%D9%85%D9%88%D9%84+%D8%B7%D9%86%D8%B7%D8%A7%E2%80%AD/@30.8142391,30.9663603,13z/data=!4m6!3m5!1s0x14f7b7b312fbd47f:0x41995038b864f501!8m2!3d30.8413235!4d31.0177946!16s%2Fg%2F11g_qlww8y?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'el-mansoura-2',
        address: 'ش مسجد بلال، المنصورة (قسم 2)، اول المنصورة، الدقهلية',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.0346478,31.3585207,20z/data=!4m6!3m5!1s0x14f79d3dc6445a6f:0xbed4aef845721a15!8m2!3d31.0345939!4d31.3583265!16s%2Fg%2F11j30p3gy2?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'zakazeek',
        address: '2 شــــارع الخشاب – القومية',
        src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.5885702,31.4889425,17z/data=!4m6!3m5!1s0x14f7f1c2c93aa279:0x6bcee06f248906ef!8m2!3d30.5876325!4d31.4907175!16s%2Fg%2F11flm9960n?entry=tts&shorturl=1'
    },

];
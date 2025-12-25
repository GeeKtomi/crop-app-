const crops = {
    cocoa: {
        name: "Cocoa",
        image: "data/img/cocoa.jpeg",
        video: "https://www.youtube-nocookie.com/embed/73mNTNqhIR4?si=-bFGxV2HT0xOaAhB",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 15:15:15 or organic compost. Mulch young plants.",
        steps: [
            "Select healthy, disease-free seeds or seedlings.",
            "Prepare well-drained, loamy soil with partial shade.",
            "Plant seeds/seedlings 3m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest pods when they turn yellow/orange.",
            "Cut pods with a sharp knife, do not pull.",
            "Open pods and remove beans.",
            "Ferment beans for 5-7 days.",
            "Dry beans in the sun for 1-2 weeks."
        ]
    },
    cashew: {
        name: "Cashew",
        image: "data/img/cashew.jpg",
        video: "https://www.youtube-nocookie.com/embed/BBRoJ7FkG7g?si=GGEtk-opNbc8KzY7",
        season: "Best planted at the beginning of the rainy season (March - May).",
        fertilizer: "Apply NPK 15:15:15 or organic manure during planting and annually.",
        steps: [
            "Select healthy seeds or grafted seedlings.",
            "Prepare sandy-loam, well-drained soil in a sunny location.",
            "Plant seeds/seedlings 10m apart in rows.",
            "Water regularly during dry periods.",
            "Apply fertilizer and mulch as needed.",
            "Weed regularly and monitor for pests.",
            "Prune young trees to encourage strong growth."
        ],
        harvesting: [
            "Harvest cashew apples and nuts when they fall naturally.",
            "Separate nuts from apples and dry them in the sun for 2-3 days.",
            "Roast nuts to remove toxic shell oil.",
            "Crack shells to extract edible cashew kernels."
        ]
    },
    apple: {
        name: "Apple",
        image: "data/img/apple.jpeg",
        video: "https://www.youtube-nocookie.com/embed/cWpQRdWLjTE?si=W48rxtk0NGyma_Bo",
        season: "Best planted in late winter or early spring, when the soil is workable.",
        fertilizer: "Apply balanced fertilizer (NPK 10:10:10) in early spring and mid-summer.",
        steps: [
            "Choose disease-resistant apple varieties suitable for your climate.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Dig a hole twice as wide as the root ball.",
            "Place the tree in the hole and fill with soil, tamping gently.",
            "Water thoroughly after planting.",
            "Mulch around the base to retain moisture.",
            "Stake young trees if necessary and prune to shape."
        ],
        harvesting: [
            "Harvest apples when they are fully colored and come off the tree easily.",
            "Twist the apple upward to avoid damaging the spur.",
            "Store apples in a cool, dry place."
        ]
    },
    mango: {
        name: "Mango",
        image: "data/img/mango.jpeg",
        video: "https://www.youtube-nocookie.com/embed/vbrgpxPihb4?si=oY9i2NQ9WObXhkU8",
        season: "Best planted at the start of the rainy season (March - June).",
        fertilizer: "Apply NPK 10:10:10 or organic compost during planting and annually.",
        steps: [
            "Select healthy, disease-free seeds or grafted seedlings.",
            "Prepare well-drained, sandy-loam soil in a sunny location.",
            "Plant seeds/seedlings 10m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases.",
            "Fertilizer is often applied 2-3 times a year depending on the soil.",
        ],
        harvesting: [
            "Harvest mangoes when they reach full size and start to change color.",
            "Gently twist or cut the fruit from the tree to avoid damage.",
            "Store mangoes at room temperature to ripen, then refrigerate.",
           "Mango trees usually start fruiting 3-5 years after planting (if grafted) or 6-10 years (if grown from seed).",
            "Regular pruning and proper fertilization can enhance fruit production."
        ]

    },
    banana: {
        name: "Banana",
        image: "data/img/banana.jpeg",
        video: "https://www.youtube-nocookie.com/embed/XpoCV1zaB-M?si=wo7RApQg_VtUdAk9",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost every 2-3 months.",
        steps: [
            "Select healthy suckers or tissue-cultured plantlets.",
            "Prepare well-drained, loamy soil with plenty of organic matter.",
            "Plant suckers/plantlets 2-3m apart in rows.",  
            "Water regularly, especially during dry spells.",   
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest bananas when the fruit is plump and the angles on the fingers have rounded off.",
            "Cut the entire bunch from the plant using a sharp knife.",
            "Handle bananas carefully to avoid bruising.",
            "Banana plants typically take 9-12 months to produce fruit after planting.",
            "Regular watering and fertilization can enhance growth and yield."
        ]
    },
    oilpalm: {
        name: "Oil Palm",
        image: "data/img/oil-palm.jpeg",
        video: "https://www.youtube-nocookie.com/embed/0qLwATBWTCg?si=yFHWXv1aU1x0x5cS",
        season: "Best planted at the start of the rainy season (March - May).",
        fertilizer: "Apply NPK 15:15:15 or organic compost during planting and annually.",  
        steps: [
            "Select healthy, disease-free seedlings from a reputable nursery.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seedlings 9m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest oil palm fruit bunches when they turn orange-red.",
            "Cut bunches with a sharp knife or machete, taking care not to damage the tree.",
            "Process fruit to extract palm oil.",
            "Oil palm trees typically start fruiting 3-4 years after planting.",
            "Regular pruning and proper fertilization can enhance fruit production."
        ]
    },

    okro: {
        name: "Okro",
        image: "data/img/okro.jpeg",
        video: "https://www.youtube-nocookie.com/embed/RU7cBD14iQ8?si=c98dXVgZe_PxdbEw",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 15:15:15 or organic compost at planting and every 4-6 weeks.",
        steps: [
            "Select healthy, disease-free seeds.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seeds 30-45cm apart in rows 75cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest okro pods when they are 5-10cm long and still tender.",
            "Cut pods with a sharp knife or scissors.",
            "Handle pods carefully to avoid bruising.",
            "Okro plants typically start producing pods 50-60 days after planting.",
            "Regular harvesting encourages more pod production."
        ]
    },

    cassava: {
        name: "Cassava",
        image: "data/img/cassava.jpeg",
        video: "https://www.youtube-nocookie.com/embed/9_O-NoSpMGA?si=-vnpbMcYLzBgX-WR",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 15:15:15 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free stem cuttings (20-30cm long).",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant cuttings vertically or at a slight angle, burying 2/3 of the cutting.",
            "Space cuttings 1m apart in rows 1-1.5m apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest cassava roots 8-12 months after planting, depending on the variety.",
            "Loosen soil around the plant and carefully dig up the roots.",
            "Handle roots carefully to avoid damage.",
            "Cassava plants typically start producing roots 8-12 months after planting.",
            "Regular weeding and proper fertilization can enhance root production."
        ]
    },

    beans: {
        name: "Beans",
        image: "data/img/beans.jpeg",
        video: "https://www.youtube-nocookie.com/embed/7PvezpWIkdA?si=a27uO5co6J1gBNAU",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and mid-season.",
        steps: [
            "Select healthy, disease-free seeds.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seeds 5-10cm deep, spacing 5-10cm apart in rows 30-60cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest beans when pods are fully developed but still green.",
            "Pick pods carefully to avoid damaging the plant.",
            "Handle pods carefully to avoid bruising.",
            "Bean plants typically start producing pods 50-70 days after planting.",
            "Regular harvesting encourages more pod production."
        ]
    },
    maize: {
        name: "Maize",
        image: "data/img/maize.jpeg",
        video: "https://www.youtube-nocookie.com/embed/TDDs0rjKcWk?si=4qxLj6flWYECzdFQ",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 15:15:15 or organic compost at planting and mid-season.",
        steps: [
            "Select healthy, disease-free seeds.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seeds 2.5-5cm deep, spacing 20-30cm apart in rows 75cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest maize when kernels are fully developed and the husks start to dry.",
            "Cut the ears from the stalk using a sharp knife.",
            "Dry ears in the sun for a few days before shelling.",
            "Maize plants typically start producing ears 60-100 days after planting, depending on the variety.",
            "Regular weeding and proper fertilization can enhance ear production."
        ]
    },

    tomato:{
        name: "Tomato",
        image: "data/img/tomato.jpeg",
        video: "https://www.youtube-nocookie.com/embed/OMIbtIZ2E-Q?si=secattW5M-27X1ps",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 4-6 weeks.",
        steps: [
            "Select healthy, disease-free seeds or seedlings.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seeds/seedlings 45-60cm apart in rows 75-90cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest tomatoes when they are fully colored and slightly soft to the touch.",
            "Pick tomatoes carefully to avoid damaging the plant.",
            "Handle tomatoes carefully to avoid bruising.",
            "Tomato plants typically start producing fruit 60-85 days after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    
    },

    pepper: {
        name: "Pepper",
        image: "data/img/pepper.jpeg",
        video: "https://www.youtube.com/embed/NC2c5s759VU?si=H_tNV0qbIAvFU-p3",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 4-6 weeks.",
        steps: [
            "Select healthy, disease-free seeds or seedlings.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seeds/seedlings 30-45cm apart in rows 60-90cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest peppers when they reach the desired size and color.",
            "Pick peppers carefully to avoid damaging the plant.",
            "Handle peppers carefully to avoid bruising.",
            "Pepper plants typically start producing fruit 60-90 days after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    },

    watermelon: {
        name: "Watermelon",
        image: "data/img/watermelon.jpeg",
        video: "https://www.youtube.com/embed/X793Uy8qMcQ?si=DioJ6YodV0cA0b7F",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 4-6 weeks.",
        steps: [
            "Select healthy, disease-free seeds or seedlings.",
            "Prepare well-drained, sandy-loam soil in a sunny location.",
            "Plant seeds/seedlings 90-120cm apart in rows 150-180cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest watermelons when the tendril closest to the fruit turns brown and dries up.",
            "Pick watermelons carefully to avoid damaging the plant.",
            "Handle watermelons carefully to avoid bruising.",
            "Watermelon plants typically start producing fruit 70-90 days after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    },

    pineapple: {
        name: "Pineapple",
        image: "data/img/pineapple.jpeg",
        video: "https://www.youtube.com/embed/aT9eIF1_sww?si=ReH3eRCX5wU9zzWJ",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free crowns or suckers.",
            "Prepare well-drained, sandy-loam soil in a sunny location.",
            "Plant crowns/suckers 30-60cm apart in rows 90-120cm apart.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest pineapples when the fruit turns golden yellow and emits a sweet aroma.",
            "Cut the fruit from the plant using a sharp knife.",
            "Handle pineapples carefully to avoid bruising.",
            "Pineapple plants typically start producing fruit 18-24 months after planting.",
            "Regular fertilization and proper care can enhance fruit production."
        ]
    },
    guava: {
        name: "Guava",
        image: "data/img/guava.jpeg",
        video: "https://www.youtube.com/embed/OSEtzhjeONw?si=LWprocbFEv313AaU",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free seedlings or grafted plants.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seedlings/grafted plants 6-8m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest guavas when they are fully colored and slightly soft to the touch.",
            "Pick guavas carefully to avoid damaging the plant.",
            "Handle guavas carefully to avoid bruising.",
            "Guava plants typically start producing fruit 2-4 years after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]

    },

    orange: {
        name: "Orange",
        image: "data/img/orange.jpeg",
        video: "https://www.youtube.com/embed/mmsOLi3OZJY?si=C7YsH4AbhYhfNAdB",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free seedlings or grafted plants.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seedlings/grafted plants 6-8m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest oranges when they are fully colored and slightly soft to the touch.",
            "Pick oranges carefully to avoid damaging the plant.",
            "Handle oranges carefully to avoid bruising.",
            "Orange plants typically start producing fruit 3-5 years after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    },
    lemon: {
        name: "Lemon",
        image: "data/img/lemon.jpeg",
        video: "https://www.youtube.com/embed/C2bcKJP8o-8?si=8SMaeGZ4jDekjug0",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free seedlings or grafted plants.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seedlings/grafted plants 6-8m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest lemons when they are fully colored and slightly soft to the touch.",
            "Pick lemons carefully to avoid damaging the plant.",
            "Handle lemons carefully to avoid bruising.",
            "Lemon plants typically start producing fruit 3-5 years after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    },
    avocado: {
        name: "Avocado",
        image: "data/img/avocado.jpeg",
        video: "https://www.youtube.com/embed/FCIBbSJiDMI?si=geids3EVUnQ-d6c4",
        season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
        fertilizer: "Apply NPK 10:10:10 or organic compost at planting and every 3 months.",
        steps: [
            "Select healthy, disease-free seedlings or grafted plants.",
            "Prepare well-drained, loamy soil in a sunny location.",
            "Plant seedlings/grafted plants 6-8m apart in rows.",
            "Water regularly, especially during dry spells.",
            "Apply fertilizer as recommended.",
            "Weed and mulch to retain moisture.",
            "Monitor for pests and diseases."
        ],
        harvesting: [
            "Harvest avocados when they reach full size and yield slightly to gentle pressure.",
            "Pick avocados carefully to avoid damaging the plant.",
            "Handle avocados carefully to avoid bruising.",
            "Avocado plants typically start producing fruit 3-4 years after planting, depending on the variety.",
            "Regular harvesting encourages more fruit production."
        ]
    },
   
        yam: {
        name: "Yam",
        image: "data/img/yam.jpeg",
        video: "https://www.youtube-nocookie.com/embed/GFqY9ZQv2q0",
        season: "Best planted at the beginning of the rainy season (March - May).",
        fertilizer: "Apply organic compost or NPK 15:15:15 at planting and mid-season.",
        steps: [
            "Select healthy yam setts (pieces of tubers with buds).",
            "Prepare well-drained, sandy-loam soil with mounds or ridges.",
            "Plant yam setts 30–50 cm deep, spacing 1m apart in rows.",
            "Stake plants with sticks to support vines.",
            "Weed regularly and mulch to conserve soil moisture.",
            "Apply fertilizer as recommended.",
            "Monitor for pests like yam beetles and nematodes."
        ],
        harvesting: [
            "Harvest 8–12 months after planting when leaves turn yellow and dry.",
            "Carefully dig up tubers to avoid damage.",
            "Handle yams gently to prevent bruising.",
            "Store in cool, dry barns with ventilation."
        ]
    },

    groundnut: {
        name: "Groundnut (Peanut)",
        image: "data/img/groundnut.jpeg",
        video: "https://www.youtube-nocookie.com/embed/Zs7B3sMJgIU",
        season: "Best planted at the start of the rainy season (March - May).",
        fertilizer: "Apply Single Super Phosphate (SSP) or NPK 15:15:15 at planting.",
        steps: [
            "Select improved, disease-free seeds.",
            "Prepare sandy-loam, well-drained soil.",
            "Plant seeds 5–7 cm deep, spacing 10–15 cm apart in rows 45 cm apart.",
            "Weed early to reduce competition.",
            "Earth up soil around the base during flowering.",
            "Apply fertilizer as recommended.",
            "Control pests like aphids and leaf spot diseases."
        ],
        harvesting: [
            "Harvest 90–120 days after planting when leaves turn yellow.",
            "Uproot plants and shake off soil.",
            "Dry pods in the sun for 5–7 days.",
            "Store in a cool, dry place to avoid mold."
        ]
    },

    rice: {
        name: "Rice",
        image: "data/img/rice.jpeg",
        video: "https://www.youtube.com/embed/rdq-fW1pibo?si=IvjpzOg5iR-4RaLi",
        season: "Best planted during the rainy season (April - July).",
        fertilizer: "Apply NPK 15:15:15 and Urea in split doses during growth stages.",
        steps: [
            "Prepare land by plowing and leveling (paddy fields or upland).",
            "Sow seeds directly or transplant seedlings after 21–30 days.",
            "Maintain standing water (paddy) or irrigate regularly (upland).",
            "Weed manually or apply herbicides.",
            "Top-dress with fertilizer at tillering and panicle initiation stages.",
            "Protect against rice blast and stem borers."
        ],
        harvesting: [
            "Harvest 100–150 days after planting when grains are hard and golden.",
            "Cut plants close to the ground with sickles.",
            "Thresh to separate grains.",
            "Dry grains in the sun before storage."
        ]
    },

    sorghum: {
        name: "Sorghum",
        image: "data/img/sorghum.jpeg",
        video: "https://www.youtube.com/embed/K8HaLSDlUgA?si=1iG0qtNgt6xRuF_X",
        season: "Best planted at the beginning of the rainy season (May - June).",
        fertilizer: "Apply NPK 15:15:15 at planting and Urea as top-dressing.",
        steps: [
            "Select improved drought-resistant varieties.",
            "Prepare sandy-loam or loamy soil with good drainage.",
            "Plant seeds 2–3 cm deep, spacing 10–15 cm apart in rows 60–75 cm apart.",
            "Thin seedlings after germination.",
            "Weed regularly to reduce competition.",
            "Apply fertilizers as recommended.",
            "Monitor for pests like stem borers and birds."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when panicles are brown and dry.",
            "Cut panicles or stalks with sickles.",
            "Thresh to separate grains.",
            "Dry and store in airtight containers."
        ]
    },

    millet: {
        name: "Millet",
        image: "data/img/millet.jpeg",
        video: "https://www.youtube.com/embed/l04-m8y7tHo?si=M_1MHL44VM-tSRO_",
        season: "Best planted at the beginning of the rainy season (May - June).",
        fertilizer: "Apply organic compost or NPK 15:15:15 sparingly due to low fertilizer demand.",
        steps: [
            "Select improved drought-tolerant millet seeds.",
            "Prepare sandy or loamy soil with good drainage.",
            "Plant seeds 2–3 cm deep, spacing 10–15 cm apart in rows 30–45 cm apart.",
            "Thin seedlings to one per stand.",
            "Weed early and regularly.",
            "Apply fertilizers if soil fertility is low.",
            "Protect against birds and pests."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when heads are dry and firm.",
            "Cut heads with sickles or knives.",
            "Thresh to separate grains.",
            "Dry thoroughly before storage."
        ]
    },

    cucumber: {
        name: "Cucumber",
        image: "data/img/cucumber.jpeg",
        video: "https://www.youtube.com/embed/OYZbTFXfuz4?si=0P3hdXOrdHrlYd0E",
        season: "Best planted during warm, rainy seasons (March - May or August - September).",
        fertilizer: "Apply compost or NPK 15:15:15 at planting and every 2–3 weeks.",
        steps: [
            "Select disease-resistant cucumber seeds.",
            "Prepare sandy-loam, fertile soil with irrigation.",
            "Plant seeds 2–3 cm deep, spacing 30–45 cm apart in rows 1–1.5 m apart.",
            "Stake vines or use trellises for better growth.",
            "Water regularly to maintain soil moisture.",
            "Weed and mulch around plants.",
            "Spray against downy mildew and insect pests."
        ],
        harvesting: [
            "Harvest cucumbers when they are green, firm, and 15–20 cm long.",
            "Pick every 2–3 days to encourage continuous fruiting.",
            "Handle cucumbers carefully to avoid scratches.",
            "Do not allow fruits to overripe on the plant."
        ]
    },

    carrot: {
        name: "Carrot",
        image: "data/img/carrot.jpeg",
        video: "https://www.youtube.com/embed/mcW9bQd8YuY?si=HBvTWjSR3lo8zJZl",
        season: "Best planted during cool seasons (October - February) or early rains.",
        fertilizer: "Apply organic compost or NPK 10:10:20 at planting.",
        steps: [
            "Select improved, disease-free carrot seeds.",
            "Prepare loose, sandy-loam soil free from stones.",
            "Plant seeds 1 cm deep, spacing 5–10 cm apart in rows 30 cm apart.",
            "Thin seedlings after germination to avoid overcrowding.",
            "Weed gently to avoid damaging roots.",
            "Water consistently to keep soil moist.",
            "Avoid excess nitrogen to prevent forked roots."
        ],
        harvesting: [
            "Harvest carrots 70–100 days after planting when roots are 1.5–2.5 cm thick.",
            "Loosen soil before pulling out carrots.",
            "Handle gently to avoid breaking roots.",
            "Wash and store in cool, dry conditions."
        ]
    },
    sweet_potato: {
        name: "Sweet Potato",
        image: "data/img/sweet_potato.jpeg",
        video: "https://www.youtube.com/embed/crFwR96XirY?si=WAfkGmX84VFw5kku",
        season: "Best planted at the start of the rainy season (March - May).",
        fertilizer: "Apply organic manure or NPK 12:12:17 at planting.",
        steps: [
            "Obtain healthy vine cuttings (25–30 cm long).",
            "Prepare well-drained sandy-loam soil.",
            "Plant vines horizontally with nodes buried in soil, spacing 30 cm apart in ridges 1 m apart.",
            "Weed and mulch regularly to conserve soil moisture.",
            "Apply fertilizers sparingly.",
            "Water during dry spells.",
            "Control pests like weevils and caterpillars."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when leaves begin to yellow.",
            "Dig tubers carefully to avoid damage.",
            "Cure tubers in shade for a few days before storage.",
            "Store in a cool, dry place."
        ]
    },

    soybean: {
        name: "Soybean",
        image: "data/img/soybean.jpeg",
        video: "https://www.youtube.com/embed/u9JfsYqHub8?si=HxsFEZsLFfVM_SMU",
        season: "Best planted at the start of the rainy season (May - June).",
        fertilizer: "Apply Single Super Phosphate (SSP) or inoculate seeds with rhizobium bacteria.",
        steps: [
            "Select improved, high-yielding soybean seeds.",
            "Prepare fertile, well-drained loamy soil.",
            "Plant seeds 3–5 cm deep, spacing 5–10 cm apart in rows 45–60 cm apart.",
            "Weed early to reduce competition.",
            "Avoid excessive nitrogen fertilizer.",
            "Monitor for pests like aphids and diseases like rust."
        ],
        harvesting: [
            "Harvest 90–120 days after planting when pods turn brown and dry.",
            "Cut plants and thresh to separate seeds.",
            "Dry seeds to safe moisture levels (10–12%).",
            "Store in airtight containers."
        ]
    },

    pumpkin: {
        name: "Pumpkin",
        image: "data/img/pumpkin.jpeg",
        video: "https://www.youtube.com/embed/OCXy3d_s6Ms?si=N2wQDrIZI_JXIKfG",
        season: "Best planted at the beginning of the rainy season (March - June).",
        fertilizer: "Apply compost or NPK 15:15:15 at planting and during flowering.",
        steps: [
            "Select healthy pumpkin seeds.",
            "Prepare fertile, sandy-loam soil.",
            "Plant seeds 2–3 cm deep, spacing 1–1.5 m apart in rows.",
            "Water regularly to maintain soil moisture.",
            "Mulch around plants to retain water.",
            "Pollinate manually if bee activity is low.",
            "Control pests like squash bugs and powdery mildew."
        ],
        harvesting: [
            "Harvest pumpkins 3–4 months after planting when the rind is hard and skin is deep in color.",
            "Cut the fruit with a small stem attached.",
            "Cure pumpkins in sunlight for 7–10 days.",
            "Store in a cool, dry place."
        ]
    },

    lettuce: {
        name: "Lettuce",
        image: "data/img/lettuce.jpeg",
        video: "https://www.youtube.com/embed/wj6hN9oQ4d4?si=PfGwprCaCAcsqWYB",
        season: "Best planted in cool seasons (October - February).",
        fertilizer: "Apply compost or NPK 10:10:10 at planting.",
        steps: [
            "Select fresh lettuce seeds.",
            "Prepare loose, fertile soil with good drainage.",
            "Sow seeds shallowly and thin seedlings after germination.",
            "Space plants 20–30 cm apart.",
            "Water regularly to keep soil moist.",
            "Weed carefully to avoid damaging shallow roots.",
            "Protect against aphids and snails."
        ],
        harvesting: [
            "Harvest 45–70 days after planting, depending on variety.",
            "Cut outer leaves or harvest whole heads.",
            "Handle gently to avoid bruising.",
            "Store in a cool, moist environment."
        ]
    },

    cabbage: {
        name: "Cabbage",
        image: "data/img/cabbage.jpeg",
        video: "https://www.youtube.com/embed/Ux-DtELMW5A?si=A1x8LRm73awab2Nk",
        season: "Best planted in cool seasons (October - February).",
        fertilizer: "Apply compost and NPK 20:10:10 at planting and top-dress with Urea.",
        steps: [
            "Sow seeds in a nursery bed.",
            "Transplant seedlings after 3–4 weeks when 4–5 leaves appear.",
            "Space plants 40–60 cm apart in rows.",
            "Water consistently to avoid stress.",
            "Weed regularly and mulch.",
            "Control pests like cabbage worms and aphids."
        ],
        harvesting: [
            "Harvest 70–120 days after planting when heads are firm and mature.",
            "Cut heads at the base with a sharp knife.",
            "Avoid over-maturity to prevent splitting.",
            "Store in cool, moist storage rooms."
        ]
    },

    spinach: {
        name: "Spinach",
        image: "data/img/spinach.jpeg",
        video: "https://www.youtube.com/embed/NVuyyaOZ7Og?si=1slMf58Bm0NQXRH0",
        season: "Best planted in cool seasons (October - February).",
        fertilizer: "Apply compost or NPK 10:10:10 at planting.",
        steps: [
            "Prepare fertile, loose soil rich in organic matter.",
            "Plant seeds 1–2 cm deep, spacing 10–15 cm apart.",
            "Water regularly to maintain soil moisture.",
            "Weed gently to avoid damaging shallow roots.",
            "Harvest leaves regularly to encourage new growth."
        ],
        harvesting: [
            "Harvest 30–60 days after planting by cutting outer leaves.",
            "Continue harvesting until plants bolt (produce flowers).",
            "Store fresh spinach in a cool, moist environment."
        ]
    },

    onion: {
        name: "Onion",
        image: "data/img/onion.jpeg",
        video: "https://www.youtube.com/embed/hUCOacwcIIM?si=LHFyOOX_-LnJDnfC",
        season: "Best planted in cool, dry seasons (October - January).",
        fertilizer: "Apply compost and NPK 15:15:15 at planting.",
        steps: [
            "Select improved onion seeds or sets.",
            "Prepare sandy-loam soil with good drainage.",
            "Plant seeds 1 cm deep or transplant seedlings after 6 weeks.",
            "Space bulbs 10–15 cm apart in rows 30 cm apart.",
            "Weed regularly and mulch to retain moisture.",
            "Irrigate lightly but consistently.",
            "Control pests like onion thrips."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when leaves fall and bulbs mature.",
            "Pull bulbs and dry in the sun for 1–2 weeks.",
            "Store in well-ventilated, dry conditions."
        ]
    },

    garlic: {
        name: "Garlic",
        image: "data/img/garlic.jpeg",
        video: "https://www.youtube.com/embed/0Uy4A_zxQbQ?si=Ied7jJ740tq4W09j",
        season: "Best planted in cool seasons (October - January).",
        fertilizer: "Apply compost or NPK 10:10:20 at planting.",
        steps: [
            "Break garlic bulbs into cloves for planting.",
            "Prepare fertile, loose soil with good drainage.",
            "Plant cloves 3–5 cm deep, spacing 10–15 cm apart.",
            "Mulch to conserve soil moisture.",
            "Weed regularly and irrigate moderately.",
            "Control fungal diseases with crop rotation."
        ],
        harvesting: [
            "Harvest 4–6 months after planting when leaves turn yellow and dry.",
            "Pull bulbs and cure in shade for 2–3 weeks.",
            "Store in a cool, dry place."
        ]
    },

    ginger: {
        name: "Ginger",
        image: "data/img/ginger.jpeg",
        video: "https://www.youtube.com/embed/-mUeNy0rweM?si=lH3wHu-LUhjAebIO",
        season: "Best planted at the beginning of the rainy season (April - May).",
        fertilizer: "Apply compost and NPK 15:15:15 at planting and mid-season.",
        steps: [
            "Select healthy rhizomes with visible buds.",
            "Prepare loamy, well-drained soil with organic matter.",
            "Plant rhizomes 5–10 cm deep, spacing 30 cm apart.",
            "Mulch to retain soil moisture.",
            "Weed regularly and irrigate as needed.",
            "Protect against pests like nematodes and fungal diseases."
        ],
        harvesting: [
            "Harvest 8–10 months after planting when leaves yellow and dry.",
            "Dig rhizomes carefully to avoid damage.",
            "Wash and dry before storage or sale."
        ]
    },

    turmeric: {
        name: "Turmeric",
        image: "data/img/turmeric.jpeg",
        video: "https://www.youtube.com/embed/4yCKnU06xqQ?si=_TQbUprO92ag9R6h",
        season: "Best planted at the beginning of the rainy season (April - May).",
        fertilizer: "Apply compost and NPK 20:10:10 at planting.",
        steps: [
            "Select healthy turmeric rhizomes with buds.",
            "Prepare fertile, loamy soil with good drainage.",
            "Plant rhizomes 5–7 cm deep, spacing 30–40 cm apart.",
            "Mulch heavily to conserve moisture.",
            "Weed regularly and irrigate during dry spells.",
            "Protect against leaf spot and rhizome rot."
        ],
        harvesting: [
            "Harvest 8–10 months after planting when leaves dry and stems fall.",
            "Dig up rhizomes and clean carefully.",
            "Boil rhizomes, dry in sun, then polish before storage."
        ]
    },

    barley: {
        name: "Barley",
        image: "data/img/barley.jpeg",
        video: "https://www.youtube.com/embed/okfNv2Jgv0c?si=2cWWydTOhm7pgLGk",
        season: "Best planted during cool, dry seasons (October - January).",
        fertilizer: "Apply NPK 20:10:10 at planting and Urea at tillering.",
        steps: [
            "Select improved barley seeds.",
            "Prepare well-drained loamy soil.",
            "Sow seeds 2–3 cm deep, spacing 10–15 cm apart.",
            "Irrigate lightly if rainfall is insufficient.",
            "Weed regularly to reduce competition.",
            "Control pests like aphids and diseases like rust."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when heads are golden and dry.",
            "Cut stalks with sickles.",
            "Thresh to separate grains.",
            "Dry grains thoroughly before storage."
        ]
    },

    wheat: {
        name: "Wheat",
        image: "data/img/wheat.jpeg",
        video: "https://www.youtube.com/embed/AonJkhqCRwk?si=YneNMwnMk11bauID",
        season: "Best planted in cool, dry seasons (November - January).",
        fertilizer: "Apply NPK 20:10:10 at planting and top-dress with Urea at tillering.",
        steps: [
            "Select high-yielding, disease-resistant wheat seeds.",
            "Prepare well-drained, fertile loamy soil.",
            "Sow seeds 2–3 cm deep, spacing 10–15 cm apart in rows.",
            "Irrigate as needed, especially during flowering and grain filling.",
            "Weed regularly to avoid competition.",
            "Protect against rust and stem borers."
        ],
        harvesting: [
            "Harvest 4–5 months after planting when stalks turn golden and dry.",
            "Cut with sickles or harvesters.",
            "Thresh and winnow to separate grains.",
            "Store in a cool, dry place."
        ]
    },

    papaya: {
        name: "Papaya",
        image: "data/img/papaya.jpeg",
        video: "https://www.youtube.com/embed/iUceYy_ZZJA?si=T9fvKgAG9A-HoOL6",
        season: "Best planted at the start of the rainy season (March - May).",
        fertilizer: "Apply NPK 15:15:15 or organic manure every 2–3 months.",
        steps: [
            "Select healthy papaya seeds or seedlings.",
            "Prepare well-drained loamy soil with compost.",
            "Plant seedlings 2–3 m apart in rows.",
            "Water regularly, especially during dry periods.",
            "Weed and mulch to retain soil moisture.",
            "Control pests like aphids and papaya mealybugs."
        ],
        harvesting: [
            "Harvest 6–9 months after planting when fruits turn yellowish-green.",
            "Cut fruits carefully to avoid damage.",
            "Papaya yields continuously for 2–3 years."
        ]
    },

    grape: {
        name: "Grape",
        image: "data/img/grape.jpeg",
        video: "https://www.youtube.com/embed/8Ik7b6UcDP8?si=rJOpy0cxvlUmgQnL",
        season: "Best planted in cool to warm dry climates (November - February).",
        fertilizer: "Apply compost and NPK 15:15:15 every 3 months.",
        steps: [
            "Select improved grape cuttings or seedlings.",
            "Prepare fertile, well-drained sandy-loam soil.",
            "Plant vines 2–3 m apart with trellis support.",
            "Prune regularly to promote fruiting.",
            "Irrigate during dry spells.",
            "Protect against fungal diseases like downy mildew."
        ],
        harvesting: [
            "Harvest 2–3 years after planting when clusters turn fully colored.",
            "Cut bunches with scissors or knives.",
            "Handle gently to avoid bruising.",
            "Store grapes in cool, ventilated storage."
        ]
    },

    strawberry: {
        name: "Strawberry",
        image: "data/img/strawberry.jpeg",
        video: "https://www.youtube.com/embed/xhR7I0ipbSM?si=VAPuH_ed3zpLIpd4",
        season: "Best planted in cool seasons (October - January).",
        fertilizer: "Apply compost or NPK 10:10:10 every 2–3 weeks.",
        steps: [
            "Select disease-free strawberry runners.",
            "Prepare well-drained sandy-loam soil with compost.",
            "Plant runners 30–40 cm apart in rows.",
            "Mulch with straw or plastic to conserve moisture.",
            "Water regularly without waterlogging.",
            "Protect from pests like slugs and fungal diseases."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when fruits turn bright red.",
            "Pick berries gently to avoid bruising.",
            "Harvest every 2–3 days during season."
        ]
    },

    pear: {
        name: "Pear",
        image: "data/img/pear.jpeg",
        video: "https://www.youtube.com/embed/W39g5UkwsgQ?si=79AMRAhSxesKH4uP",
        season: "Best planted in cool climates (October - February).",
        fertilizer: "Apply compost and NPK 15:15:15 twice a year.",
        steps: [
            "Select grafted pear seedlings.",
            "Prepare deep, fertile loamy soil.",
            "Plant seedlings 5–6 m apart in rows.",
            "Irrigate during dry spells.",
            "Prune trees annually for better yield.",
            "Protect from pear scab and aphids."
        ],
        harvesting: [
            "Harvest 3–4 years after planting when fruits are mature but firm.",
            "Pick pears by hand carefully.",
            "Store in cool conditions for ripening."
        ]
    },

    coconut: {
        name: "Coconut",
        image: "data/img/coconut.jpeg",
        video: "https://www.youtube.com/embed/maVWfh3JdUY?si=JyxLYnG8aLoQl-V1",
        season: "Can be planted year-round, best at start of rainy season.",
        fertilizer: "Apply NPK 16:16:16 and organic manure every 6 months.",
        steps: [
            "Select healthy coconut seedlings.",
            "Prepare sandy or loamy coastal soil.",
            "Plant seedlings 8–10 m apart.",
            "Irrigate during dry seasons.",
            "Weed and mulch around palms.",
            "Apply fertilizer regularly."
        ],
        harvesting: [
            "Harvest begins 5–7 years after planting.",
            "Collect mature nuts every 45–60 days.",
            "Store in a dry place for processing or consumption."
        ]
    },

    barley_grass: {
        name: "Barley Grass",
        image: "data/img/barley_grass.jpeg",
        video: "https://www.youtube.com/embed/Y4Abro6lCpg?si=BhgczZDknYvmqWgm",
        season: "Can be grown year-round in temperate climates.",
        fertilizer: "Apply organic compost before planting.",
        steps: [
            "Prepare fertile loamy soil.",
            "Sow seeds densely in trays or open field.",
            "Water regularly to maintain soil moisture.",
            "Harvest shoots when 20–30 cm tall."
        ],
        harvesting: [
            "Harvest after 7–14 days for juice or feed.",
            "Cut leaves with scissors at base.",
            "Use fresh for best nutrients."
        ]
    },

    aloe_vera: {
        name: "Aloe Vera",
        image: "data/img/aloe_vera.jpeg",
        video: "https://www.youtube.com/embed/0WqxVTOJcg4?si=hcfbcEbBTovIhcOF",
        season: "Can be grown year-round in warm climates.",
        fertilizer: "Apply organic compost sparingly.",
        steps: [
            "Select healthy aloe suckers.",
            "Prepare sandy-loam, well-drained soil.",
            "Plant suckers 30–50 cm apart.",
            "Water sparingly to avoid rot.",
            "Weed regularly and mulch.",
            "Control fungal diseases with proper drainage."
        ],
        harvesting: [
            "Harvest 8–10 months after planting.",
            "Cut mature leaves at the base.",
            "Use gel fresh or process for products."
        ]
    },

    sesame: {
        name: "Sesame",
        image: "data/img/sesame.jpeg",
        video: "https://www.youtube.com/embed/t6nD-D-UenQ?si=0HzVqS4zxfqZPufw",
        season: "Best planted at the start of the rainy season (May - June).",
        fertilizer: "Apply compost or NPK 20:10:10 at planting.",
        steps: [
            "Select high-yielding sesame seeds.",
            "Prepare sandy-loam soil with good drainage.",
            "Plant seeds 2–3 cm deep, spacing 10–15 cm apart in rows.",
            "Weed regularly and irrigate lightly.",
            "Protect from pests like gall midge and leaf spot."
        ],
        harvesting: [
            "Harvest 3–4 months after planting when capsules turn brown.",
            "Cut stalks and dry upright for seed release.",
            "Thresh and winnow seeds before storage."
        ]
    },

    pawpaw: {
    name: "Pawpaw (Papaya)",
    image: "data/img/papaya.jpeg",
    video: "https://www.youtube.com/embed/iUceYy_ZZJA?si=79cOSEgb8rOZCtse",
    season: "Best planted at the start of the rainy season (March - May or September - October, depending on region).",
    fertilizer: "Apply NPK 10:10:10 or organic compost every 2-3 months.",
    steps: [
        "Select healthy, disease-free seeds or seedlings.",
        "Prepare well-drained, sandy-loam soil in a sunny location.",
        "Plant seeds/seedlings 2-3m apart in rows.",
        "Water regularly, especially during dry spells.",
        "Apply fertilizer as recommended.",
        "Weed and mulch to retain soil moisture.",
        "Monitor for pests and diseases like papaya ringspot virus."
    ],
    harvesting: [
        "Harvest pawpaw fruits when the skin starts turning yellow.",
        "Cut fruits with a sharp knife, leaving a short stalk attached.",
        "Handle fruits carefully to avoid bruising.",
        "Pawpaw plants typically start fruiting 6-9 months after planting.",
        "Regular picking encourages continuous fruit production."
    ]
},


};

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('crop-search').value.trim().toLowerCase();
    const crop = crops[query];
    const infoDiv = document.getElementById('crop-info');
    function resolvePath(p){
        if (!p) return p;
        if (p.startsWith('http') || p.startsWith('/') || p.startsWith('src/')) return p;
        return 'src/' + p;
    }
    function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

    if (crop) {
        infoDiv.innerHTML = `
            <h2>${crop.name}</h2>
            <img src="${resolvePath(crop.image)}" alt="${crop.name}" style="max-width:300px; border-radius:10px; margin:10px 0;">
            <p><strong>Best Planting Season:</strong> ${crop.season}</p>
            <p><strong>Recommended Fertilizer:</strong> ${crop.fertilizer}</p>
            <h3>Steps to Plant:</h3>
            <ol>${crop.steps.map(step => `<li>${step}</li>`).join('')}</ol>
            <h3>Harvesting Process:</h3>
            <ol>${crop.harvesting.map(step => `<li>${step}</li>`).join('')}</ol>
            <h3>Watch Video:</h3>
            <iframe width="320" height="180" src="${crop.video}" frameborder="0" allowfullscreen></iframe>
          
        `;
        infoDiv.classList.add('expanded');
    }
    else {
       
        const safe = escapeHtml(query || '');
        infoDiv.innerHTML = `
            <div class="not-found">
                <p>Sorry — we don't have information for "<strong>${safe}</strong>".</p>
                <p class="muted">Try another name, check spelling, or use common names (for example, try "maize" instead of "corn").</p>
            </div>
        `;
        infoDiv.classList.remove('expanded');
       
        const input = document.getElementById('crop-search');
        if (input) {
            input.focus();
            // small visual cue: briefly pulse border
            input.animate([{ boxShadow: '0 0 0 0 rgba(31,182,145,0.0)' }, { boxShadow: '0 0 0 6px rgba(31,182,145,0.12)' }, { boxShadow: '0 0 0 0 rgba(31,182,145,0.0)' }], { duration: 520 });
        }
    }
});



emailjs.send("service_n2hkkbo","template_9m8eg99",{
});


(function() {
 
    const bgImages = document.createElement('div');
    bgImages.id = 'bg-images';
    document.body.appendChild(bgImages);


    const images = [
        'apple.jpeg',
        'mango.jpeg',
        'banana.jpeg',
        'maize.jpeg',
        'tomato.jpeg',
        'cocoa.jpeg'
    ];

 
    function rand(min, max) { return Math.random() * (max - min) + min; }

    images.forEach((name, i) => {
        const img = document.createElement('img');
        img.src = resolvePath(`data/img/${name}`);
        img.className = 'bg-layer ' + (Math.random() > 0.5 ? 'up' : 'down');

     
        const left = Math.round(rand(3, 78));
        img.style.left = left + '%';
        img.style.width = Math.round(rand(16, 30)) + '%';
        img.style.opacity = (rand(0.06, 0.16)).toFixed(2);

       
        const dur = Math.round(rand(30, 80));
        img.style.animationDuration = dur + 's';
        img.style.animationDelay = Math.round(rand(-dur, 0)) + 's';

        bgImages.appendChild(img);
    });

    
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.style.display = 'block';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    let dpr = window.devicePixelRatio || 1;
    function resize() {
        dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const pointer = { x: -9999, y: -9999 };
  
    const smoothPos = { x: pointer.x, y: pointer.y };
    let inside = false;
    let spotlightAlpha = 0; 

    function onMove(e) {
        const rect = document.documentElement.getBoundingClientRect();
        const x = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
        const y = (e.touches && e.touches[0]) ? e.touches[0].clientY : e.clientY;
        pointer.x = Math.max(0, Math.min(window.innerWidth, x - rect.left));
        pointer.y = Math.max(0, Math.min(window.innerHeight, y - rect.top));
        inside = true;
    }

    function onLeave() {
        inside = false;
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchstart', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchend', onLeave);


    function render() {
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;


        ctx.clearRect(0, 0, canvas.width, canvas.height);

    
        const dx = pointer.x - smoothPos.x;
        const dy = pointer.y - smoothPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // lerp factor: larger distance -> slightly faster follow
        const baseLerp = 0.14; // main responsiveness
        const lerp = Math.min(0.35, baseLerp + Math.min(0.25, dist / 800));
        smoothPos.x += dx * lerp;
        smoothPos.y += dy * lerp;

        // ease spotlight alpha (fade in/out when entering/leaving)
        const targetAlpha = inside ? 1 : 0;
        spotlightAlpha += (targetAlpha - spotlightAlpha) * 0.08;

        // skip drawing if invisible (saves CPU)
        if (spotlightAlpha < 0.01) {
            requestAnimationFrame(render);
            return;
        }

        // radius scales with viewport size for pleasant effect
        const base = Math.min(w, h);
        const radius = Math.max(120, base * 0.22);

        // create a radial gradient (center bright whitish-green, fades to transparent)
        const gx = smoothPos.x;
        const gy = smoothPos.y;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);

        // helper to build rgba string with multiplied alpha
        function rgba(r, g, b, a) { return `rgba(${r}, ${g}, ${b}, ${a * spotlightAlpha})`; }

        grad.addColorStop(0, rgba(250, 255, 248, 0.98)); // almost-white with green tint
        grad.addColorStop(0.18, rgba(240, 255, 240, 0.9));
        grad.addColorStop(0.45, rgba(220, 250, 220, 0.6));
        grad.addColorStop(1, rgba(160, 235, 160, 0.0));

        // use a blending mode to let the spotlight softly add to the animated background
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
})();

// --------------------
// Small UI micro-interactions: dark-mode toggle + button ripple
// --------------------
(function(){
    // Dark mode: toggles body.dark and persists choice
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        const apply = (dark)=>{
            document.documentElement.classList.toggle('dark', !!dark);
            // update icon
            toggle.textContent = dark ? '☀️' : '🌙';
        };

        // load pref
        const stored = localStorage.getItem('prefers-dark');
        if (stored !== null) {
            apply(stored === '1');
        } else {
            // prefer-system
            const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            apply(prefers);
        }

        toggle.addEventListener('click', ()=>{
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('prefers-dark', isDark ? '1' : '0');
            toggle.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // Ripple effect for buttons (delegated)
    document.addEventListener('click', function(e){
        const el = e.target.closest('button');
        if (!el) return;
        // create ripple element
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height) * 1.4;
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        el.appendChild(ripple);
        // remove after animation
        ripple.addEventListener('animationend', ()=> ripple.remove());
        // safety remove in 1s
        setTimeout(()=> ripple.remove(), 1200);
    }, {passive:true});

})();
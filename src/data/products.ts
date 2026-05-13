export interface Product {
  id: string;
  name: string;
  category: "Field Crops" | "Vegetable Crops" | "Bio Products";
  subcategory: string;
  image: string;
  images?: string[];
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    "id": "paddy-1",
    "name": "Paddy (OP / Improved / Basmati / Hybrid)",
    "category": "Field Crops",
    "subcategory": "Paddy",
    "image": "/FIELD CROPS/Paddy.jpg",
    "images": [
      "/FIELD CROPS/Paddy.jpg"
    ],
    "description": "High-yielding paddy varieties with strong adaptability, offering consistent performance across diverse growing conditions.",
    "features": [
      "Good grain quality",
      "Uniform crop growth",
      "Adaptable to different regions"
    ]
  },
  {
    "id": "hybrid-2",
    "name": "Hybrid Maize",
    "category": "Field Crops",
    "subcategory": "Hybrid Maize",
    "image": "/FIELD CROPS/Maize.jpeg",
    "images": [
      "/FIELD CROPS/Maize.jpeg"
    ],
    "description": "High-performance hybrid maize developed for better yield, uniform cob formation, and strong plant growth.",
    "features": [
      "High productivity",
      "Uniform cob size",
      "Strong plant structure"
    ]
  },
  {
    "id": "hybrid-3",
    "name": "Hybrid Bajara",
    "category": "Field Crops",
    "subcategory": "Hybrid Bajara",
    "image": "/FIELD CROPS/bajra.jpg",
    "images": [
      "/FIELD CROPS/bajra.jpg"
    ],
    "description": "Drought-tolerant bajara hybrid suitable for low rainfall areas with stable yield performance.",
    "features": [
      "Drought resistant",
      "Stable yield",
      "Suitable for poor soils"
    ]
  },
  {
    "id": "hybrid-4",
    "name": "Hybrid Grain Jowar",
    "category": "Field Crops",
    "subcategory": "Hybrid Grain Jowar",
    "image": "/FIELD CROPS/jowar.jpg",
    "images": [
      "/FIELD CROPS/jowar.jpg"
    ],
    "description": "Hybrid jowar designed for reliable grain production with strong plant growth and adaptability.",
    "features": [
      "Good yield",
      "Strong plants",
      "Adaptable crop"
    ]
  },
  {
    "id": "ssg-5",
    "name": "S.S.G (Red & White)",
    "category": "Field Crops",
    "subcategory": "S.S.G",
    "image": "/row-crops.png",
    "images": [
      "/row-crops.png"
    ],
    "description": "Fast-growing sorghum sudan grass ideal for high-quality fodder production throughout the season.",
    "features": [
      "High biomass",
      "Quick regrowth",
      "Suitable for fodder"
    ]
  },
  {
    "id": "fodder-6",
    "name": "Fodder Grass",
    "category": "Field Crops",
    "subcategory": "Fodder Grass",
    "image": "/FIELD CROPS/Fodder grass.jpeg",
    "images": [
      "/FIELD CROPS/Fodder grass.jpeg"
    ],
    "description": "High-yield fodder grass varieties providing nutritious and consistent feed for livestock.",
    "features": [
      "High green yield",
      "Easy to grow",
      "Multiple cuttings"
    ]
  },
  {
    "id": "fodder-7",
    "name": "Fodder Maize",
    "category": "Field Crops",
    "subcategory": "Fodder Maize",
    "image": "/FIELD CROPS/Fodder maize.jpeg",
    "images": [
      "/FIELD CROPS/Fodder maize.jpeg",
      "/FIELD CROPS/Maize.jpeg"
    ],
    "description": "Specially developed maize variety for fodder use with high biomass and digestibility.",
    "features": [
      "High biomass",
      "Good digestibility",
      "Fast growth"
    ]
  },
  {
    "id": "wheat-8",
    "name": "Wheat (OP / Improved)",
    "category": "Field Crops",
    "subcategory": "Wheat",
    "image": "/FIELD CROPS/Wheat.jpg",
    "images": [
      "/FIELD CROPS/Wheat.jpg"
    ],
    "description": "Improved wheat varieties offering stable yield, good grain quality, and adaptability to different regions.",
    "features": [
      "Good yield",
      "Quality grains",
      "Suitable for rabi season"
    ]
  },
  {
    "id": "mustard-9",
    "name": "Mustard (Hybrid / Improved)",
    "category": "Field Crops",
    "subcategory": "Mustard",
    "image": "/FIELD CROPS/Mustard.jpg",
    "images": [
      "/FIELD CROPS/Mustard.jpg"
    ],
    "description": "High-yield mustard varieties with good oil content and strong resistance to common conditions.",
    "features": [
      "High oil content",
      "Disease tolerance",
      "Suitable for rabi"
    ]
  },
  {
    "id": "gram-10",
    "name": "Gram",
    "category": "Field Crops",
    "subcategory": "Gram",
    "image": "/FIELD CROPS/Gram.webp",
    "images": [
      "/FIELD CROPS/Gram.webp"
    ],
    "description": "Adaptable gram crop suitable for dryland farming with reliable yield performance.",
    "features": [
      "Good productivity",
      "Easy cultivation",
      "Adaptable crop"
    ]
  },
  {
    "id": "soybean-11",
    "name": "Soybean",
    "category": "Field Crops",
    "subcategory": "Soybean",
    "image": "/FIELD CROPS/Soybean.webp",
    "images": [
      "/FIELD CROPS/Soybean.webp"
    ],
    "description": "High-protein soybean crop with strong yield potential and wide adaptability.",
    "features": [
      "High protein content",
      "Good yield",
      "Widely adaptable"
    ]
  },
  {
    "id": "pea-12",
    "name": "Pea (OP / Improved)",
    "category": "Field Crops",
    "subcategory": "Pea",
    "image": "/FIELD CROPS/Peas.jpeg",
    "images": [
      "/FIELD CROPS/Peas.jpeg"
    ],
    "description": "Cool-season pea varieties offering good pod quality and consistent production.",
    "features": [
      "Uniform pods",
      "Easy to grow",
      "Consistent yield"
    ]
  },
  {
    "id": "improved-13",
    "name": "Improved Moong",
    "category": "Field Crops",
    "subcategory": "Improved Moong",
    "image": "/FIELD CROPS/moong.jpeg",
    "images": [
      "/FIELD CROPS/moong.jpeg"
    ],
    "description": "Short-duration moong variety with quick maturity and good yield potential.",
    "features": [
      "Early maturity",
      "Good yield",
      "Disease tolerance"
    ]
  },
  {
    "id": "improved-14",
    "name": "Improved Urad",
    "category": "Field Crops",
    "subcategory": "Improved Urad",
    "image": "/FIELD CROPS/urad.jpeg",
    "images": [
      "/FIELD CROPS/urad.jpeg"
    ],
    "description": "Improved urad crop with stable performance and adaptability across different regions.",
    "features": [
      "Good adaptability",
      "Easy cultivation",
      "Consistent yield"
    ]
  },
  {
    "id": "improved-15",
    "name": "Improved Arhar",
    "category": "Field Crops",
    "subcategory": "Improved Arhar",
    "image": "/FIELD CROPS/arhar.jpg",
    "images": [
      "/FIELD CROPS/arhar.jpg"
    ],
    "description": "Drought-tolerant arhar variety suitable for long-duration cultivation in rainfed areas.",
    "features": [
      "Drought tolerant",
      "Strong plants",
      "Good yield"
    ]
  },
  {
    "id": "improved-16",
    "name": "Improved Til",
    "category": "Field Crops",
    "subcategory": "Improved Til",
    "image": "/FIELD CROPS/til.webp",
    "images": [
      "/FIELD CROPS/til.webp"
    ],
    "description": "High oil-content sesame variety suitable for dry and low rainfall conditions.",
    "features": [
      "High oil content",
      "Drought resistant",
      "Stable yield"
    ]
  },
  {
    "id": "improved-17",
    "name": "Improved Jae",
    "category": "Field Crops",
    "subcategory": "Improved Jae",
    "image": "/FIELD CROPS/jae.jpg",
    "images": [
      "/FIELD CROPS/jae.jpg"
    ],
    "description": "Improved crop variety developed for better adaptability and consistent field performance.",
    "features": [
      "Consistent growth",
      "Easy to cultivate",
      "Stable yield"
    ]
  },
  {
    "id": "improved-18",
    "name": "Improved Barseem",
    "category": "Field Crops",
    "subcategory": "Improved Barseem",
    "image": "/FIELD CROPS/barseem.jpeg",
    "images": [
      "/FIELD CROPS/barseem.jpeg"
    ],
    "description": "High-yield barseem variety ideal for green fodder with multiple harvests.",
    "features": [
      "Nutritious feed",
      "Multiple cuttings",
      "Fast growth"
    ]
  },
  {
    "id": "okra-19",
    "name": "Okra (Hybrid & Improved)",
    "category": "Vegetable Crops",
    "subcategory": "Okra",
    "image": "/Vegetable-crop/Okra (Hybrid & Improved).webp",
    "images": [
      "/Vegetable-crop/Okra (Hybrid & Improved).webp"
    ],
    "description": "High-yield okra varieties producing tender pods with consistent quality and growth.",
    "features": [
      "Tender pods",
      "Uniform growth",
      "Good yield"
    ]
  },
  {
    "id": "hybrid-20",
    "name": "Hybrid Tomato",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Tomato",
    "image": "/Vegetable-crop/Hybrid Tomato.webp",
    "images": [
      "/Vegetable-crop/Hybrid Tomato.webp"
    ],
    "description": "High-yielding hybrid tomato with uniform fruits, good firmness, and strong market demand.",
    "features": [
      "Good shelf life",
      "Uniform size",
      "High productivity"
    ]
  },
  {
    "id": "hybrid-21",
    "name": "Hybrid Bitter Gourd",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Bitter Gourd",
    "image": "/Vegetable-crop/Hybrid Bitter Gourd.jpeg",
    "images": [
      "/Vegetable-crop/Hybrid Bitter Gourd.jpeg"
    ],
    "description": "Hybrid bitter gourd with consistent fruit quality and strong vine growth.",
    "features": [
      "Uniform fruits",
      "Good yield",
      "Strong vines"
    ]
  },
  {
    "id": "hybrid-22",
    "name": "Hybrid Bottle Gourd",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Bottle Gourd",
    "image": "/Vegetable-crop/bottle gourd.jpeg",
    "images": [
      "/Vegetable-crop/bottle gourd.jpeg"
    ],
    "description": "Fast-growing bottle gourd variety with uniform fruit shape and reliable yield.",
    "features": [
      "Uniform fruits",
      "Fast growth",
      "Good size"
    ]
  },
  {
    "id": "hybrid-23",
    "name": "Hybrid Sponge Gourd",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Sponge Gourd",
    "image": "/Vegetable-crop/Hybrid Sponge Gourd.jpg",
    "images": [
      "/Vegetable-crop/Hybrid Sponge Gourd.jpg"
    ],
    "description": "High-yield sponge gourd variety producing tender fruits suitable for regular harvesting.",
    "features": [
      "Tender fruits",
      "Good productivity",
      "Uniform growth"
    ]
  },
  {
    "id": "hybrid-24",
    "name": "Hybrid Ridge Gourd",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Ridge Gourd",
    "image": "/Vegetable-crop/Hybrid Ridge Gourd.webp",
    "images": [
      "/Vegetable-crop/Hybrid Ridge Gourd.webp"
    ],
    "description": "Ridge gourd variety known for strong vines and consistent fruit production.",
    "features": [
      "Uniform fruits",
      "Strong vines",
      "Good quality"
    ]
  },
  {
    "id": "hybrid-25",
    "name": "Hybrid Pumpkin",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Pumpkin",
    "image": "/Vegetable-crop/Hybrid Pumpkin.webp",
    "images": [
      "/Vegetable-crop/Hybrid Pumpkin.webp"
    ],
    "description": "Pumpkin variety producing large, uniform fruits with strong plant growth.",
    "features": [
      "Big fruits",
      "Good yield",
      "Strong growth"
    ]
  },
  {
    "id": "hybrid-26",
    "name": "Hybrid Chilli",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Chilli",
    "image": "/Vegetable-crop/Hybrid Chilli.jpg",
    "images": [
      "/Vegetable-crop/Hybrid Chilli.jpg"
    ],
    "description": "High-yield chilli variety with uniform fruits and good pungency.",
    "features": [
      "High productivity",
      "Uniform fruits",
      "Good pungency"
    ]
  },
  {
    "id": "hybrid-27",
    "name": "Hybrid Brinjal",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Brinjal",
    "image": "/Vegetable-crop/Hybrid Brinjal.webp",
    "images": [
      "/Vegetable-crop/Hybrid Brinjal.webp"
    ],
    "description": "Brinjal variety producing glossy, uniform fruits with strong plant structure.",
    "features": [
      "Glossy fruits",
      "Good yield",
      "Strong plants"
    ]
  },
  {
    "id": "hybrid-28",
    "name": "Hybrid Watermelon",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Watermelon",
    "image": "/Vegetable-crop/Hybrid Watermelon.webp",
    "images": [
      "/Vegetable-crop/Hybrid Watermelon.webp"
    ],
    "description": "Watermelon variety with sweet taste, uniform fruit size, and good market appeal.",
    "features": [
      "Sweet taste",
      "Uniform size",
      "Good yield"
    ]
  },
  {
    "id": "hybrid-29",
    "name": "Hybrid Muskmelon",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Muskmelon",
    "image": "/Vegetable-crop/Hybrid Muskmelon.webp",
    "images": [
      "/Vegetable-crop/Hybrid Muskmelon.webp"
    ],
    "description": "Muskmelon variety with excellent aroma, sweetness, and uniform fruit development.",
    "features": [
      "Uniform fruits",
      "High yield",
      "Good quality"
    ]
  },
  {
    "id": "hybrid-30",
    "name": "Hybrid Cucumber",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Cucumber",
    "image": "/Vegetable-crop/Hybrid Cucumber.jpeg",
    "images": [
      "/Vegetable-crop/Hybrid Cucumber.jpeg"
    ],
    "description": "Fast-growing cucumber variety producing crisp and uniform fruits.",
    "features": [
      "Fast growth",
      "Uniform size",
      "High productivity"
    ]
  },
  {
    "id": "hybrid-31",
    "name": "Hybrid Capsicum",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Capsicum",
    "image": "/Vegetable-crop/Hybrid Capsicum.webp",
    "images": [
      "/Vegetable-crop/Hybrid Capsicum.webp"
    ],
    "description": "Capsicum variety with thick, colorful fruits suitable for commercial cultivation.",
    "features": [
      "Uniform shape",
      "Good yield",
      "Attractive color"
    ]
  },
  {
    "id": "hybrid-32",
    "name": "Hybrid Cauliflower",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Cauliflower",
    "image": "/Vegetable-crop/Hybrid Cauliflower.jpg",
    "images": [
      "/Vegetable-crop/Hybrid Cauliflower.jpg"
    ],
    "description": "Cauliflower variety producing compact, uniform curds with good size.",
    "features": [
      "Good size",
      "Uniform growth",
      "High yield"
    ]
  },
  {
    "id": "hybrid-33",
    "name": "Hybrid Carrot",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Carrot",
    "image": "/Vegetable-crop/Hybrid Carrot.webp",
    "images": [
      "/Vegetable-crop/Hybrid Carrot.webp"
    ],
    "description": "Carrot variety with smooth, uniform roots and attractive color.",
    "features": [
      "Good color",
      "Uniform size",
      "High yield"
    ]
  },
  {
    "id": "hybrid-34",
    "name": "Hybrid Radish",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Radish",
    "image": "/Vegetable-crop/Hybrid Radish.webp",
    "images": [
      "/Vegetable-crop/Hybrid Radish.webp"
    ],
    "description": "Fast-growing radish variety with smooth roots and good taste.",
    "features": [
      "Early maturity",
      "Uniform roots",
      "Good quality"
    ]
  },
  {
    "id": "hybrid-35",
    "name": "Hybrid Sweet Corn",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Sweet Corn",
    "image": "/Vegetable-crop/Hybrid Sweet Corn.jpg",
    "images": [
      "/Vegetable-crop/Hybrid Sweet Corn.jpg"
    ],
    "description": "Sweet corn variety with tender, sweet kernels and uniform cob formation.",
    "features": [
      "Sweet taste",
      "Uniform cobs",
      "Good yield"
    ]
  },
  {
    "id": "hybrid-36",
    "name": "Hybrid Baby Corn",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Baby Corn",
    "image": "/Vegetable-crop/Hybrid Baby Corn.jpg",
    "images": [
      "/Vegetable-crop/Hybrid Baby Corn.jpg"
    ],
    "description": "Early maturing baby corn variety producing tender and uniform cobs.",
    "features": [
      "Tender cobs",
      "Fast growth",
      "High productivity"
    ]
  },
  {
    "id": "hybrid-37",
    "name": "Hybrid Beans",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Beans",
    "image": "/Vegetable-crop/Hybrid Beans.webp",
    "images": [
      "/Vegetable-crop/Hybrid Beans.webp"
    ],
    "description": "Beans variety producing tender pods with consistent yield and growth.",
    "features": [
      "Tender pods",
      "Good yield",
      "Uniform growth"
    ]
  },
  {
    "id": "hybrid-38",
    "name": "Hybrid Broccoli",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Broccoli",
    "image": "/Vegetable-crop/Hybrid Broccoli.webp",
    "images": [
      "/Vegetable-crop/Hybrid Broccoli.webp"
    ],
    "description": "Broccoli variety with compact green heads and uniform growth.",
    "features": [
      "Good quality",
      "Uniform growth",
      "High yield"
    ]
  },
  {
    "id": "hybrid-39",
    "name": "Hybrid Turnip",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Turnip",
    "image": "/Vegetable-crop/Hybrid Turnip.jpeg",
    "images": [
      "/Vegetable-crop/Hybrid Turnip.jpeg"
    ],
    "description": "Turnip variety producing smooth and uniform roots with fast growth.",
    "features": [
      "Fast growth",
      "Good yield",
      "Uniform size"
    ]
  },
  {
    "id": "hybrid-40",
    "name": "Hybrid Beetroot",
    "category": "Vegetable Crops",
    "subcategory": "Hybrid Beetroot",
    "image": "/Vegetable-crop/Hybrid Beetroot.webp",
    "images": [
      "/Vegetable-crop/Hybrid Beetroot.webp"
    ],
    "description": "Beetroot variety with deep color and uniform root development.",
    "features": [
      "Good color",
      "Uniform roots",
      "High yield"
    ]
  },
  {
    "id": "improved-41",
    "name": "Improved Methi",
    "category": "Vegetable Crops",
    "subcategory": "Improved Methi",
    "image": "/Vegetable-crop/Improved Methi.jpg",
    "images": [
      "/Vegetable-crop/Improved Methi.jpg"
    ],
    "description": "Fast-growing methi variety with good leaf quality and yield.",
    "features": [
      "Fast growth",
      "Good leaves",
      "Easy cultivation"
    ]
  },
  {
    "id": "improved-42",
    "name": "Improved Coriander",
    "category": "Vegetable Crops",
    "subcategory": "Improved Coriander",
    "image": "/Vegetable-crop/Coriander.webp",
    "images": [
      "/Vegetable-crop/Coriander.webp"
    ],
    "description": "Coriander variety suitable for both leaf and seed production with good aroma.",
    "features": [
      "Good aroma",
      "Fast growth",
      "High yield"
    ]
  },
  {
    "id": "improved-43",
    "name": "Improved Onion",
    "category": "Vegetable Crops",
    "subcategory": "Improved Onion",
    "image": "/Vegetable-crop/Onion.jpg",
    "images": [
      "/Vegetable-crop/Onion.jpg"
    ],
    "description": "Onion variety producing uniform bulbs with good storage quality.",
    "features": [
      "Uniform bulbs",
      "Good storage",
      "High yield"
    ]
  },
  {
    "id": "improved-44",
    "name": "Improved Spinach",
    "category": "Vegetable Crops",
    "subcategory": "Improved Spinach",
    "image": "/Vegetable-crop/Spinach.webp",
    "images": [
      "/Vegetable-crop/Spinach.webp"
    ],
    "description": "Spinach variety with fast leaf growth and good nutritional value.",
    "features": [
      "Fast growth",
      "Good leaf quality",
      "Easy cultivation"
    ]
  },
  {
    "id": "improved-45",
    "name": "Improved Chaulai",
    "category": "Vegetable Crops",
    "subcategory": "Improved Chaulai",
    "image": "/Vegetable-crop/Chaulaee.jpg",
    "images": [
      "/Vegetable-crop/Chaulaee.jpg"
    ],
    "description": "Chaulai variety suitable for leafy vegetable production with quick growth.",
    "features": [
      "Quick growth",
      "Nutritious leaves",
      "Good yield"
    ]
  },
  {
    "id": "zyme-46",
    "name": "Parth Zyme",
    "category": "Bio Products",
    "subcategory": "Zyme",
    "image": "/Bio/ParthZyme.jpeg",
    "images": [
      "/Bio/ParthZyme.jpeg"
    ],
    "description": "Bio-based growth enhancer that supports plant development and improves crop performance.",
    "features": [
      "Enhances growth",
      "Improves yield",
      "Easy to apply"
    ]
  },
  {
    "id": "miticide-47",
    "name": "Miticide",
    "category": "Bio Products",
    "subcategory": "Miticide",
    "image": "/Bio/Miticyde.jpeg",
    "images": [
      "/Bio/Miticyde.jpeg"
    ],
    "description": "Effective solution for controlling mites and protecting crops from damage.",
    "features": [
      "Effective control",
      "Easy application",
      "Crop protection"
    ]
  },
  {
    "id": "plant-48",
    "name": "Plant Promoter",
    "category": "Bio Products",
    "subcategory": "Plant Promoter",
    "image": "/Bio/PlantPromoter.jpeg",
    "images": [
      "/Bio/PlantPromoter.jpeg"
    ],
    "description": "Special formulation designed to boost plant growth and overall development.",
    "features": [
      "Boosts growth",
      "Improves strength",
      "Better yield"
    ]
  },
  {
    "id": "plant-49",
    "name": "Plant Tonic",
    "category": "Bio Products",
    "subcategory": "Plant Tonic",
    "image": "/Bio/PlantTonic.jpeg",
    "images": [
      "/Bio/PlantTonic.jpeg"
    ],
    "description": "General plant tonic that improves vitality and supports healthy crop growth.",
    "features": [
      "Improves vitality",
      "Supports growth",
      "Easy use"
    ]
  },
  {
    "id": "humic-50",
    "name": "Humic Acid",
    "category": "Bio Products",
    "subcategory": "Humic Acid",
    "image": "/Bio/HumicAcid.jpeg",
    "images": [
      "/Bio/HumicAcid.jpeg"
    ],
    "description": "Soil conditioner that enhances nutrient uptake and improves soil structure.",
    "features": [
      "Enhances soil health",
      "Improves absorption",
      "Better root growth"
    ]
  },
  {
    "id": "bio-51",
    "name": "Bio Fungicide",
    "category": "Bio Products",
    "subcategory": "Bio Fungicide",
    "image": "/Bio/FungiSide.jpeg",
    "images": [
      "/Bio/FungiSide.jpeg"
    ],
    "description": "Biological solution designed to control fungal diseases in crops.",
    "features": [
      "Controls diseases",
      "Safe for crops",
      "Eco-friendly"
    ]
  },
  {
    "id": "bio-52",
    "name": "Bio Pesticide",
    "category": "Bio Products",
    "subcategory": "Bio Pesticide",
    "image": "/Bio/PestiSide.jpeg",
    "images": [
      "/Bio/PestiSide.jpeg"
    ],
    "description": "Natural pest control product that helps protect crops safely.",
    "features": [
      "Reduces pests",
      "Safe to use",
      "Supports crop health"
    ]
  },
  {
    "id": "bio-53",
    "name": "Bio Fertilizer",
    "category": "Bio Products",
    "subcategory": "Bio Fertilizer",
    "image": "/Bio/Fertilizer.jpeg",
    "images": [
      "/Bio/Fertilizer.jpeg"
    ],
    "description": "Biological fertilizer that improves soil fertility and promotes plant growth.",
    "features": [
      "Improves fertility",
      "Enhances growth",
      "Sustainable use"
    ]
  }
];

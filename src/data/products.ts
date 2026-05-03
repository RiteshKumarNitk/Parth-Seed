export interface Product {
  id: string;
  name: string;
  category: "Row Crops" | "Vegetable Crops";
  subcategory: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "cotton-p1",
    name: "Parth Gold Cotton",
    category: "Row Crops",
    subcategory: "Cotton",
    image: "/row-crops.png",
    description: "High-yielding, pest-resistant cotton variety optimized for varied Indian climates.",
    features: ["High Fiber Quality", "Bollworm Resistance", "Drought Tolerant"]
  },
  {
    id: "castor-p2",
    name: "Parth Shakti Castor",
    category: "Row Crops",
    subcategory: "Castor",
    image: "/row-crops.png",
    description: "Superior castor seeds with high oil content and excellent wilt resistance.",
    features: ["45%+ Oil Content", "Early Maturity", "Uniform Growth"]
  },
  {
    id: "maize-p3",
    name: "Parth Hybrid Maize",
    category: "Row Crops",
    subcategory: "Maize",
    image: "/row-crops.png",
    description: "Premium maize hybrid offering high cob weight and disease resistance.",
    features: ["Drought Resilient", "Large Grain Size", "High Fodder Value"]
  },
  {
    id: "tomato-v1",
    name: "Ruby Red Tomato",
    category: "Vegetable Crops",
    subcategory: "Tomato",
    image: "/vegetables.png",
    description: "Firm, deep-red tomatoes with excellent shelf life and virus resistance.",
    features: ["Uniform Fruit Size", "High Transportability", "High Yield"]
  },
  {
    id: "chilli-v2",
    name: "Hot Sensation Chilli",
    category: "Vegetable Crops",
    subcategory: "Chilli",
    image: "/vegetables.png",
    description: "Pungent, high-yielding chilli variety perfect for fresh market and drying.",
    features: ["Intense Heat", "Disease Resistant", "Deep Green to Red"]
  },
  {
    id: "okra-v3",
    name: "Green Wonder Okra",
    category: "Vegetable Crops",
    subcategory: "Okra",
    image: "/vegetables.png",
    description: "Dark green, tender okra with high yield and YVMV resistance.",
    features: ["Slow Seed Maturity", "High Market Value", "Robust Plant"]
  }
];

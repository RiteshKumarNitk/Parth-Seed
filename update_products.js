const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src', 'data', 'products.ts');
let content = fs.readFileSync(productsFilePath, 'utf8');

const imageMapping = {
  "Okra (Hybrid & Improved)": "/Vegetable-crop/Okra (Hybrid & Improved).webp",
  "Hybrid Tomato": "/Vegetable-crop/Hybrid Tomato.webp",
  "Hybrid Bitter Gourd": "/Vegetable-crop/Hybrid Bitter Gourd.jpeg",
  "Hybrid Bottle Gourd": "/Vegetable-crop/bottle gourd.jpeg",
  "Hybrid Sponge Gourd": "/Vegetable-crop/Hybrid Sponge Gourd.jpg",
  "Hybrid Ridge Gourd": "/Vegetable-crop/Hybrid Ridge Gourd.webp",
  "Hybrid Pumpkin": "/Vegetable-crop/Hybrid Pumpkin.webp",
  "Hybrid Chilli": "/Vegetable-crop/Hybrid Chilli.jpg",
  "Hybrid Brinjal": "/Vegetable-crop/Hybrid Brinjal.webp",
  "Hybrid Watermelon": "/Vegetable-crop/Hybrid Watermelon.webp",
  "Hybrid Muskmelon": "/Vegetable-crop/Hybrid Muskmelon.webp",
  "Hybrid Cucumber": "/Vegetable-crop/Hybrid Cucumber.jpeg",
  "Hybrid Capsicum": "/Vegetable-crop/Hybrid Capsicum.webp",
  "Hybrid Cauliflower": "/Vegetable-crop/Hybrid Cauliflower.jpg",
  "Hybrid Carrot": "/Vegetable-crop/Hybrid Carrot.webp",
  "Hybrid Radish": "/Vegetable-crop/Hybrid Radish.webp",
  "Hybrid Sweet Corn": "/Vegetable-crop/Hybrid Sweet Corn.jpg",
  "Hybrid Baby Corn": "/Vegetable-crop/Hybrid Baby Corn.jpg",
  "Hybrid Beans": "/Vegetable-crop/Hybrid Beans.webp",
  "Hybrid Broccoli": "/Vegetable-crop/Hybrid Broccoli.webp",
  "Hybrid Turnip": "/Vegetable-crop/Hybrid Turnip.jpeg",
  "Hybrid Beetroot": "/Vegetable-crop/Hybrid Beetroot.webp",
  "Improved Methi": "/Vegetable-crop/Improved Methi.jpg",
  "Improved Coriander": "/Vegetable-crop/Coriander.webp",
  "Improved Onion": "/Vegetable-crop/Onion.jpg",
  "Improved Spinach": "/Vegetable-crop/Spinach.webp",
  "Improved Chaulai": "/Vegetable-crop/Chaulaee.jpg"
};

// Regex to find the vegetable product blocks
// We will look for name and replace the image and images arrays
for (const [productName, imagePath] of Object.entries(imageMapping)) {
  const nameRegexStr = `"name":\\s*"${productName.replace(/([()&])/g, '\\$1')}",\\s*"category":\\s*"Vegetable Crops",\\s*"subcategory":\\s*"[^"]+",\\s*"image":\\s*"[^"]+",\\s*"images":\\s*\\[\\s*"[^"]+"\\s*\\]`;
  const nameRegex = new RegExp(nameRegexStr, 'g');
  
  content = content.replace(nameRegex, (match) => {
    return match.replace(/"image":\s*"[^"]+"/, `"image": "${imagePath}"`)
                .replace(/"images":\s*\[\s*"[^"]+"\s*\]/, `"images": [\n      "${imagePath}"\n    ]`);
  });
}

fs.writeFileSync(productsFilePath, content, 'utf8');
console.log('Done replacing images in products.ts');

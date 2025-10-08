import type { sunglassesProduct } from "./types";

export const products: sunglassesProduct[] = [
  {
    product_id: "SG001",
    product_name: "Aviator Legend",
    product_group: "Men",
    product_images: [
      "https://picsum.photos/id/1011/800/600",
      "https://picsum.photos/id/1012/800/600",
      "https://picsum.photos/id/1013/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 10, product_price: 189.0 },
      { size: "medium", available_quantity: 24, product_price: 199.0 },
      { size: "large", available_quantity: 15, product_price: 209.0 },
      { size: "extra large", available_quantity: 8, product_price: 219.0 },
    ],
    product_information:
      "Classic aviator sunglasses made from lightweight metal alloy with polarized lenses for superior clarity and protection.",
    product_benefits: [
      "Polarized anti-glare lenses",
      "UV400 protection",
      "Adjustable silicone nose pads",
      "Lightweight yet durable frame",
    ],
  },
  {
    product_id: "SG002",
    product_name: "Coastline Round",
    product_group: "Unisex",
    product_images: [
      "https://picsum.photos/id/1025/800/600",
      "https://picsum.photos/id/1026/800/600",
      "https://picsum.photos/id/1027/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 12, product_price: 159.0 },
      { size: "medium", available_quantity: 22, product_price: 169.0 },
      { size: "large", available_quantity: 10, product_price: 179.0 },
    ],
    product_information:
      "Retro-inspired round sunglasses crafted with premium acetate frames and gradient-tinted lenses for a relaxed coastal vibe.",
    product_benefits: [
      "Scratch-resistant coating",
      "100% UVA/UVB protection",
      "Hand-polished acetate frame",
      "Comfortable ergonomic fit",
    ],
  },
  {
    product_id: "SG003",
    product_name: "Horizon Trail",
    product_group: "Men",
    product_images: [
      "https://picsum.photos/id/1031/800/600",
      "https://picsum.photos/id/1032/800/600",
      "https://picsum.photos/id/1033/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 8, product_price: 179.0 },
      { size: "medium", available_quantity: 20, product_price: 189.0 },
      { size: "large", available_quantity: 14, product_price: 199.0 },
      { size: "extra large", available_quantity: 5, product_price: 209.0 },
    ],
    product_information:
      "Sporty wraparound sunglasses engineered for performance and comfort. Designed for running, cycling, and outdoor adventures.",
    product_benefits: [
      "Polarized lenses reduce glare",
      "Shatter-resistant frame",
      "Non-slip rubberized arms",
      "Enhanced peripheral vision coverage",
    ],
  },
  {
    product_id: "SG004",
    product_name: "Eclipse Cat-Eye",
    product_group: "Women",
    product_images: [
      "https://picsum.photos/id/1041/800/600",
      "https://picsum.photos/id/1042/800/600",
      "https://picsum.photos/id/1043/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 9, product_price: 189.0 },
      { size: "medium", available_quantity: 19, product_price: 199.0 },
      { size: "large", available_quantity: 11, product_price: 209.0 },
    ],
    product_information:
      "Elegant cat-eye sunglasses with a modern glossy finish and soft gradient lenses — perfect for chic, everyday wear.",
    product_benefits: [
      "UV400 protection",
      "Stylish modern cat-eye frame",
      "Lightweight acetate construction",
      "Comfort nose bridge design",
    ],
  },
  {
    product_id: "SG005",
    product_name: "Urban Drift",
    product_group: "Unisex",
    product_images: [
      "https://picsum.photos/id/1051/800/600",
      "https://picsum.photos/id/1052/800/600",
      "https://picsum.photos/id/1053/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 16, product_price: 149.0 },
      { size: "medium", available_quantity: 28, product_price: 159.0 },
      { size: "large", available_quantity: 18, product_price: 169.0 },
      { size: "extra large", available_quantity: 7, product_price: 179.0 },
    ],
    product_information:
      "A modern interpretation of the classic wayfarer style. Matte finish with durable hinges and crystal-clear lenses.",
    product_benefits: [
      "UV400 protection",
      "Matte anti-fingerprint frame",
      "Reinforced metal hinges",
      "All-day comfort design",
    ],
  },
  {
    product_id: "SG006",
    product_name: "Laguna Breeze",
    product_group: "Women",
    product_images: [
      "https://picsum.photos/id/1061/800/600",
      "https://picsum.photos/id/1062/800/600",
      "https://picsum.photos/id/1063/800/600",
    ],
    product_sizes: [
      { size: "small", available_quantity: 10, product_price: 169.0 },
      { size: "medium", available_quantity: 21, product_price: 179.0 },
      { size: "large", available_quantity: 13, product_price: 189.0 },
      { size: "extra large", available_quantity: 9, product_price: 199.0 },
    ],
    product_information:
      "Trendy oversized sunglasses with pastel frames and polarized lenses — perfect for sunny beach days and casual outings.",
    product_benefits: [
      "Polarized lenses reduce glare",
      "100% UV protection",
      "Lightweight composite frame",
      "Pastel fashion colors available",
    ],
  },
];

export type navigationLink = { label: string; group: string; href: string };

export type productSizes = "small" | "medium" | "large" | "extra large";

export type productSize = {
  size: productSizes;
  available_quantity: number;
  product_price: number;
};

export type sunglassesProduct = {
  product_id: string;
  product_name: string;
  product_group: string;
  product_images: string[];
  product_sizes: productSize[];
  product_information: string;
  product_benefits: string[];
};

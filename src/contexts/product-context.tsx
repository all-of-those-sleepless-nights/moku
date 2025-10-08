import { createContext, useContext, useState, type ReactNode } from "react";
import type { productSizes, sunglassesProduct } from "../constants/types";

type productContext = {
  products: sunglassesProduct[];
  setProducts: (product: sunglassesProduct[]) => void;
  removeProduct: (
    product_id: string,
    size: productSizes,
    product_quantity: number
  ) => void;
};

const ProductContext = createContext<productContext | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<sunglassesProduct[]>([]);

  const removeProduct = (
    product_id: string,
    size: productSizes,
    product_quantity: number
  ) => {
    console.log(product_id + size + product_quantity);
  };

  return (
    <ProductContext.Provider value={{ products, removeProduct, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

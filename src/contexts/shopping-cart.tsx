import { createContext, useContext, useState } from "react";
import type { cartItem, productSizes } from "../constants/types";

type cartContext = {
  cartItems: cartItem[];
  setCartItems: (cartItem: cartItem[]) => void;
  removeCartItems: (
    product_id: string,
    size: productSizes,
    product_quantity: number
  ) => void;
};

const CartContext = createContext<cartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const removeCartItems = (
    product_id: string,
    size: productSizes,
    product_quantity: number
  ) => {
    console.log(product_id + size + product_quantity);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCarts = ()=>{
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
      }
      return context;
}
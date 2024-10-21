import { createContext } from "react";

export const CartContext = createContext()
export const CartProvider = CartContext.Provider

export const logedContext = createContext();
export const LogedProvider = logedContext.Provider
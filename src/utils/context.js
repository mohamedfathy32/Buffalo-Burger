import { createContext } from "react";

export const CartContext = createContext()
export const CartProvider = CartContext.Provider

export const LoggedContext = createContext();
export const LoggedProvider = LoggedContext.Provider

export const DataContext = createContext();
export const DataProvider = DataContext.Provider
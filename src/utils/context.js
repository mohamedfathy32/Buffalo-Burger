import { createContext } from "react";

export const CartCounterContext = createContext()
export const CartCounterProvider = CartCounterContext.Provider

export const LogedContext = createContext();
export const LogedProvider = LogedContext.Provider

export const ProductsContext = createContext();
export const ProductsProvider = ProductsContext.Provider
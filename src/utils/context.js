import { createContext } from "react";

export const CartCounterContext = createContext()
export const CartCounterProvider = CartCounterContext.Provider

export const LoggedContext = createContext();
export const LoggedProvider = LoggedContext.Provider

export const ProductsContext = createContext();
export const ProductsProvider = ProductsContext.Provider

export const HistoryContext = createContext();
export const HistoryProvider = HistoryContext.Provider
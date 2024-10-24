import { createContext } from "react";

export const CounterContext = createContext()
export const CounterProvider = CounterContext.Provider

export const LogedContext = createContext();
export const LogedProvider = LogedContext.Provider

export const ProductsListContext = createContext();
export const ProductsListProvider = ProductsListContext.Provider
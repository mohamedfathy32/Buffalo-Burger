import { createContext } from "react";

export const Counter = createContext()
export const CounterProvider = Counter.Provider

export const LogedContext = createContext();
export const LogedProvider = LogedContext.Provider
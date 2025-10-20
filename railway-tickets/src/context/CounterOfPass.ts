import { createContext, useContext } from "react";

export interface CounterType {
  valueCounter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

export const CounterContext = createContext<CounterType | undefined>(
  undefined!
);

export const useCounter = (): CounterType => {
  const counter = useContext(CounterContext);
  if (counter === undefined) {
    throw new Error("useCounter должен использоваться внутри CounterProvider");
  }
  return counter;
};

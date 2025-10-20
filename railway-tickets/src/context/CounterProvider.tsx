import { useMemo, useState, type ReactNode } from "react";
import { CounterContext, type CounterType } from "./CounterOfPass";

interface CounterProviderProps {
  children: ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const [valueCounter, setValueCounter] = useState<number>(0);

  const increaseCounter = () => {
    setValueCounter(valueCounter + 1);
  };

  const decreaseCounter = () => {
    setValueCounter(valueCounter - 1);
  };

  const counterValue: CounterType = useMemo(
    () => ({ valueCounter, increaseCounter, decreaseCounter }),
    [valueCounter]
  );
  return <CounterContext value={counterValue}>{children}</CounterContext>;
}

export default CounterProvider;

// CountdownContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CycleProps } from "../types";

interface CountdownContextType {
  cycles: CycleProps[];
  activeCycleId: number | undefined;
  time: number;
  setCycles: (value: React.SetStateAction<CycleProps[]>) => void;
  setActiveCycleId: (value: React.SetStateAction<number | undefined>) => void;
  setTime: (value: React.SetStateAction<number>) => void;
}

const CountdownContext = createContext({} as CountdownContextType);

export const CountdownProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, setCycles] = useState<CycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<number | undefined>();
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (activeCycleId) {
      const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
      if (activeCycle) {
        setTime(activeCycle.duration * 60); // Initialize the timer with the selected duration in seconds
      }
    }
  }, [activeCycleId, cycles]);

  return (
    <CountdownContext.Provider
      value={{
        cycles,
        activeCycleId,
        time,
        setCycles,
        setActiveCycleId,
        setTime,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdown = () => {
  const context = useContext(CountdownContext);
  if (context === undefined) {
    throw new Error("useCountdown must be used within a CountdownProvider");
  }
  return context;
};

// CountdownContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { z } from "zod";
import { differenceInSeconds } from "date-fns";
import { CycleProps } from "../types";
import { timerFormSchema } from "../zodSchemas";

interface CountdownContextType {
  cycles: CycleProps[];
  activeCycleId: number | undefined;
  time: number;
  setCycles: (value: React.SetStateAction<CycleProps[]>) => void;
  addCycle: (values: z.infer<typeof timerFormSchema>) => void;
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

  useEffect(() => {
    if (!activeCycleId) return;

    const interval = setInterval(() => {
      const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
      if (activeCycle) {
        const secondsDiff = differenceInSeconds(new Date(), activeCycle.createDate);

        if (secondsDiff >= activeCycle.duration * 60) {
          setTime(0);
          clearInterval(interval);
          setActiveCycleId(undefined);
          setCycles((prev) =>
            prev.map((cycle) =>
              cycle.id === activeCycleId ? { ...cycle, status: { id: 2, value: "Concluído" } } : cycle
            )
          );
        } else {
          setTime(activeCycle.duration * 60 - secondsDiff);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCycleId, cycles]);

  const addCycle = (values: z.infer<typeof timerFormSchema>) => {
    const newCycleId = new Date().getTime();
    const newCycle: CycleProps = {
      createDate: new Date(),
      duration: values.timeAmount,
      id: newCycleId,
      name: values.name,
      status: { id: 1, value: "Em andamento" },
    };

    setCycles((prev) => [newCycle, ...prev]);
    setActiveCycleId(newCycleId);
  };

  return (
    <CountdownContext.Provider value={{ cycles, activeCycleId, time, addCycle, setCycles, setActiveCycleId, setTime }}>
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

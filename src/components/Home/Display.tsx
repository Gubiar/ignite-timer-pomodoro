import { useEffect } from "react";
import { useCountdown } from "../../context/CountdownContext";
import Digito from "./Digito";
import { differenceInSeconds } from "date-fns";

export default function Display() {
  const { time, activeCycleId, cycles, setTime, setActiveCycleId, setCycles } =
    useCountdown();

  useEffect(() => {
    if (!activeCycleId) return;

    const interval = setInterval(() => {
      const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
      if (activeCycle) {
        const secondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.createDate,
        );

        if (secondsDiff >= activeCycle.duration * 60) {
          setTime(0);
          clearInterval(interval);
          setActiveCycleId(undefined);
          setCycles((prev) =>
            prev.map((cycle) =>
              cycle.id === activeCycleId
                ? { ...cycle, status: { id: 2, value: "Concluído" } }
                : cycle,
            ),
          );
        } else {
          setTime(activeCycle.duration * 60 - secondsDiff);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCycleId, cycles, setActiveCycleId, setCycles, setTime]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (time > 0) {
    document.title = `${minutes}:${seconds}`;
  } else {
    document.title = "Ignite Pomodoro - Rockeatseat";
  }

  return (
    <div className="flex items-center justify-center gap-6 font-rubik max-sm:flex-col max-sm:gap-4">
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(minutes / 10)} />
        <Digito value={minutes % 10} />
      </div>
      <span className="text-9xl font-bold text-green-500 max-[965px]:text-4xl max-sm:hidden">
        :
      </span>
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(seconds / 10)} />
        <Digito value={seconds % 10} />
      </div>
    </div>
  );
}

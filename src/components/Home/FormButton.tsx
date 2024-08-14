import { useCountdown } from "../../context/CountdownContext";
import Start from "../icons/Menu";
import Stop from "../icons/Stop";

export default function FormButton() {
  const { activeCycleId, setCycles, setActiveCycleId, setTime } =
    useCountdown();

  const stopCycle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, status: { id: 3, value: "Interrompido" } }
          : cycle,
      ),
    );
    setActiveCycleId(undefined);
    setTime(0);
  };

  return (
    <button
      type={activeCycleId ? "button" : "submit"}
      onClick={activeCycleId ? stopCycle : undefined}
      className={`${activeCycleId ? "bg-red-500 focus:shadow-none" : "bg-green-500"} disable flex h-16 w-full items-center justify-center gap-4 rounded-lg text-lg font-bold text-white transition-all duration-300 ease-in-out hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:brightness-100 max-sm:h-14 max-sm:text-base`}
    >
      {activeCycleId ? (
        <>
          <Stop /> Parar
        </>
      ) : (
        <>
          <Start /> Começar
        </>
      )}
    </button>
  );
}

import { useCountdown } from "../../context/CountdownContext";
import Start from "../icons/Menu";
import Stop from "../icons/Stop";

export default function FormButton() {
  const { activeCycleId, setCycles, setActiveCycleId, setTime } = useCountdown();

  const stopCycle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCycles((prev) =>
      prev.map((cycle) => (cycle.id === activeCycleId ? { ...cycle, status: { id: 3, value: "Interrompido" } } : cycle))
    );
    setActiveCycleId(undefined);
    setTime(0);
  };

  return (
    <button
      type={activeCycleId ? "button" : "submit"}
      onClick={activeCycleId ? stopCycle : undefined}
      className={`${activeCycleId ? "bg-red-500 focus:shadow-none" : "bg-green-500"} disabled:hover:brightness-100 disable disabled:opacity-70 disabled:cursor-not-allowed w-full h-16 flex items-center justify-center gap-4 rounded-lg text-white text-lg font-bold hover:brightness-125 transition-all ease-in-out duration-300`}
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

import ItemHistory from "../components/History/ItemHistory";
import { useCountdown } from "../context/CountdownContext";

export default function HistoryPage() {
  const { cycles } = useCountdown();

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <h1 className="text-3xl font-bold text-white">Meu Histórico</h1>
      <div className="flex h-full max-h-[calc(100dvh-300px)] w-full flex-col">
        <header className="grid grid-cols-6 gap-2 rounded-t-lg bg-gray-600 p-4">
          <span className="col-span-3">Tarefa</span>
          <span className="col-start-4">Duração</span>
          <span className="col-start-5">Início</span>
          <span className="col-start-6">Status</span>
        </header>
        <ul className="relative mt-2 flex h-full min-h-full flex-col gap-2 overflow-y-scroll focus:shadow-none">
          {cycles.map((item) => (
            <ItemHistory key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import ItemHistory from "../components/History/ItemHistory";
import { useCountdown } from "../context/CountdownContext";

export default function HistoryPage() {
  const { cycles } = useCountdown();

  return (
    <div className="h-full w-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-white">Meu Histórico</h1>
      <div className="flex w-full h-full max-h-[calc(100dvh-300px)] flex-col">
        <header className="bg-gray-600 grid grid-cols-6 gap-2 p-4 rounded-t-lg">
          <span className="col-span-3">Tarefa</span>
          <span className="col-start-4">Duração</span>
          <span className="col-start-5">Início</span>
          <span className="col-start-6">Status</span>
        </header>
        <ul className="h-full min-h-full overflow-y-scroll relative mt-2 flex flex-col gap-2 focus:shadow-none">
          {cycles.map((item) => (
            <ItemHistory key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import ItemHistory from "../components/ItemHistory";
import { ItemProps } from "../types";

export default function HistoryPage() {
  // Fake items list
  const fakeItems: ItemProps[] = [
    {
      id: 1,
      name: "Task 1",
      duration: 30,
      createDate: new Date("2024-08-09T08:00:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 2,
      name: "Task 2",
      duration: 45,
      createDate: new Date("2024-08-09T09:30:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 3,
      name: "Task 3",
      duration: 20,
      createDate: new Date("2024-08-09T10:15:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 4,
      name: "Task 4",
      duration: 60,
      createDate: new Date("2024-08-09T11:00:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 5,
      name: "Task 5",
      duration: 35,
      createDate: new Date("2024-08-09T12:15:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 6,
      name: "Task 6",
      duration: 50,
      createDate: new Date("2024-08-09T13:30:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 7,
      name: "Task 7",
      duration: 25,
      createDate: new Date("2024-08-09T14:45:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 8,
      name: "Task 8",
      duration: 55,
      createDate: new Date("2024-08-09T15:00:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 9,
      name: "Task 9",
      duration: 40,
      createDate: new Date("2024-08-09T16:30:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 10,
      name: "Task 10",
      duration: 65,
      createDate: new Date("2024-08-09T17:15:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 11,
      name: "Task 11",
      duration: 30,
      createDate: new Date("2024-08-09T18:00:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 12,
      name: "Task 12",
      duration: 70,
      createDate: new Date("2024-08-09T19:15:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 13,
      name: "Task 13",
      duration: 45,
      createDate: new Date("2024-08-09T20:00:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 14,
      name: "Task 14",
      duration: 50,
      createDate: new Date("2024-08-09T21:30:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 15,
      name: "Task 15",
      duration: 25,
      createDate: new Date("2024-08-09T22:15:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 16,
      name: "Task 16",
      duration: 60,
      createDate: new Date("2024-08-09T23:00:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 17,
      name: "Task 17",
      duration: 35,
      createDate: new Date("2024-08-10T00:30:00"),
      status: { id: 2, value: "Concluído" },
    },
    {
      id: 18,
      name: "Task 18",
      duration: 55,
      createDate: new Date("2024-08-10T01:15:00"),
      status: { id: 3, value: "Interrompido" },
    },
    {
      id: 19,
      name: "Task 19",
      duration: 40,
      createDate: new Date("2024-08-10T02:00:00"),
      status: { id: 1, value: "Em andamento" },
    },
    {
      id: 20,
      name: "Task 20",
      duration: 65,
      createDate: new Date("2024-08-10T03:30:00"),
      status: { id: 2, value: "Concluído" },
    },
  ];

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
          {fakeItems.map((item) => (
            <ItemHistory key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

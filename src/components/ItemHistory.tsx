import { ItemProps } from "../types";

interface ItemHistoryProps {
  item: ItemProps;
}

export default function ItemHistory({ item }: ItemHistoryProps) {
  const statusColors = {
    1: "bg-yellow-500",
    2: "bg-green-500",
    3: "bg-red-500",
  } as const;

  return (
    <li className="bg-gray-800 grid grid-cols-6 gap-2 p-4">
      <span className="col-span-3">{item.name}</span>
      <span className="col-start-4">{item.duration} minutos</span>
      <span className="col-start-5">{item.createDate.getTimezoneOffset()}</span>
      <span className="col-start-6 flex gap-2 items-center">
        <div className={`w-3 max-w-3 min-w-3 h-3 max-h-3 min-h-3 rounded-full ${statusColors[item.status.id]}`}></div>
        {item.status.value}
      </span>
    </li>
  );
}

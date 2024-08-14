import { CycleProps } from "../../types";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ItemHistoryProps {
  item: CycleProps;
}

export default function ItemHistory({ item }: ItemHistoryProps) {
  const statusColors = {
    1: "bg-yellow-500",
    2: "bg-green-500",
    3: "bg-red-500",
  } as const;

  const formattedDate = formatDistanceToNow(new Date(item.createDate), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <li className="grid grid-cols-6 gap-2 bg-gray-800 p-4">
      <span className="col-span-3">{item.name}</span>
      <span className="col-start-4">{item.duration} minutos</span>
      <span className="col-start-5">{formattedDate}</span>
      <span className="col-start-6 flex items-center gap-2">
        <div
          className={`h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3 rounded-full ${statusColors[item.status.id]}`}
        ></div>
        {item.status.value}
      </span>
    </li>
  );
}

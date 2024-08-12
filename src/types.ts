export interface CycleProps {
  id: number;
  name: string;
  duration: number;
  createDate: Date;
  status: Status;
}

type Status = { id: 1; value: "Em andamento" } | { id: 2; value: "Concluído" } | { id: 3; value: "Interrompido" };

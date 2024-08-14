import { z } from "zod";

export const timerFormSchema = z.object({
  name: z.string().min(1, "O nome da tarefa é obrigatório"),
  timeAmount: z.coerce
    .number()
    .min(1, "O tempo mínimo é de 1 minuto")
    .max(60, "O tempo máximo é de 60 minutos"),
});

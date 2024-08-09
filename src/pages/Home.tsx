import Digito from "../components/Digito";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Start from "../components/icons/Menu";
import Stop from "../components/icons/Stop";
import Plus from "../components/icons/Plus";
import Minus from "../components/icons/Minus";

const timerFormSchema = z.object({
  name: z.string().min(1, "O nome da tarefa é obrigatório"),
  timeAmount: z.coerce.number().min(5, "O tempo mínimo é de 5 minutos").max(60, "O tempo máximo é de 60 minutos"),
});

export default function HomePage() {
  const isRunning = false;
  const handleDecrement = () => {};
  const handleIncrement = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof timerFormSchema>>({
    resolver: zodResolver(timerFormSchema),
  });

  function onSubmit(values: z.infer<typeof timerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-100 h-100 justify-center gap-16 m-auto">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 text-white text-lg flex-wrap">
          <label htmlFor="name">Vou trabalhar em</label>
          <input
            id="name"
            className="hidden-arrow flex-1 pl-4 bg-transparent focus:rounded-md p-2 transition-all ease-in-out duration-300 focus:border-b-transparent border-b-solid border-b-2 border-b-gray-300 text-gray-300 w-fit min-w-64"
            type="text"
            list="task-suggestions"
            placeholder="Dê um nome para a tarefa"
            {...register("name", { required: true })}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="time">durante</label>
          <div className="px-2 flex border-b-solid border-2 transition-all ease-in-out duration-300 border-transparent border-b-gray-300 has-[*:focus]:border-2 has-[*:focus]:border-green-500 has-[*:focus]:rounded-md">
            <button
              type="button"
              className="group focus:shadow-none w-4 items-center justify-center"
              onClick={handleDecrement}
            >
              <Minus />
            </button>
            <input
              className="flex items-center justify-center bg-transparent focus:shadow-none transition-all ease-in-out duration-300 p-2 text-gray-300 w-10 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]"
              type="number"
              id="time"
              placeholder="00"
              min={5}
              max={60}
              {...register("timeAmount", { required: true })}
              aria-label="Tempo em minutos"
            />
            <button
              type="button"
              className="group focus:shadow-none flex items-center justify-center w-4"
              onClick={handleIncrement}
            >
              <Plus />
            </button>
          </div>
          <p>minutos</p>
        </div>
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        {errors.timeAmount && <span className="text-red-500">{errors.timeAmount.message}</span>}
      </div>

      <div className="flex items-center justify-center font-rubik gap-6">
        <Digito value={0} />
        <Digito value={0} />
        <span className="font-bold text-9xl text-green-500">:</span>
        <Digito value={0} />
        <Digito value={0} />
      </div>
      <button
        type="submit"
        className={`${isRunning ? "bg-red-500 focus:shadow-none" : "bg-green-500"} disabled:hover:brightness-100 disable disabled:opacity-70 disabled:cursor-not-allowed w-full h-16 flex items-center justify-center gap-4 rounded-lg text-white text-lg font-bold hover:brightness-125 transition-all ease-in-out duration-300`}
      >
        {isRunning ? (
          <>
            <Stop /> Parar
          </>
        ) : (
          <>
            <Start /> Começar
          </>
        )}
      </button>
    </form>
  );
}

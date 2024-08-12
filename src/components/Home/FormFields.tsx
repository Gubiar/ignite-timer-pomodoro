import { useFormContext } from "react-hook-form";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

export default function FormFiels() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleDecrement = () => {};
  const handleIncrement = () => {};

  return (
    <div className="flex flex-col relative">
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
            min={1}
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
      <div
        className={`${errors.name || errors.timeAmount ? "flex" : "hidden"} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200%] shadow-lg bg-gray-700 p-4  flex-col text-center items-center justify-center rounded-lg font-bold text-lg`}
      >
        {errors.name && <span className="text-red-500">{errors?.name?.message?.toString()}</span>}
        {errors.timeAmount && <span className="text-red-500">{errors?.timeAmount?.message?.toString()}</span>}
      </div>
    </div>
  );
}

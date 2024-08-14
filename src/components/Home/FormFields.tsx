import { useFormContext } from "react-hook-form";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

export default function FormFiels() {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleDecrement = () => {
    const currentValue = getValues("timeAmount") || 0;
    setValue("timeAmount", Math.max(0, currentValue - 5));
  };

  const handleIncrement = () => {
    const currentValue = getValues("timeAmount") || 0;
    setValue("timeAmount", Math.min(60, currentValue + 5));
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-wrap items-center gap-4 text-lg text-white max-sm:text-sm">
        <label htmlFor="name">Vou trabalhar em</label>
        <input
          id="name"
          className="hidden-arrow border-b-solid w-fit min-w-64 flex-1 border-b-2 border-b-gray-300 bg-transparent p-2 pl-4 text-gray-300 transition-all duration-300 ease-in-out focus:rounded-md focus:border-b-transparent"
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
        <div className="border-b-solid flex border-2 border-transparent border-b-gray-300 px-2 transition-all duration-300 ease-in-out has-[*:focus]:rounded-md has-[*:focus]:border-2 has-[*:focus]:border-green-500">
          <button
            type="button"
            className="group w-4 items-center justify-center focus:shadow-none"
            onClick={handleDecrement}
          >
            <Minus />
          </button>
          <input
            className="[&::-moz-appearance:textfield] flex w-10 appearance-none items-center justify-center bg-transparent p-2 text-gray-300 transition-all duration-300 ease-in-out focus:shadow-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
            className="group flex w-4 items-center justify-center focus:shadow-none"
            onClick={handleIncrement}
          >
            <Plus />
          </button>
        </div>
        <p>minutos</p>
      </div>
      <div
        className={`${errors.name || errors.timeAmount ? "flex" : "hidden"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[200%] transform flex-col items-center justify-center rounded-lg bg-gray-700 p-4 text-center text-lg font-bold shadow-lg`}
      >
        {errors.name && (
          <span className="text-red-500">
            {errors?.name?.message?.toString()}
          </span>
        )}
        {errors.timeAmount && (
          <span className="text-red-500">
            {errors?.timeAmount?.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
}

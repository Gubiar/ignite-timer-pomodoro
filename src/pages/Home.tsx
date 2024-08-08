import { useState } from "react";
import Digito from "../components/Digito";

export default function HomePage() {
  const [time, setTime] = useState(5);
  const [name, setName] = useState("");

  const handleIncrement = () => setTime((prev) => (prev < 60 ? prev + 5 : 60));
  const handleDecrement = () => setTime((prev) => (prev > 5 ? prev - 5 : 0));

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 90) {
      setTime(value);
    }
  };

  function Minus() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -12 32 32">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g
            className="fill-gray-300 transition-all ease-in-out duration-300 group-hover:fill-green-500"
            transform="translate(-414 -1049)"
          >
            <path d="M442 1049h-24a4 4 0 100 8h24a4 4 0 100-8"></path>
          </g>
        </g>
      </svg>
    );
  }

  function Plus() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g
            className="fill-gray-300 transition-all ease-in-out duration-300 group-hover:fill-green-500"
            transform="translate(-362 -1037)"
          >
            <path d="M390 1049h-8v-8a4 4 0 10-8 0v8h-8a4 4 0 100 8h8v8a4 4 0 108 0v-8h8a4 4 0 100-8"></path>
          </g>
        </g>
      </svg>
    );
  }

  function Start() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" fill="none" viewBox="0 0 21 24">
        <path
          className="fill-white"
          fillRule="evenodd"
          d="M1.433.234a1.797 1.797 0 011.838.04h.002l16.346 10.15c.268.163.49.392.644.667a1.857 1.857 0 010 1.818 1.821 1.821 0 01-.644.666L3.273 23.725l-.002.001a1.798 1.798 0 01-2.52-.636 1.868 1.868 0 01-.251-.934V1.844c0-.328.087-.65.251-.934.164-.283.4-.516.682-.676zM19.15 11.215l-.469.779.006-.004a.011.011 0 00-.004.004.011.011 0 00-.001.006l.001.006a.011.011 0 00.004.004l.463-.795zm-.479.785L2.318 1.846v20.308l.003-.002L18.671 12z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  function Stop() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="none" viewBox="0 0 18 25">
        <path
          className="fill-white"
          fillRule="evenodd"
          d="M11.046 3.474c-.326 0-.638.13-.868.363-.23.233-.36.549-.36.878A.823.823 0 019 5.543a.823.823 0 01-.818-.828c0-.768.302-1.505.839-2.048a2.847 2.847 0 012.024-.849c.76 0 1.488.306 2.025.849.537.543.84 1.28.84 2.048v6.207a.823.823 0 01-.819.827.823.823 0 01-.818-.827V4.715c0-.33-.13-.645-.36-.878a1.22 1.22 0 00-.867-.363z"
          clipRule="evenodd"
        ></path>
        <path
          className="fill-white"
          fillRule="evenodd"
          d="M6.954 1.818c-.325 0-.637.131-.867.364-.23.233-.36.549-.36.878v3.31a.823.823 0 01-.818.828.823.823 0 01-.818-.828V3.06c0-.768.302-1.505.839-2.048A2.847 2.847 0 016.954.163c.76 0 1.488.305 2.025.849.537.543.84 1.28.84 2.048v7.034a.823.823 0 01-.82.828.823.823 0 01-.817-.828V3.06c0-.33-.13-.645-.36-.878a1.22 1.22 0 00-.868-.364z"
          clipRule="evenodd"
        ></path>
        <path
          className="fill-white"
          fillRule="evenodd"
          d="M2.864 5.129c-.326 0-.638.13-.868.363-.23.233-.36.549-.36.878v8.69c0 1.975.776 3.87 2.157 5.266A7.321 7.321 0 009 22.508a7.321 7.321 0 005.207-2.182 7.492 7.492 0 002.157-5.266v-4.138c0-.33-.13-.645-.36-.878a1.22 1.22 0 00-1.735 0c-.23.233-.36.549-.36.878v2.069a.823.823 0 01-.818.827c-.868 0-1.7.35-2.314.97a3.33 3.33 0 00-.959 2.34.823.823 0 01-.818.828.823.823 0 01-.818-.827c0-1.317.517-2.58 1.438-3.512a4.89 4.89 0 012.653-1.384v-1.311c0-.768.301-1.505.838-2.048a2.847 2.847 0 012.025-.849c.76 0 1.488.305 2.025.849.537.543.839 1.28.839 2.048v4.138c0 2.414-.948 4.73-2.636 6.437A8.949 8.949 0 019 24.163a8.948 8.948 0 01-6.364-2.666A9.157 9.157 0 010 15.06V6.37c0-.768.302-1.505.839-2.048a2.847 2.847 0 012.025-.848c.76 0 1.487.305 2.025.848.537.543.838 1.28.838 2.048v4.552a.823.823 0 01-.818.827.823.823 0 01-.818-.827V6.37c0-.33-.13-.645-.36-.878a1.22 1.22 0 00-.867-.363z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <form className="flex flex-col max-w-7xl justify-center m-auto h-full p-4 gap-16">
      <div className="flex items-center gap-4 text-white text-lg flex-wrap">
        <label htmlFor="name">Vou trabalhar em</label>
        <input
          value={name}
          id="name"
          name="name"
          className="hidden-arrow flex-1 pl-4 bg-transparent focus:rounded-md p-2 transition-all ease-in-out duration-300 focus:border-b-transparent border-b-solid border-b-2 border-b-gray-300 text-gray-300 w-fit min-w-64"
          type="text"
          list="task-suggestions"
          placeholder="Dê um nome para a tarefa"
          onChange={(e) => setName(e.target.value)}
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
            name="time"
            placeholder="00"
            min={5}
            max={60}
            value={time}
            onChange={handleTimeChange}
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
      <div className="flex items-center justify-center font-inter gap-6">
        <Digito value={0} />
        <Digito value={0} />
        <span className="font-bold text-9xl text-green-500">:</span>
        <Digito value={0} />
        <Digito value={0} />
      </div>
      <button
        type="submit"
        className={`disabled:hover:brightness-100 disable disabled:opacity-70 disabled:cursor-not-allowed w-full h-16 flex items-center justify-center gap-4 bg-green-500 rounded-lg text-white text-lg font-bold hover:brightness-125 transition-all ease-in-out duration-300`}
      >
        <Start />
        Começar
      </button>
    </form>
  );
}

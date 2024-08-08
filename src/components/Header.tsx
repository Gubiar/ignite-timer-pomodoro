import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    navigate("/");
  };

  const goToHistory = () => {
    navigate("/history");
  };

  function Relogio() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" fill="none" viewBox="0 0 23 26">
        <path
          className={`group-focus:fill-green-500 group-hover:fill-green-500 ${location.pathname === "/" ? "fill-green-500" : "fill-gray-300"}`}
          fillRule="evenodd"
          d="M7.702 1c0-.552.441-1 .986-1h5.462c.545 0 .986.448.986 1s-.441 1-.986 1H8.688a.993.993 0 01-.986-1zm3.717 4.692c-4.986 0-9.028 4.099-9.028 9.154C2.391 19.902 6.433 24 11.42 24c4.986 0 9.027-4.098 9.027-9.154 0-5.055-4.041-9.154-9.027-9.154zm-11 9.154c0-6.16 4.925-11.154 11-11.154s11 4.994 11 11.154S17.494 26 11.419 26s-11-4.994-11-11.154zM16.622 9.57a1.01 1.01 0 010 1.414l-4.506 4.57a.977.977 0 01-1.394 0 1.01 1.01 0 010-1.414l4.506-4.57a.977.977 0 011.394 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  function List() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" viewBox="0 0 24 22">
        <path
          className={`group-focus:fill-green-500 group-hover:fill-green-500 ${location.pathname === "/history" ? "fill-green-500" : "fill-gray-300"}`}
          fillRule="evenodd"
          d="M17.998 0c.451-.002.897.092 1.314.275.417.184.796.454 1.115.796.32.34.572.746.744 1.192.172.446.26.923.258 1.405v.002l-.858-.003h.857V16.5c0 .506-.383.916-.857.916-.473 0-.857-.41-.857-.916V3.663c.001-.24-.042-.48-.128-.702a1.836 1.836 0 00-.37-.594 1.7 1.7 0 00-.557-.397 1.608 1.608 0 00-.655-.137H3.43c-.474 0-.858-.41-.858-.916C2.572.41 2.956 0 3.43 0H18zm0 0h-.002L18 .917V0h-.002z"
          clipRule="evenodd"
        ></path>
        <path
          className={`group-focus:fill-green-500 group-hover:fill-green-500 ${location.pathname === "/history" ? "fill-green-500" : "fill-gray-300"}`}
          fillRule="evenodd"
          d="M9.428 8.253c0-.507.384-.917.857-.917h6.857c.473 0 .857.41.857.917 0 .506-.384.916-.857.916h-6.857c-.473 0-.857-.41-.857-.916zM9.428 11.92c0-.506.384-.916.857-.916h6.857c.473 0 .857.41.857.917 0 .506-.384.916-.857.916h-6.857c-.473 0-.857-.41-.857-.916z"
          clipRule="evenodd"
        ></path>
        <path
          className={`group-focus:fill-green-500 group-hover:fill-green-500 ${location.pathname === "/history" ? "fill-green-500" : "fill-gray-300"}`}
          fillRule="evenodd"
          d="M3.632 1.846a1.611 1.611 0 00-.815.108c-.26.106-.491.278-.675.5a1.88 1.88 0 00-.38.78c-.065.288-.064.59.003.878.068.288.2.554.385.776a.962.962 0 01-.068 1.294.819.819 0 01-1.21-.073 3.756 3.756 0 01-.77-1.552 3.914 3.914 0 01-.005-1.756 3.76 3.76 0 01.759-1.558c.367-.446.83-.79 1.35-1.002a3.223 3.223 0 011.63-.215c.551.07 1.078.284 1.536.62.458.337.832.788 1.09 1.314.26.526.394 1.11.395 1.705V18.33c0 .297.068.59.197.853.13.263.316.488.545.656a1.612 1.612 0 001.583.203c.26-.106.492-.278.675-.5.184-.224.314-.491.38-.78.065-.289.064-.59-.003-.878a1.88 1.88 0 00-.385-.776.966.966 0 01-.143-.985.856.856 0 01.783-.542h12c.243 0 .475.11.638.305.441.528.73 1.18.832 1.88a3.9 3.9 0 01-.258 2.062 3.61 3.61 0 01-1.266 1.58 3.269 3.269 0 01-1.865.59H8.571l-.057-.003a3.296 3.296 0 01-1.887-.646 3.598 3.598 0 01-1.09-1.313 3.872 3.872 0 01-.394-1.705V3.666c0-.297-.068-.59-.198-.853a1.8 1.8 0 00-.545-.656 1.649 1.649 0 00-.768-.31zm7.907 18.319h9.031c.331 0 .656-.102.933-.295.278-.192.498-.466.633-.79a1.95 1.95 0 00-.08-1.665H11.891l.006.025c.135.576.137 1.179.005 1.756-.077.341-.2.667-.363.969z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <header className="w-full h-14 flex items-center justify-between px-8 py-14">
      <img src={Logo} alt="Logo" />
      <div className="flex gap-4">
        <button
          onClick={goToHome}
          className="group p-4 rounded-lg flex items-center justify-center transition-all ease-in-out duration-300"
        >
          <Relogio />
        </button>
        <button
          onClick={goToHistory}
          className="group p-4 rounded-lg flex items-center justify-center transition-all ease-in-out duration-300"
        >
          <List />
        </button>
      </div>
    </header>
  );
}

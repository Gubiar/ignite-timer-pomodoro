import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <div className="flex flex-col max-w-7xl w-full m-auto h-full p-4">
        <Outlet />
      </div>
    </div>
  );
}

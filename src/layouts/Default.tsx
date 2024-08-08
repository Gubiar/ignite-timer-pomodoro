import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Header />
      <div className="m-auto flex h-full w-full max-w-7xl flex-col p-4">
        <Outlet />
      </div>
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import HistoryPage from "./pages/History";
import DefaultLayout from "./layouts/Default";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
}

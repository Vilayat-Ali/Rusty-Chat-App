// lib
import { type FC } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import GetStarted from "./pages/GetStarted";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
};

export default App;

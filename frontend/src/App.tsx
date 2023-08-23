// lib
import { type FC } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
};

export default App;

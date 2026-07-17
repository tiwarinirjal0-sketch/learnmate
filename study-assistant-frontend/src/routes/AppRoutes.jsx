import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import Flashcards from "../features/flashcards/pages/Flashcards";
// import Login from "./Login";
// import Dashboard from "./Dashbod";
// import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
  );
};

export default AppRoutes;
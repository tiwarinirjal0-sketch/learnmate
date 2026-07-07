import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Homepage";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
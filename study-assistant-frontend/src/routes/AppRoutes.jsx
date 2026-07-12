import { Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage";
import Quiz from "../features/quizzes/pages/Quiz";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* other routes */}
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default AppRoutes;
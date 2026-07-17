import { Routes, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import Quiz from "../features/quizzes/pages/Quiz";
import Flashcards from "../features/flashcards/pages/Flashcards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/flashcards" element={<Flashcards />} />
    </Routes>
  );
};

export default AppRoutes;
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import Quiz from "../features/quizzes/pages/Quiz";
import Flashcards from "../features/flashcards/pages/Flashcards";
import Summarize from "../features/summaries/pages/Summarize";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/summarizer" element={<Summarize />} />
    </Routes>
  );
};

export default AppRoutes;
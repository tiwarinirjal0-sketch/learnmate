import { Routes, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import Quiz from "../features/quizzes/pages/Quiz";
import Flashcards from "../features/flashcards/pages/Flashcards";
import Summarize from "../features/summaries/pages/Summarize";
import ProtectedRoutes from "./ProtectedRoute";
import Authentication from "../features/auth/pages/Auth";
import ChatHistory from "../features/history/pages/chatHistory";
import ChatSpecific from "../features/history/pages/chatspecific";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element = {<Authentication />} />
      <Route path="/quiz" element={
        <ProtectedRoutes>
          <Quiz />
        </ProtectedRoutes>
        } />
      <Route path="/flashcards" element={
        <ProtectedRoutes>
          <Flashcards />
        </ProtectedRoutes>
        } />
      <Route path="/summarizer" element={
        <ProtectedRoutes>
          <Summarize />
        </ProtectedRoutes>
        } />
        <Route path="/myChats" element={
        <ProtectedRoutes>
          <ChatHistory />
        </ProtectedRoutes>
        } />
        <Route path="/chatspecific" element={
        <ProtectedRoutes>
          <ChatSpecific />
        </ProtectedRoutes>
        } />
    </Routes>
  );
};

export default AppRoutes;
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
export default function App() {
  return (
    <AuthProvider>
     <ChatProvider>
      <BrowserRouter>
        <Nav />
        <AppRoutes />
      </BrowserRouter>
     </ChatProvider>
   </AuthProvider>
  );
}
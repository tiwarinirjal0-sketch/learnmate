import { BrowserRouter } from "react-router-dom";
import Nav from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Nav />
            <AppRoutes />
        </BrowserRouter>
    </AuthProvider>
  );
}
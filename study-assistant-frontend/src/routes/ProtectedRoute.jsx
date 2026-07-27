import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function ProtectedRoutes({children}){
    const {user, loading } = useAuth();

    if(loading)return <div>....Loading</div>
    if(!user)return <Navigate to="/auth" replace />
    

    
        return children
    
}
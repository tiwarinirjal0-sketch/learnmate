import { createContext, useContext, useState } from "react";

import { register as registerApi,login as loginApi} from "../features/auth/api/Register";
const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)

    const  register = async (userData) => {
        const data = await registerApi(userData);
        localStorage.setItem("token",data.token
        
        )
        setUser(data.user)
    }
    
    const login =async (userData) => {
        const data = await loginApi(userData);
        localStorage.setItem("token", data.token)

        setUser(data.user);
    }
    
    const logout = () =>{
        setUser(null)
    }

    const value = {
        user,
        register,
        login,
        logout,
        isAuthenticated: !!user,
    }
    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    
    if (!context) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }

    return context;
}
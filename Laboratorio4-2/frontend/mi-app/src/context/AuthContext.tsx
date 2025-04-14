import { createContext , useState ,useContext,ReactNode  } from "react";

interface AuthContextType {
    login:(token:string) =>void
    logout:() =>void
    isAuthenticated: boolean
    token : string | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({Children}: {Children:ReactNode}) => {
    const [token ,setToken] =useState<string | null>(localStorage.getItem('token'))
    const isAuthenticated =!!token
    const login = (token:string) => {
        setToken(token)
        localStorage.setItem('token',token)
    }
    const logout =() => {
        setToken(null)
        localStorage.removeItem('token')
    }
    return (
        <AuthContext.Provider value={{login,logout,isAuthenticated,token}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => useContext(AuthContext)
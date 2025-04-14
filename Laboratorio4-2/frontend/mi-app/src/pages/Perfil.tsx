import { useEffect ,useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const {token,logout} = useAuth()
    const [email ,setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:4000/perfil' , {
            headers:{Authorization: `Bearer ${token}`}
        }).then(res => {
            console.log('Respuesta del perfil',res.data)
            setEmail(res.data.email)
        })
    },[token]) 

    const handleLogout=() => {
        logout()
        navigate('/')
    }

    return (
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1>Bienvenido ,{email}</h1>
                <div className="text-center">
                    <button
                       onClick={handleLogout}
                       className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                      >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    )
}
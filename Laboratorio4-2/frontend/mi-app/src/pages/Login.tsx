import { useState } from "react";
import axios from 'axios';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault()
        try {
            const rest = await axios.post('http://localhost:4000/login' ,{email ,password})
            login(rest.data.token)
            navigate('/perfil')
         }catch {
            alert ('credenciales incorrectas')
         }
     }

     return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Email"
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                          id="password"
                          type="password"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Contraseña"
                          value={password}
                          onChange={e=>setPassword(e.target.value)}
                         />
                    </div>
                    <button
                       type="submit"
                       className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      >
                        Entrar
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    ¿No Tienes cuenta? <a href="/register" className="text-blue-600 hover:underline">Registrate Aqui</a>
                </p>
            </div>

        </div>
     )
}

         
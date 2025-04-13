//UseState : Para manejar el estado
//UseMemo : Para memorizar valores calculados
//useCallback:Para Memorizar funciones
import React , {useState,useMemo,useCallback} from "react";

const heavyFilter = (list:string[] ,query:string) =>{
    console.log('Filtrando...')
    return list.filter(item => item.toLowerCase().includes(query.toLowerCase()))
}

const ListasContador:React.FC = () =>{
    const [count,setCount] = useState(0) //contador numerico
    const [query, setQuery] = useState('') //texto que escriba el usario para filtrar
    const names =['Armando','Ana','Andrés','Beatriz','Bruno','Carla']

    const filterdNames=useMemo(()=>heavyFilter(names,query),[query])

    const handleIncrement = useCallback(()=> {
        setCount(prev => prev + 1)
    },[])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Optimizacion con useMemo & useCallback</h1>
            <input
                type="text"
                placeholder="Buscar Nombre..."
                value={query}
                onChange={(e) =>setQuery(e.target.value)}
                className="text-black p-2 rounded mb-4"
              />
              <ul className="bg-white bg-opacity-20 p-4 rounded-xl mb-6 w-full max-w-sm">
                {filterdNames.map((name,index)=>(
                    <li key={index} className="text-lg">{name}</li>
                ))}
              </ul>
              <button
                onClick={handleIncrement}
                className="bg-black bg-opacity-30 px-4 py-2 rounded hover:bg-opacity-50 transition"
               >
                Contador:{count} 
              </button>
        </div>
    )
}

export default ListasContador;
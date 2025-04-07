import React , {useState} from "react";

export default function Contador() {
    const [contador ,setContador] = useState(0);

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl">Contador: {contador}</h1>
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4"
              onClick={() => setContador(contador +1)}
                >
               Aumentar!
            </button>
        </div>
    )
}
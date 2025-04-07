import React ,{ useReducer} from "react";

//Definir  la funcion de reducer

const contadorReducer = (state:number,action:string) : number => {
    switch (action) {
        case "incrementar":
            return state + 1;
        case "decrementar":
            return state - 1;
        case "resetear":
            return 0
        default:
            return state            
    }
};
export default function ContadorReducer() {
    //Usar reducer
    const [contador,dispatch] = useReducer(contadorReducer,0);
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl">Contador usando Reducer</h1>
            <p className="text-xl my-4"> Valor: {contador}</p>
            <div className="flex justify-center gap-4">
                <button
                  onClick={()=>dispatch("incrementar")}
                  className="bg-green-600 px-4 py-2 rounded hover:bg-green-800 text-white"
                  >
                    Incrementar
                </button>
                <button
                  onClick={()=>dispatch("decrementar")}
                  className="bg-green-600 px-4 py-2 rounded hover:bg-green-800 text-white"
                  >
                    Decrementar
                </button>
                <button
                   onClick={()=>dispatch("resetear")}
                   className="bg-green-600 px-4 py-2 rounded hover:bg-green-800 text-white"
                  >
                    Resetear
                </button>
            </div>   
        </div>
    )
}
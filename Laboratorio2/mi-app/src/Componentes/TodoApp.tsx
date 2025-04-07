"use client";
import { useOptimistic , useState } from "react";

interface Task {
    id:number;
    text:string;
}

async function saveTaskToServer ( text:string) :Promise<Task> {
    await new Promise((res) => setTimeout(res,2000)); //Simular delay
    return {id:Date.now(),text};
}

export default function TodoApp() {
    const [text ,setText] = useState("");
    const [tasks , setTasks] = useState<Task[]>([]);

    const [optimisticTasks,addOptimisticTask] = useOptimistic (
        tasks,
        (currenTasks,newTask:Task) => [...currenTasks,newTask]
    );

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const newTask = {id:Date.now(),text};
        //Mostrando la tarea como si ya estuviera guardada
        addOptimisticTask(newTask);
        //Guardarla en el servidor
        try {
            const saved = await saveTaskToServer(text);
        //Actualizo el estado real con lo que me dewvuelve el servidor
            setTasks((prev)=>[...prev,saved]);
            
        } catch(error) {
            alert("No se guardo la tarea intentalo de nuevo ")
            //Opcional: quitar la tarea optimista o marcarla como fallida
            setTasks((prev) =>prev.filter(t=>t.id !==newTask.id))
        };

        setText("");
        
    };
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1>Lista de Tareas (Optimista)</h1>
            <form onSubmit={handleSubmit}>
                <input
                  className="text-black px-4 py-2 rounded w-full"
                  value={text}
                  onChange ={(e) => setText(e.target.value)}
                  placeholder="Escriba una tarea.."
                 />
                 <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-800">
                    Agregar
                 </button>
            </form>

            <ul>
                {optimisticTasks.map((tasks) =>(
                    <li key={tasks.id} className="bg-gray-700 px-4 py-2 rounded">
                        {tasks.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}


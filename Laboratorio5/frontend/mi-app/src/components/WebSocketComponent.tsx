import React, { useEffect, useState } from "react";

const WebSocketComponent = () => {
    const [message , setMessage] = useState('');
    const [socketMessage,setSocketMessage] = useState('')

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080')

        socket.onmessage=(event) => {
            setSocketMessage(event.data);
        };
        socket.onerror=(error) => {
            console.error("Websocket error" ,error);
        }
        return () => {
            socket.close();
        };
    } ,[]);
    const sendMessage =() => {
        const socket = new WebSocket("ws://localhost:8080")
        socket.onopen= () => {
            socket.send(message);
        };
    };
    return  (
        <div className="p-6 max-w-sm mx-auto">
            <h2 className="text-2xl mb-4">WebSocket en React 19</h2>
            <div className="bg-gray-200 p-4 mb-4 rounded">
                <h3 className="font-semibold">Mensaje del servidor</h3>
                <p>{socketMessage || 'Esperando Mensaje...'}</p>
            </div>
            <input
              type="text"
              className="block mb-4 p-2 border w-full"
              value={message}
              onChange={(e) =>setMessage(e.target.value)}
              placeholder="Escriba un mensaje"
              />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Enviar Mensaje
            </button>  
        </div>
    );
};
export default WebSocketComponent;


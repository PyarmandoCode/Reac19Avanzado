const WebSocket = require('ws')

const wss= new WebSocket.Server({port:8080})

wss.on('connection' ,(ws) => {
    console.log('Cliente Conectado');

    setInterval(()=> {
        ws.send('Soy el Servidor como estas')
    },3000);

    ws.on('message',(message) => {
        console.log('Mensaje recibido' , message.toString())
    });

    ws.on('close',() => {
        console.log('Cliente desconectado')
    });
});

console.log("Servidor WebSocket escuchando en http://localhost:8080")
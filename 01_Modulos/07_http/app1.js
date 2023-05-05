//modulo HTTP
const http = require('http');
const server = http.createServer();

//Desde eventEmitter herencia
//Cuando me coneccto al localhost:3000 
//evento registrado connection
server.on('connection',(puerto)=>{
    console.log('Nueva Conexion...');
})


//levanto el servidor
server.listen(3000)
console.log('servido escuchando en el puerto 3000...');
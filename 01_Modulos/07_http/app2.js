//modulo HTTP
const http = require('http');

//Cuando creo el server le envio un callback
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('Hola mundo desde el servidor')
        res.end();
    }

    if(req.url == '/api/productos'){
        res.write(JSON.stringify(['mouse','teclado','parlante']))
        res.end();
    }
});




//levanto el servidor
server.listen(3000)
console.log('servido escuchando en el puerto 3000...');



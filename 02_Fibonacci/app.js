//sudo npm install -g nodemon
//Nos permite ver en tiempo real
//nodemon app.js
const serie = require('./serie.js');


//leer valores node app --serie=1
let valor = process.argv[2];
valor =valor.split('=')[1];
//console.log(valor)


serie.crearSerie(valor)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))

serie.crerArchivo('prueba.txt','Esta es un prueba')


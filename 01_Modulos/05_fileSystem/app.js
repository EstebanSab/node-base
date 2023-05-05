const fs = require ('fs');

//Sincrona ,por ejemplo si tengo pocos archivos
const archivos = fs.readdirSync('./')
console.log(archivos)

//Asincrona
fs.readdir('./',(err,files)=>{
    if(err) console.log('error:',err)
    else console.log('resultado',files)
})



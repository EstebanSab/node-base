const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');


let crearSerie = (cant) =>{
    return new Promise((resolve,reject) =>{
        let a = 1
        let b = 1
        let serie = ''
        
        for(let i=2;i<cant;i++){
        serie+=' '+b
        b = a+b
        a = b -a
        }
        
        fs.writeFile('fibonacci.txt',serie,(err)=>{
            if(err) 
                reject('error al crear el archivo');
            else
                resolve('el archivo fue creado');
        })
        
        
    })} 
    
let crerArchivo = (nombre,texto) =>{
//Como escribir un archivo
    fs.writeFile(nombre,texto,(err)=>{
        if(err) throw err;
        console.log('el archivo fue creado')
    })

}
    
module.exports = {
    crearSerie,
    crerArchivo
}


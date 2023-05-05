require("./datos.js")
console.log(global.test)

global.test = 'Modificado'

console.log(global.test)
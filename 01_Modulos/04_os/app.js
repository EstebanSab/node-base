const os = require ('os');

var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();

console.log(memoriaLibre)
console.log(memoriaTotal)




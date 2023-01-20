//uso de modulo en JS

var path = require('path'); //este modulo controla toda la parte de archivos

let a = 5;
let b = 10;


console.log(`el resultado de la operacion es ${a==b}`);

//dirmname: nos da la ruta del archivo donde estamos trabajando
//es una variable global que existe en node
console.log(__dirname);
console.log(__filename); //nos da el nombre y la ruta del archivo

console.log(path.basename(__filename)); //basename nos da el nombre del archivo donde estamos trabajando
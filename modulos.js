//modulos son para extender funcionalidades de js

var path = require('path'); //modulo de url
var util = require('util'); //modulo de actividades especificas 

let nombre = "pedro";
let apellido = "perez";
let edad = 30;

let texto = util.format('Hola %s %s, tienes %d años', nombre, apellido, edad); //util.format nos permite formatear texto
console.log(texto);


console.log(path.join(__dirname, 'www', 'files', 'uploads')); //unimos directorios y archivos)


console.log(path.basename(__filename)); //obtiene el nombre del archivo


//estadisticas del sistema

var v8 = require('v8'); //modulo de v8

console.log(v8.getHeapStatistics()); //obtiene estadisticas del sistema

const eventEmitter = require('events').EventEmitter; //importamos y creamos un objeto de tipo EventEmitter

const util = require('util'); //importamos util

//clase de persona
var Persona = function(name){
    this.name = name;
}

//util.inherits: hereda de un objeto a otro
util.inherits(Persona, eventEmitter); //heredamos de eventEmitter a Persona


const nombre = 'Pedro XD';


//exportar el modulo 
//module.exports: exporta el modulo para poder ser usado en otro archivo
//Persona: es el objeto que se exporta
module.exports = Persona;
module.exports.nombre = nombre;
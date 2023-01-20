//eventos de JS
/* nos permite accionar codigo cuando ocurre un evento */

//EventEmitter: es un objeto que nos permite crear eventos y escucharlos

const eventEmitter = require('events').EventEmitter; //importamos y creamos un objeto de tipo EventEmitter

const util = require('util'); //importamos util

//clase de persona
var Persona = function(name){
    this.name = name;
}

//util.inherits: hereda de un objeto a otro
util.inherits(Persona, eventEmitter); //heredamos de eventEmitter a Persona

//instanciamos un objeto de tipo Persona
let persona = new Persona('Juan');

//mostramos el nombre de la persona
console.log(persona.name);

//creamos un evento apartir de la clase Persona

persona.on('hablar', function(mensaje){
    console.log(`${this.name} dice: ${mensaje}`);
});

persona.emit('hablar', 'Hola mundo');
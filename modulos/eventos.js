//requerimos el modulo de eventos que creamos
const persona = require('./persona');

//instanciamos un objeto de tipo Persona

let pablo = new persona('Pablo');

console.log(pablo.name);

pablo.on('hablar', function(mensaje){
    console.log(`${this.name} dice: ${mensaje}`);
});

pablo.emit('hablar', 'Hola mundo');

console.log(persona.nombre);
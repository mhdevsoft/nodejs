//modulo readline

var readline = require('readline');  
//readline es un modulo que nos permite leer la entrada de datos de la consola

//creamos la interfaz de entrada y salida
var rl = readline.createInterface(process.stdin, process.stdout);


//creamos un objeto
let obj = {
    nombre: null,
    comentarios: []
}

//creamos una pregunta con readline

rl.question("Ingresa tu usuario >", function(nombre){
    console.log(`¡Listo!`)
    obj.nombre = nombre;
  
    //setPrompt nos permite cambiar el prompt de la consola
    rl.setPrompt('Ingresa un comentario >');
    //ejecutamos el prompt
    rl.prompt();
});


//on nos permite escuchar eventos 

//line es el evento que se dispara cuando se presiona enter el cual leee el contenido de la linea
rl.on('line', function(line){


    if(line.trim() == 'salir'){
        console.log(obj);
        process.exit();
    }

    
    obj.comentarios.push(line.trim());  
    rl.setPrompt('Ingresa un comentario >');
    console.log(`Registramos tu comentario`)
    rl.prompt();


});
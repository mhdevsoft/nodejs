//imprimir y escribir en cosonla y en el archivo o servidor
//imprimir el proceso de node

//process.stdout.write(""); es un metodo que nos permite imprimir en la consola

/*
process.stdin.on('data', function(data){

data.toString().trim(); es un metodo que nos permite convertir lo que se escribe en la consola a string

}); 


-es un metodo que nos permite leer lo que se escribe en la consola
-data es un evento que se dispara cuando se escribe en la consola

-funcion que ejecuta cuando se obtiene la informacion
*/


//process.exit(); es un metodo que nos permite salir del proceso de node

let preguntas = [
    'Cuantos años tienes',
    'Cual es tu color favorito',
    'Que lenguaje de programacion te gusta mas'
];

let respuestas = [];

const pregunta = (i) => {
    process.stdout.write(preguntas[i] + ' > ');
}

//stdin: siempre se ejecutara y no interfiere en el flujo de la aplicacion

process.stdin.on('data', function(data){
     respuestas.push(data.toString().trim());

     if(preguntas.length != respuestas.length)
     {
        pregunta(respuestas.length);
     }
     else{

        process.stdout.write(`\n Respuestas:`);
        respuestas.forEach((respuesta, i) => {
            process.stdout.write(`\n${[i + 1]} ${respuesta} \n`);
        })  
        process.exit();
     }
})

//lanzamos la primera pregunta
pregunta(0);
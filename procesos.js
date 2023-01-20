//objetos globales de process el cual nos permite acceder a la informacion del sistema operativo
//JS Funciona de manera asincrona

console.log(process.argv); //nos da la informacion de los argumentos que se le pasan al proceso de node


const param = (p) =>
{
    var index = process.argv.indexOf(p); //nos da la posicion del argumento que le pasamos
    return process.argv[index + 1]; //nos da el valor del argumento que le pasamos
}

let nombre = param('--nombre'); //guardamos el valor del argumento que le pasamos
let edad = param('--edad'); //guardamos el valor del argumento que le pasamos

console.log(`Tu nombre es ${nombre} y tu edad es ${edad}`);  //imprimimos el valor del argumento que le pasamos
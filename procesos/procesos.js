/* 
Ejecutar procesos en JavaScript desde NodeJS
*/


//child_process: permite ejecutar procesos en el sistema operativo
//exec: ejecuta un comando en el sistema operativo
const {exec} = require('child_process');
const util = require('util');
//exec es una función que recibe dos parámetros (comando, callback)
//comando: comando que se va a ejecutar en el sistema operativo
//callback: función que se va a ejecutar cuando el comando se haya ejecutado
//err: error que se haya generado
//stdout: salida estándar del comando


 exec('sh'+' '+'./st.sh', (err, stdout)=>{
   if(err){
       console.log(err);
     }else{
         process.stdout.write("Run bash.sh \n");
        console.log(stdout);
         process.exit();
     }
 })



const exec1 = util.promisify(exec);

async function lsExample() {
  const { stdout, stderr } = await exec1('sh'+' '+'./bash.sh');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
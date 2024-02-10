
/* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número. */

var contador=1;

while (contador<=10){
    // console.log(contador);
    alert(`El numero es: ${contador}`);
    contador++;
}

/* Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. */

var contador=10;

while (contador>=0){ // contador > -1
    // console.log(contador);
    alert(`El numero es: ${contador}`);
    contador--;
} 

/* Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un 
bucle 'while' en la consola del navegador.*/

let cuentaRegresiva = prompt("Ingresa un número para la cuenta regresiva:");

while (cuentaRegresiva>=0) {
    console.log(cuentaRegresiva);
    cuentaRegresiva=cuentaRegresiva-1;
}

/* Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un 
bucle 'while' en la consola del navegador. */


let cuentaProgresiva = prompt("Ingresa un número para la cuenta progresiva:");
var contador = 0;

while (cuentaProgresiva>=contador) {
    console.log(contador);
    contador++;
}
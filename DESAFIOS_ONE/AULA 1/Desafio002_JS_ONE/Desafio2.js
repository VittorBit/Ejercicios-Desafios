
let semana;
/* Quitar estas varibles: 
let finSemana = "Sabado";
let finSemana2 = "Domingo";*/
var numeroIngresado;
var puntuacionJuego;
let saldoCuenta = 256;
let cuentaUsuario;


// 1 //

semana = prompt('Qué día de la semana es:');

// Agregado: //
// Convierte la respuesta a minuscula o mayuscula //
semana = semana.toLowerCase();

// Codigo mal ejecutado o mala practica de programacion //
/* if (semana == finSemana) {
    alert("¡Buen fin de semana!");
} else {
} if (semana == finSemana2) {
    alert("¡Buen fin de semana!");
} else {

} if (semana) {
    alert("¡Buena semana!")
} else {
    
} */

if (semana === "sabado" || semana === "domingo"){
    alert("Buen fin de semana!");
} else {
    alert("Buena Semana");
}

// 2 //

numeroIngresado = prompt("Ingrese un número:");

// Agregado: //
// es una funcion creada para parsear un string y devolver un número si es posible //
numeroIngresado = parseFloat(numeroIngresado);

if (numeroIngresado>0) {
    alert("El número es positivo")
} else 
  if (numeroIngresado<0) {
    alert("El número es negativo");
  } else {
    alert("El número es neutro o cero");
  }  

// 3 //

puntuacionJuego= prompt('Ingrese un número al azar y averigüe si gana: ');
// es una funcion creada para parsear un string y devolver un número si es posible //
puntuacionJuego = parseFloat(puntuacionJuego);

if (puntuacionJuego>=100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

// 4 //

alert(`Su saldo de su cuenta es: ${saldoCuenta}`);

/* Agregado: 
var mensaje = `Tu saldo actual es: $${saldoCuenta}`;
alert(mensaje);
*/

// 5 //

cuentaUsuario = prompt('Ingrese su nombre: ');

alert(`Bienvenid@: ${cuentaUsuario}`);

/* Agregado:
cuentaUsuario = prompt("Por favor, ingrese su nombre: ");
let saludo = `Bienvenido o Bienvenida: ${cuentaUsuario}`;
alert(saludo);
*/
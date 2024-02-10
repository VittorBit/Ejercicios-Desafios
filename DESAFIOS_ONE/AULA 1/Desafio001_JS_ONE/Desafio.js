
/** Practicar la lógica de programación, incluyendo conceptos como variables, condicionales (if), alertas (alert), 
 * solicitudes (prompt), es esencial para tu carrera y desarrollo. Estos fundamentos proporcionan la base para resolver 
 * problemas de manera estructurada, tomar decisiones en el código, crear bucles controlados e interactuar eficazmente 
 * con las personas. */

// Realizacion de pagina - funciones javascript: //

alert('¡Bienvenida y bievenido a nuestro sitio web!');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

// Agregado //
console.log (nombre+", "+ edad + ", " +"numero de ventas= "+ numeroDeVentas+ ", saldo disponible= " + saldoDisponible);

// ........ //
alert ("¡Error! Completa todos los campos");
let mensajeDeError  =  "¡Error! Completa todos los campos";
alert("mensajeDeError");

 // Yo: lo que hicicmos esta mal empleado ya que la variable nombre ya estaba declarada: let nombreIngresar = prompt("Nombre del usuario:"); //
nombre = prompt("Nombre del usuario:"); 
console.log(nombre);

// Yo: lo que hicicmos esta mal empleado ya que la variable edad ya estaba declarada: let edadIngresar = prompt("Ingrese su edad"); //
edad = prompt("Ingrese su edad");
console.log(edad);

if (edad>=18){
    alert("¡Puedes obtener tu licencia de conducir!")
}


// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
let saludo = Saludo();
function Saludo() {
  return "¡Hola, mundo!";
}

console.log(saludo);

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let usuario = prompt("Digame su nombre");
usuario = saludoConParametro(usuario);
function saludoConParametro(usuario) {
  return "¡Hola, " + usuario+"!";
}

console.log(usuario);

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function recibirNumero(numero) {
  return numero*2;
}

console.log(recibirNumero(7));

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1, numero2, numero3) {
  return (numero1+numero2+numero3)/3;
}
let pregunta1=parseInt(prompt("Digame un numero: "));
let pregunta2=parseInt(prompt("Digame un numero: "));
let pregunta3=parseInt(prompt("Digame un numero: "));

console.log(promedio(pregunta1, pregunta2, pregunta3));

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(numero1, numero2){
  let compararNumeros;
  if (numero1 > numero2) {
    compararNumeros=numero1;
  } else {
    compararNumeros=numero2;
  }
  return compararNumeros;
  
  // return numero1 > numero2 ? numero1 : numero2;
}

console.log(numeroMayor(12,6));

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

console.log(cuadrado(6));
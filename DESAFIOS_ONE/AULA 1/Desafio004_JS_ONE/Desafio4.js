
// 1 //
let Mensaje = "Bienvenido o bienvenida";
alert(Mensaje);

// 2 // 
let nombre = "Victor";
console.log(`¡Hola, ${nombre}!`);

// 3 // 
let nombrealert = "¡Hola, Victor Camilo!";
alert(nombrealert);

// 4 //
let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
let respuesta=console.log(pregunta);

// 5 //
var valor1 = 4;
var valor2 = 7;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// 6 //
var valor1 = 8;
var valor2 = 5;
let resultadoResta = valor1 - valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// 7 //
let usuarioEdad = prompt("Ingrese su edad: ");
if (usuarioEdad > 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// 8 //

let numeroValor = prompt("Ingrese un numero cualquiera: ");

if (numeroValor>0) {
    alert("El número es positivo")
} else 
  if (numeroValor<0) {
    alert("El número es negativo");
  } else {
    alert("El número es neutro o cero");
  }  

// 9 //
var numero1a10 = 1;
while (numero1a10<=10) {
  console.log(numero1a10);
  numero1a10++;
}

// 10 //
let nota=8;
if (nota>=7) {
  console.log("Aprobado");
} else{
  console.log("Reprobado");
}

// 11 //
let numeroAleatorio = Math.random() * 100 + 1;
console.log(numeroAleatorio);

// 12//
let numeroAleatorio1a10 = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio1a10);

// 13 //
let numeroAleatorioAl100 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorioAl100);

// Idea de como implementar en el codigo en los ejercicios 11 al 13 //
/*
let numeroAleatorio = Math.random();
console.log (numeroAleatorio);
let numeroEntero = parseInt(Math.random()*10)+1;
console.log (numeroEntero);
let numeroMil = parseInt(Math.random()*1000)+1;
console.log (numeroMil);
*/
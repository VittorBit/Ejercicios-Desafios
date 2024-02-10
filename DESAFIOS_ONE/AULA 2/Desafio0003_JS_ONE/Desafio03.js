
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en 
// kilogramos, que se recibirán como parámetros.//
let altura = prompt("Indique su altura:");
let pesoPersona = prompt ("Cual es su peso");
let calculoDeIMC = IMC(altura,pesoPersona);

function IMC (altura, peso) {  // Calcule el índice de masa corporal = IMC. //
   return resultadoIMC = (peso/Math.pow((altura/100),2)).toFixed(1);
}

console.log(calculoDeIMC);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
let factorial = prompt("Ingrese un numero: ");
console.log(calculeFactorial(factorial));

function calculeFactorial(numero) {
  if (numero < 0) 
     return -1;
  else if (numero == 0) 
     return 1;
    else {
       return (numero * calculeFactorial(numero - 1));
         }
}

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
// (moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del 
// dólar igual a R$4,80.
let convertir = prompt("Ingrese el monto en dolares a convertir real brasileño: ");

function convertirEfectivo (efectivo){
   return efectivo=convertir*4.80;
}

console.log(convertirEfectivo(`Tu cambio de dolares a R$ ${convertir}`));

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y 
// la anchura que se proporcionarán como parámetros.
let alturaRectangulo=10;
let anchura = 20;

function calcularTriangulo (altura2, anchura) {

   area=altura2*anchura;
   perimetro=(altura2*2)+(anchura*2);
   return resultado = `El area del rectangulo es, ${area } y dicho perimetro vale, ${perimetro}`;
   
}

console.log(calcularTriangulo(alturaRectangulo,anchura));

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio 
// que se proporcionará como parámetro. Considera Pi = 3,14.

const pi=3.14;
let radio=5;

function calculoCircular(radio) {
   area=Math.pow(radio,2)*pi;
   perimetro=radio*2*pi;
   return resultado = `El area del circulo es, ${area } y dicho valor perimetro es, ${perimetro.toFixed(2)}`;
}

console.log(calculoCircular(radio));

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let numero=2;
tablaDeMultiplicar(numero);

function tablaDeMultiplicar(numero) {
   for ( let i = 1; i <= 12; i++){
      console.log(`${numero} x ${i} es igual a : ${numero*i}`);
   }
}

// CODIGO EJEMPLO //

/* 
function tablaDeMultiplicar2(numero2) {
   for ( let i = 1; i <= 12; i++)
   console.log(`${numero2} * ${i} es igual a : ${numero2 * i}`)
}

let numero2 = 11
tablaDeMultiplicar2(numero2) 
*/

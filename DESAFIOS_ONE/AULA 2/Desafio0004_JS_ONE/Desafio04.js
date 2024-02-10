
// 1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
console.log(listaGenerica[0]); 

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
// 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguagesDeProgramacion);

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarConsola(lista) {
    for(let indice = 0; indice < lista.length; indice++){ 
        console.log(`El elemento ${indice} es: ${lista[indice]}`); 
    } 
   //  return lenguagesDeProgramacion - NORMAL
}

mostrarConsola(lenguagesDeProgramacion);

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarElementosListaInverso(lista){ 
    for(let indice = lista.length-1; indice >= 0; indice--){ 
        console.log(`El elemento ${indice} es: ${lista[indice]}`); } 
}

mostrarElementosListaInverso(lenguagesDeProgramacion);

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.

let ListaNumeros=[10, 5, 4, 8]; 
console.log(`El promedio de la lista ${ListaNumeros} es: ${calcularPromedio(ListaNumeros)}`);

function calcularPromedio(lista){ 
    let suma=0; 
    for(let indice = 0; indice < lista.length; indice++){
        suma+=lista[indice]; } 
        return (suma / lista.length).toFixed(2); 
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaCompararNumeros = [7, 8, 11, 6, 9];
console.log(`Los numeros a comparar de mayor y menor de la lista son: ${listaCompararNumeros}`);

console.log(`${compararNumeros(listaCompararNumeros)}`);

function compararNumeros (lista){
    let numeroMayor=0;
    let numeroMenor=lista[0];

    for (let indice=0; indice<lista.length; indice++){
        if (lista[indice]>numeroMayor) {
            numeroMayor=lista[indice]
        } else {
            if (lista[indice]<numeroMenor) {
                numeroMenor=lista[indice]; 
            }
        }
    }  return "Numero mayor es: "+numeroMayor +", y el numero menor es: "+numeroMenor; 
}



/*
// MANERA MAS OPTIMA HACER EL CODIGO: //

console.log(`El número mayor de la lista es: ${numeroMayorDeLista(listaCompararNumeros)}`); 
console.log(`El número menor de la lista es: ${numeroMenorDeLista(listaCompararNumeros)}`);

function numeroMayorDeLista(lista){ 
    let numeroMayor=0; 
    for(let indice=0; indice<lista.length;indice++){ 
        if(lista[indice]>numeroMayor){ 
            numeroMayor=lista[indice]; 
        } 
    } return numeroMayor; 
}

function numeroMenorDeLista(lista){ 
    let numeroMenor=lista[0]; 
    for(let indice=0; indice<lista.length;indice++){
         if(lista[indice]<numeroMenor){ 
            numeroMenor=lista[indice]; 
        } 
    } return numeroMenor; 
}
*/

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.

let listasuma =[6,5,10,25];

console.log(Sumarlista(listasuma));

function Sumarlista(lista) {
    suma=0;
    for (let indice=0; indice<lista.length;indice++){
        suma=suma+lista[indice];
    }
    return "La suma de todos los elementos o indice de una lista o arreglo es: "+suma;
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
// pasado como parámetro, o -1 si no existe en la lista.

// Nota: posicion = lista[indice] // posicion = lista[2]. //
let ListaDePosicion=[9,30,40,5,7]
let numeroPosicion=30; console.log(`La posición del número es: ${existenciaNumeroEnLista(ListaDePosicion,numeroPosicion)}`);

function existenciaNumeroEnLista(lista,posicion){ 
    for(let indice=0; indice<lista.length;indice++){ 
        if(lista[indice]==posicion){ 
            return indice+1; 
        } 
    } return -1; 
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
// lista con la suma de los elementos uno a uno.

// Ojo: solo suma los elementos dentro de la lista, ("array o arreglo"), si los indices son iguales si no 
// el algoritmo nos manda el mensaje: return "Lo sentimos pero las listas no tienen el mismo tamaño.";

let listaUno=[6,8,10,3]; 
let listaDos=[12,4,2,6];
let sumaDeLista=console.log(`La suma de las dos lista es: ${sumarListas(listaUno, listaDos)}`);

// indice=3 -> elemento, elemento, elemento;
// indice[elemento]=indice[elemento,elemento,elemento]; //
function sumarListas(lista1, lista2) {
    let suma=[];

    if (lista1.length==lista2.length) {
       for (let indice = 0; indice<lista1.length;indice++) {
        suma.push(lista1[indice] + lista2[indice]); 
       } 
       return suma;
    } else {
        return "Lo sentimos pero las listas no tienen el mismo tamaño.";
    }
}

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaCuadrado=[2,4,10,7];
console.log(`El cuadradro de la lista de los elementos d cada numero es: ${elementosAlCuadrado(listaCuadrado)}`);

function elementosAlCuadrado(lista) {
    let PotenciaDe2=[];
    
    for (let indice = 0; indice < lista.length; indice++) {
        PotenciaDe2.push(Math.pow(lista[indice], 2));
    } return PotenciaDe2;
}


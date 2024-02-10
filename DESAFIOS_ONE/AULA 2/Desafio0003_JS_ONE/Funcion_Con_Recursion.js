
// Factorizar un número con recursión: //

function calculeFactorial(numero) {
    // Si el número es menor que 0, rechacelo. 
    if (numero < 0) 
    return -1;
  
  // Si el número es 0, su factorial es 1.
  else if (numero == 0) 
  return 1;
  
  // De otra forma, llama al procedimiento de nuevo
  else {
    return (numero * calculeFactorial(numero - 1));
    /* 
  Primera parte del metodo recursion
    Necesitas recordar que no solo tendras solo una llamada, tendras varias llamadas anidadas.
    
    cada llamada: num === "?"        	         num * factorialize(num - 1)
    1ª llamada – factorialize(5) devolvera    5  * factorialize(5 - 1) // factorialize(4)
    2ª llamada – factorialize(4) devolvera    4  * factorialize(4 - 1) // factorialize(3)
    3ª llamada – factorialize(3) devolvera    3  * factorialize(3 - 1) // factorialize(2)
    4ª llamada – factorialize(2) devolvera    2  * factorialize(2 - 1) // factorialize(1)
    5ª llamada – factorialize(1) devolvera    1  * factorialize(1 - 1) // factorialize(0)
    
     Segunda parte del metodo recursion
  Si el metodo toca la condicion if, y regresa 1 cuando el numero se multiplica asi mismo.
     La funcion regresara con el valor total
    
    5ª la llamada devolvera (5 * (5 - 1))     // num = 5 * 4
    4ª la llamada devolvera (20 * (4 - 1))    // num = 20 * 3
    3ª la llamada devolvera (60 * (3 - 1))    // num = 60 * 2
    2ª la llamada devolvera (120 * (2 - 1))   // num = 120 * 1
    1ª la llamada devolvera (120)             // num = 120
    
    Si sumamonos todas las llamadas en una linea, tenemos
    (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
    */
  } 
  }
  
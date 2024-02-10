
// Factorizar un número con el bucle WHILE //

function calculeFactorial(num) {
    // Paso 1. Crea una variable resultado que guarda numero
    var result = numero;
     
    // Si numero = 0 O numero = 1, el factorial devolverá 1
    if (numero === 0 || numero === 1) 
      return 1; 
   
    // Paso 2. Crea un bucle WHILE
    while (numero > 1) { 
      numero--; // decremento en 1 en cada iteración / decrementation by 1 at each iteration
      result = result * numero; // o resultado *= número; / or result *= num; 
      /* 
                      num           num--      var result      result *= num         
      1ª iteración:   5             4            5             20 = 5 * 4      
      2ª iteración:   4             3           20             60 = 20 * 3
      3ª iteración:   3             2           60            120 = 60 * 2
      4ª iteración:   2             1          120            120 = 120 * 1
      5ª iteración:   1             0          120
      Fin del bucle WHILE
      */
    }
       
    // Paso 3. Regresa el factorialdel integral dado
    return result; // 120
  }
  calculeFactorial(5);
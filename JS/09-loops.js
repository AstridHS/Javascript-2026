    /* 

    Bucles

    Son estructuras que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición específica.

    Los más comunes son:

    1. Bucle for

    El Bucle for se utiliza cuando sabemos cuantas veces queremos repetir un bloque de código.

    Sintaxis:

    for ( inicialización; condición; incremento ) {

        // Código que se va a repetir su ejecución

    }

    Inicialización - Variable con un valor inicial.
    Condición - Evalua una expresión. True > Se ejecuta el bucle.
    Incremento - Aumenta el valor de la variable en cada iteración.

*/

for ( let i = 0; i <= 10; i++ ) {
    //console.log(i);
}

/* 

2. Bucle While

    El bucle while se utiliza cuando no sabemos cuantas veces repetir un bloque de código, Pero si queremos que se repita mientras se cumpla una condición.

    Sintaxis:

    While (condición) {
        // Código que se ejecuta 
        ...
        Incremento
    }

*/

/* let j = 0;
let repeticiones = parseInt(prompt("Cuantas veces quieres que se repita"))

while (j <= repeticiones) {
    console.log(j)
    j++;
} */

/* 

    3. Bucle do...while

    Este bucle es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez. Ya que la condición se evalua después de la ejecución.
    
    Sintaxis:

    Inicialización
    
    do {
        // Código que se ejecuta al menos una vez
        ...
        Incremento
    }   while (condición);

*/

let k = 0;

do {
    console.log("Be fookin happy");
    k++;
}   while (k < 5);
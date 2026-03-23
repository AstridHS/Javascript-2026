/* 

    Condicionales

    Son estructuras de control que permiten ejecutar diferentes bloques de código según una condición (verdadero o falso)

    1. If (si es verdadero)

    Evaluar una condición y si es verdadera (true), ejecutra el código dentro de sus llaves.

    Sintaxis:

        if (condición) {
            // código que se ejecuta
        }

*/

let edad = 13;

if (edad >= 18) { // verdadero o falso
    // Código que se ejecuta
    console.log("Eres mayor de edad, puedes ver este contenido")
}

/* 

    2. Else (no es verdadero)
    
    Permite ejecutar un bloque de código si la condición es falsa.

    Sintaxis:

    if (condición) {
        // código de bloque si es verdadero

    } else {
        // código que se ejecuta si es falso

    }

*/

let hora = 16;

if (hora < 12) { //false
    console.log("Buenos días rayito")
} else {
    console.log("Buenas tardes rayito")
} 

/* 

    3. else if (si no es verdadero)

    Nos va a permitir tener más de una condición para ser evaluada. Esta evaluación es secuencia, has que una condición sea verdadera entonces se ejecutará el bloque de código.

    Sintaxis:

    if (condición) {
        // código que se ejecuta si la condición es verdadera

    } else if (condición) {
        // código que se ejecuta si la condición es verdadera

    } else {
        // código que se ejecuta si ninguna de las condiciones es verdadera    

    }

*/

let calificación = 5;

if (calificación >= 9) {
    console.log("Eres un excelente programador")
} else if (calificación >= 7) {
    console.log("Ahí la llevas, ya casi te sale")
} else if (calificación >= 5) {
    console.log("Échale más ganas o nos vemos en el extra")
} else {
    console.log("Valio verde, bienvenido al extra")
}

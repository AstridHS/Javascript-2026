/* 

    Funciones 

    Las funciones son bloques de código reutilizables que realizan una tarea específica.

    1. Función Declarada 

    Es la forma más común de definir funciones. Se puede llamar a la función antes de su definición debido al hoistin, es decir se "eleva" en el contexto de ejecución.

    Sintaxis:

    function nombreFuncion() {
        // Cuerpo de la función

    }

    Llamada o invocación de la función:

    nombreFuncion();

*/

function rayitoSaluda() {
    console.log("Hi, soy rayito");
}

rayitoSaluda();

/* 

    2. Función Expresada (Anónimas)

    Este tipo de función se asignan a una variable. No puede ser llamada antes de su definición.

    Sintaxis:

    const nombreConstante = function() {
        // Cuerpo de la función

    }

    Llamada a la función:

    nomcreConstante();

*/

const joshuaDespedida = function() {
    console.log("Adiós vaquero");
}

joshuaDespedida();

/* 

    3. Función Flecha - Arrow Function 

    Tienen una sintaxis más consisa, son útiles para ejecuciones cortas. Generalmente se asignan a variables. 

    Sintaxis:

    const nombreConstante = () => {
        // Cuerpo de la función
        
    }

    Llamada

    nombreConstante();

*/

const astridSos = () => {console.log("Ayuda, YUNGBLUD ya no viene")};

astridSos();

/* 

    Parámetros y Argumentos

    Las funciones pueden acceptar parámetros para recibir datos cuando son invocadas.

    Sintaxis:

    function nombreFuncion( parametro1 , parametro2 , ... ) {
        // Cuerpo de la función
        // Los parámetros los usamos dentro del cuerpo de la función

    }

    Llamadas:

    nombreFuncion( argumento1, argumento2, ... )

*/

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Rayito");

const sumar = function(num1 , num2) {
    let suma = num1 + num2;
    console.log("El resultado es " + suma);
}

sumar(5, 10); 
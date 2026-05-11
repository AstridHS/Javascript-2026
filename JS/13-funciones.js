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

/* 

Parámetros por defecto 

En las funciones podemos tener valores por defecto si no se proporcionan los argumentos al llamar a la función.

Sintaxis:

Function nombrefuncion( parm1 = valorDefault ) {
    // Código que se ejecuta o cuerpo de la función
    ...
}

Llamada:

nombreFuncion(); // Usará los valores por defecto.
nombreFuncion(arg1); // Usará el valor del argumento.

*/

const multiplicar = function( num1 = 1, num2 = 2 ) {
    let resultado = num1 * num2;
    console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${resultado}`);
}

multiplicar();
multiplicar(5, 3);

/* 

Valor de retorno (Return)

Las funciones pueden "devolver" o retornar un valor.
Para esto se utiliza la palabra "return"

Sintaxis:

function nombreFunción() {
    // Cuerpo de la función
    ...
    ...
    return valor;
}

Llamada:

const nombreConstante = nombreFunción();

*/

function despedido( nombre = "Rayito" ) {
    return `${nombre} estás muy brillante wii`
}

const mensajito = despedido();

console.log(mensajito);

/* 

Retorno Implicito

Las funciones flecha no necesitan la palabra return en su estructura más simple (una sola línea)

Sintaxis:

const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultado = restar(10, 5);

console.log(resultado)
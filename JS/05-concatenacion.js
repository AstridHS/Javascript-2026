/* 

Concatenación de Cadenas de Texto 

Es el proceso de unir dos o más cadenas de texto en una sola. Esto se hace utilizando el operador "+"

*/

console.log("Tengo antojo de " + "Sushi")

let nombre = "Dominic";
let apellido = "Vega";
let edad = 19;

console.log("Hola me llamo " + nombre + " " + apellido + " y tengo " + edad + " años");

/* 

    Plantillas Literales (Template strings)

    Es un espacio que se abre para la combinación de variables, expresiones y cadenas de texto. Ayuda a concatenar de forma más dinámica y simple. Se usan los backticks (acento invertido o acento agudo)

*/

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

/* 

    Si se utiliza el operador de + con valores númericos se suman. Pero si se usan con cadenas de texto entonces se concatenan.

*/

let a = "5"; // number
let b = "10"; // number

console.log(a + b) // "510"
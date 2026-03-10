/* 

    Tipos de Datos

    Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

    En JS, existen varios tipos de datos que se pueden agrupar en dos categorías: primitivos y complejos (objetos)
    
    Cada tipo de dato tiene sus características y usos específicos en programación:

    1. Primitivos

    Datos básicos que no se consideran objetos y no tienen métodos.

    Número o Number -> Representan valores númericos, ya sea enteros o decimales.

    Cadena de Caracteres o Strings -> Representan texto. El texto se coloca entre comillas dobles o simples. Hay que ser consistentes en su uso.

    Boleanos o  Booleans -> Representan un valor lógico que pueden ser verdadero (true) o falso (false).
    
    Indefinido o Undefined -> Es el valor que se asigna a una variable que ha sido declarada pero no se ha inicializado.

*/

// Numbers

let miEdad = 19;
let miEstatura = 1.65;

console.log(miEdad);
console.log(miEstatura);

// Strings 

let miNombre = "Astrid";
let miApellido = "Trujillo"

console.log(miNombre)
console.log(miApellido)

// Booleans

let esEstudiosa = true;
let esGuapota = false;

console.log(esEstudiosa);
console.log(esGuapota);

//Unddefined

let aprobaraProgramacion;

console.log(aprobaraProgramacion);

/* 

2. Complejos (Objetos)

Arreglo o Array -> Es un conjunto de datos que se almacenan en una lista ordenada. 
Los datos dentro de un arreglo se escriben entre corchetes: [] (shift + t.llaves) y se separan por comas ,

Objetos u Objects -> Es un conjunto de multiples datos en pares: clave - valor. Los datos dentro de un objeto se escriben entre llaves: {} y se separan por comas ,

Funciones o Functions -> Es un tipo de dato que puede ser invocado. Se declaran con la palabra reservada function y el código que ejecutan va entre llaves {}

*/

// Array 

let misCaricaturas = ["Metal Family", "Hazbin Hotel", "Un Show Mas"];
let misNumeros = ["3", "10", "12", "15", "22"];
let tutifruti = ["yungblud", "12345", "true", "false"];

console.log(misCaricaturas);
console.log(misCaricaturas[0]);
console.log(misNumeros);
console.log(misNumeros[3]);
console.log(tutifruti);
console.log(tutifruti[2]);

// Objetos

let perro = {
    nombre: "firulais",
    edad: 2, 
    tamaño: "pequeño", 
    color: "blanco",
    ladra: true,
    muerde: false,
}

console.log(perro);
console.log(perro.nombre)
console.log(perro.edad)
console.log(perro.muerde)

// Functions

let saludar = function() {
    //Aquí va el código que se ejecuta cuando se invoca a la función
    console.log("Hola estoy aprendiendo Javascript!")
}

console.log(saludar)

saludar(); // Invocamos a la función




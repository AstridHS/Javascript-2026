/* 

Arreglos (Arrays)

Un arreglo es una colección de datos, es decir una lista de elementos.

En JS los arreglos se definen utilizando corchetes [] y los elementos internos se separan por comas ","

Pueden contener el mism tipo de datos o diferentes tipos, incluso pueden tener arreglos anidados.

*/

let frutas = ["manzana", "sandía", "moras", "uvas"];
let calificaciones = [10, 8, 5, 2];
let misDatos = ["Astrid", 19, true]

console.log(frutas) // Muestra el arreglo completo
console.log(frutas.length); // El número de datos
console.log(frutas[3]) // Accedemos a un dato a través del indice

console.log("calificación de Astrid: " + calificaciones[0]);
console.log("Edad de Astrid " + misDatos[1] + " años");

let coordenadas = [ [1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9] ]; // Arreglos anidados

console.log(coordenadas);
console.log(coordenadas[2]);
console.log(coordenadas[2][2]);

/* 

    Métodos de los arreglos.

    Un método es una función preestablecida que nos ayuda a trabajar con arreglos y sus datos.

    push() - Agrega uno o más elementos al final del arreglo. 
    pop() - Elimina el último elemento del arreglo y lo devuelve.
    shift() - Elimina el primer elemento del arreglo y lo devuelve.
    unshift() - Agrega uno o más elementos al inicio del arreglo.
    indexOf() - Devuelve el indice del primer elemento que coincida  con el valor especificado o regresa -1 si no encuentra nada.

*/

let peliculas = ["Los Mitchels" , "Los Cazafantasmas" , "Sonic"];

console.log(peliculas);

peliculas.push("The Dirth" , "La sonrisa de la mona lisa" , "Dedicada a mi ex");

console.log(peliculas);

let ultimaPelicula = peliculas.pop();

console.log(peliculas);
console.log("La última película que ví fue: " + ultimaPelicula)

let primerPelicula = peliculas.shift();

console.log(peliculas);
console.log("Mi primer película que vi fue " + primerPelicula);

peliculas.unshift("Escuela de rock" , "Are you ready boy?" , "The Dirth");

console.log(peliculas);

console.log( peliculas.indexOf("The Dirth") )

/* 

Iteración de Arreglos 

El acceso a los datos a través de un bucle o ciclo.

*/

let antojitos = ["chalupas" , "esquite" , "tapioca"];

antojitos.push("helado de menta" , "crepa" , "fresas con chocolate");

for (i=0 ; i < antojitos.length ; i++ ) {
    console.log("Se me antojo unas " + antojitos[i] )
}
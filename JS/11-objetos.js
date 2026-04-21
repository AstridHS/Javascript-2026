/* 

    Objetos

    Son colecciones de propiedades. Una propiedad es una asociación entre un nombre (clave o key) y un valor (value)

    Los valores pueden ser de distintos tipos: números, strings, cadenas de textos, boleanos, arreglos, funciones...

    Sintaxis:

    nombreObjeto = {
        // Propiedades (clave: valor)
        clave1: valor, 
        clave2: valor,
        clave3: valor,
        ... 
    }

*/

const perrito = {
    nombre: "Lucy",
    raza: "caniche",
    edad: 3,
    aunLadra: true,
    aunBrinca: true,
    juguetes: ["pollo","jirafa rosa"],
    saludo: function() { console.log("Hola soy Lucifer")}
}

console.log(perrito);

/* 

    Para acceder a las propiedades y sus valores, utilizamos la notación de punto o la notación de corchetes.

    nombreObjeto.clave - notación de punto
    nombreObjeto[clave] - notación de corchetes

*/

console.log(perrito.aunLadra);
console.log(perrito["aunLadra"]);

console.log("Hola me llamo " + ["nombre"] + "y tengo " + ["edad"] + "años y soy un perrito " + ["raza"])
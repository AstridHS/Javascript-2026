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

// Acceso a las propiedades boleanas

console.log(perrito.aunLadra);
console.log(perrito.aunBrinca);

if (perrito.aunLadra === true) {
    console.log("Soy una perrita bien diavolo");
}   else {
    console.log("Soy una perrita hambreada");
}

if (perrito.aunBrinca) {
    console.log("Soy joven y malota");
}   else {
    console.log("Ya no brinco, pero aún puedo atacar");
}

// Acceso al array

console.log(perrito.juguetes); //Todo el array
console.log(perrito.juguetes[0]); // Pollo
console.log(perrito.juguetes[1]); // Jirafa rosa 

console.log(`Mis juguetes favoritos son: mi peluche de ${perrito.juguetes[0]} y ${perrito.juguetes [1]}`)

/* 

    Métodos de los objetos

    Son funciones que estan asociadas a un objeto. Se pueden llamar utilizando la notación del punto "."

    Todas las funciones para ser llamadas se escriben así:

    nombreFunción() -> Llamados a la función

    En los objetos los escribimos así

    nombreObjetos.nombreFunción()

    Cuando una función esta dentro de un objeto se les llama métodos.
*/

console.log(perrito.saludo()) // Indefinido 

perrito.saludo(); // Imprime el mensaje dentro del bloque de código de la función.

/* 

    Agregar proopiedades

    Para agregar más propiedades después de declarar el objeto usamos la siguiente sintaxis.

    nombreObjeto.nuevaPropiedad = valor;

    Para actualizar una propiedad usamos la misma sintaxis del punto y el valor actualizado.

        nombreObjeto.propiedadExistente = nuevoValor

*/

console.log(perrito)

perrito.color = "blanco";
perrito.edad = 3;
perrito.corre;

console.log(perrito)
/* 

    Variables

    Las variables son contenedores que almacenan datos. En JS se pueden declarar variables utilizando las palabras clave: var, let y const

    var -> Es la forma más antigua de declarar variables. Tiene un alcance global y puede ser re-declarada y actualizada.

    let -> Es la forma moderna de declarar variables. Tiene un alcance de bloque o local. Puede ser actualizada pero no re-declararse dentro del mismo alcance.

    const -> Tiene un alcance de bloque y no pueden ser re-declaradas ni actualizadas. Se utilizan con valores que nunca deben cambiar.
*/

// Declaraación con var 

var pokemon = "Mimikyu";

console.log(pokemon)

pokemon = "Gengar";

console.log(pokemon)

// Declaración con let

let edad = 19;

console.log(edad);

edad = 20;

console.log(edad)

// Declaración con const 

const PI = 3.1416;

console.log(PI);

/* PI = "Yungblud"; */ 
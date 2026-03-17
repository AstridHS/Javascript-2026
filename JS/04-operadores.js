/* 

    Operadores

    Son simbolos que indican al interprete que debe realizarse una operaciòn matemática, lógica y relacionar valores. Y producir un resultado.

    1. Operadores Aritméticos

    Se utilizan para operaciones matemátcias básicas como suma, resta, division y multiplicación.

    + -> Suma
    - -> Resta
    * -> Multiplicación 
    / -> División
    % -> Módulo (residuo)
    ++ -> Incremento (suma 1 unidad al valor)
    -- -> Decremento (resta 1 al valor)

*/

let a = 10;
let b = 5; 

// Expresión: Es el conjunto de variables, valores y operadores.

console.log(a + b ); //15
console.log(a - b ); //5
console.log(a * b ); //50
console.log(a / b ); //2
console.log(a % b ); //0
a++;
console.log(a); //11
b--;
console.log(b); //4

/* 

    2. Operadores de Asignación

    Estos operadores se utilizan para asignar valores a las variables.

    = -> Asignación 
    += -> Sumar y asigna
    -= -> Resta y asigna
    *= -> Multiplica y asigna
    /= -> Divide y asigna 
    %= -> Residuo y asigna

*/

let c = 20;
console.log(c); // 20

c += 5; // 25
console.log(c); // 25

c -= 10; // 15
console.log(c); // 15

c *= 2;
console.log(c); // 30

c /= 3;
console.log(c); // 10

c %= 3;
console.log(c); // 1

/* 

    3. Operadores de Comparación

    Se utilizan para comparar dos valores o expresiones y devuelve un valor booleano (true or false)

    == -> Igualdad. Compara solo el valor.
    === -> Igualdad estricta. Compara el valor y el tipo de dato.
    != -> Desigualdad. Compara el valor.
    !== -> Desigualdad estricta. Compara el valor y el tipo de dato.
    > -> Mayor que. 
    < -> Menor que.
    >= -> Mayor o igual que.
    <= -> Menor o igual que.

*/

let d = 10; // number
let e = "10"; // string

console.log(d == e); // true
console.log(d === e); // false
console.log(d != e); // false
console.log(d !== e); // true

console.log(d > 5); // true
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 5); // false

/* 

    4. Operadores Lógicos

    Se usan para combinar expresiones booleanas.

    && -> AND (Y) - Si ambos valores o expresiones son verdaderos entonces el resultado sera verdadero. Si al menos un valor es falso, el resultado será falso.

    || -> OR (O) - Si al menos un valor es verdadero el resultado será verdadero. Solo si ambos valores son falsos el resultado será falso. 

    | -> NOT (no) - Niega el valor. El resultado es el valor contrario al que esta asignado.

*/

let f = true; // (10 > 5)
let g = false; // (10 === "10")

console.log(f && g) // false
console.log(f || g) // true
console.log( !f ) // false
console.log( !g ) // true
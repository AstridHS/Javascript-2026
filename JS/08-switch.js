    /* 

    Switch

    Es una sentencia que se utiliza para realizar diferentes acciones según distintas condiciones.

    Se suele usar como forma alternativa a multiples sentencias else-if cuando se tiene una sola variable que puede tomar distintos valores.

    Sintaxis:

    Switch (variable) {
    
        // Casos según se compare la variable
        case valor1:
            // Código a ejecutar
            ...
            ...
            break; // Parar la ejecución del código

        case valor2:
            // Código a ejecutar
            ...
            ...
            break;

        default: 
            // Va a ejecutar el código si no coincide con ningun caso.
            ...
            ...
            break; // Sea opcional
    }
*/

let eleccionLicenciatura = prompt("Escribe la licenciatura que te interesa: television, diseño o consultoria") // televisión, diseño, consultoría 

switch (eleccionLicenciatura) {

    case "televisión":
        console.log("Has elegido la Licenciatura de Televisión, que mal por ti");
        break;

    case "diseño":
        console.log("Has elegido la Licenciatura de Diseño, amazing");
        break;
    case "consultoría":
        console.log("Has elegido la Licenciatura de Consultoría, F");
        break;

    default:
        console.log("Todo bien? XD")

}
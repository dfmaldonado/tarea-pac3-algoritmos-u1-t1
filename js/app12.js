let numero1 = Number(prompt("Ingrese el primer numero:"));
let numero2 = Number(prompt("Ingrese el segundo numero:"));
let resultado;
let operacion = prompt("Seleccione una operacion: + (suma), - (resta), * (multiplicacion), / (division)");

if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2; 
    } else {
        console.log("Error: Division por cero no permitida.");
    }
} else {
    console.log("Operacion no valida. Por favor, seleccione +, -, * o /.");
}

if (resultado !== undefined) {
    console.log(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
}

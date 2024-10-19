let num1 = Number(prompt("Introduce el primer numero:"));
let num2 = Number(prompt("Introduce el segundo numero:"));

let multiplicacion = num1 * num2;

let division;
if (num2 !== 0) {
    division = num1 / num2;
} else {
    division = "No se puede dividir entre 0";
}

console.log("El resultado de la multiplicacion es: " + multiplicacion);
console.log("El resultado de la division es: " + division);
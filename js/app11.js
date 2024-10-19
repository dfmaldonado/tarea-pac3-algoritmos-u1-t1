let numero = Number(prompt("Ingrese un numero para verificar si es primo:"));

function esPrimo(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

if (esPrimo(numero)) {
    console.log(`${numero} es un numero primo`);
} else {
    console.log(`${numero} no es un numero primo`);
}
let kilometrosRecorridos = parseFloat(prompt("Ingrese el numero de kilometros recorridos:"));

let litrosConsumidos = parseFloat(prompt("Ingrese el número de litros consumidos:"));

let consumoPorKilometro = litrosConsumidos / kilometrosRecorridos;

console.log(`El consumo de combustible es: ${consumoPorKilometro.toFixed(2)} litros por kilometro`);

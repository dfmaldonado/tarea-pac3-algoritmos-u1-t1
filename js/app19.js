let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

let porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA:"));

let montoIVA = (precioProducto * porcentajeIVA) / 100;

let precioTotal = precioProducto + montoIVA;

console.log(`El precio del producto es: $${precioProducto.toFixed(2)}`);
console.log(`El monto del IVA es: $${montoIVA.toFixed(2)}`);
console.log(`El precio total a pagar es: $${precioTotal.toFixed(2)}`);

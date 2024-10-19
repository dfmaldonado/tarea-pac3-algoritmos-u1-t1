function piesAMetros(pies) {
    return pies * 0.3048; 
}

function metrosAPulgadas(metros) {
    return metros / 0.0254;
}

function piesAYardas(pies) {
    return pies / 3;
}

function metrosAMillas(metros) {
    return metros / 1609; 
}

let pies = Number(prompt("Ingrese la cantidad en pies:"));
let metros = Number(prompt("Ingrese la cantidad en metros:"));


let metrosConvertidos = piesAMetros(pies);

let totalMetros = metros + metrosConvertidos;


let totalPulgadas = metrosAPulgadas(totalMetros);
let totalYardas = piesAYardas(pies) + (metrosConvertidos / 0.9144);
let totalMillas = metrosAMillas(totalMetros);


console.log(`Total en pulgadas: ${totalPulgadas.toFixed(2)} pulgadas`);
console.log(`Total en yardas: ${totalYardas.toFixed(2)} yardas`);
console.log(`Total en metros: ${totalMetros.toFixed(2)} metros`);
console.log(`Total en millas: ${totalMillas.toFixed(6)} millas`);
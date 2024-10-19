function litrosAMetrosCubicos(litros) {
    return litros / 1000; 
}

function yardasCubicasAPiesCubicos(yardasCubicas) {
    return yardasCubicas * 27; 
}

function piesCubicosAMetrosCubicos(piesCubicos) {
    return piesCubicos * 0.0283;
}

let litrosTanque1 = Number(prompt("Ingrese la capacidad del primer tanque en litros:"));
let yardasCubicasTanque2 = Number(prompt("Ingrese la capacidad del segundo tanque en yardas cubicass:"));

let metrosCubicosTanque1 = litrosAMetrosCubicos(litrosTanque1);
let piesCubicosTanque2 = yardasCubicasAPiesCubicos(yardasCubicasTanque2);
let metrosCubicosTanque2 = piesCubicosAMetrosCubicos(piesCubicosTanque2);

let totalMetrosCubicos = metrosCubicosTanque1 + metrosCubicosTanque2;

let aguaConsumo = totalMetrosCubicos * 0.75; 
let aguaRiego = totalMetrosCubicos * 0.25; 

let aguaConsumoPiesCubicos = aguaConsumo / 0.0283; 
let aguaRiegoPiesCubicos = aguaRiego / 0.0283; 

console.log(`Total de agua en metros cubicos: ${totalMetrosCubicos.toFixed(2)} m³`);
console.log(`Agua para consumo domestico: ${aguaConsumo.toFixed(2)} m³ (${aguaConsumoPiesCubicos.toFixed(2)} pies cubicos)`);
console.log(`Agua para riego: ${aguaRiego.toFixed(2)} m³ (${aguaRiegoPiesCubicos.toFixed(2)} pies cubicos)`);

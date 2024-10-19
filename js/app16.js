
function convertirATiempoTotal(minutos, segundos) {
    return minutos * 60 + segundos; 
}

let minutosAtleta1 = Number(prompt("Ingrese los minutos del primer atleta:"));
let segundosAtleta1 = Number(prompt("Ingrese los segundos del primer atleta:"));


let minutosAtleta2 = Number(prompt("Ingrese los minutos del segundo atleta:"));
let segundosAtleta2 = Number(prompt("Ingrese los segundos del segundo atleta:"));


let tiempoAtleta1 = convertirATiempoTotal(minutosAtleta1, segundosAtleta1);
let tiempoAtleta2 = convertirATiempoTotal(minutosAtleta2, segundosAtleta2);


let tiempoTotalSegundos = tiempoAtleta1 + tiempoAtleta2;

let horas = Math.floor(tiempoTotalSegundos / 3600);
let minutos = Math.floor((tiempoTotalSegundos % 3600) / 60);
let segundos = tiempoTotalSegundos % 60;

console.log(`El tiempo total utilizado por ambos atletas es: ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
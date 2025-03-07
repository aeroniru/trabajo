const prompt = require("prompt-sync")();

let frases = prompt("Ingrese una frase: ")
let letra=0, numero=0, espacio=0;

for (let i = 0; i < frases.length; i++) {
    let vector = frases[i];

    if (vector == " ") {
        espacio++;
    } else if (isNaN(vector)) {
        letra++;
    } else if (!isNaN(vector)) {
        numero++;
    }

}

console.log(`Cantidad de letras: ${letra}.`);
console.log(`Cantidad de numeros: ${numero}.`);
console.log(`Cantidad de espacios: ${espacio}.`);

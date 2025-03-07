const prompt = require("prompt-sync")();

let numdados= parseInt(prompt("Ingrese el numero de dados a lanzar: "))

for (let i = 1; i < numdados+1; i++) {
    let resultado = Math.floor(Math.random() * 6) + 1;
    console.log(`Resultado ${i}: ${resultado}`);
}
/*Ejercicio 2: Verificación de Número Perfecto
📌 Descripción:
 ✔ Pedir al usuario un número entero positivo.
 ✔ Determinar si es un número perfecto (la suma de sus divisores propios es igual al número).
📌 Ejemplo:
Ingrese un número: 6  
✅ 6 es un número perfecto (1 + 2 + 3 = 6). 
*/
const prompt = require('prompt-sync')();
let numeroEntero;

function VerificadorEnteroPositivo() {
    let num;
    while (num < 1 || isNaN(num)) {
        num = prompt("Por favor poner un número positivo mayor a 0: ")
        if (num < 1 || isNaN(num))
            console.log("Digito no valido, intente de nuevo")
    }
    console.log();
    return num;
}

function VerificadorNumeroPerfecto(numeroVerificar, array) {
    for (let i = 0; i < numeroVerificar; i++)
        if (numeroVerificar % i == 0)
            array.push(i);
}

let contador = 0;
const arrayContador = [];
numeroEntero = VerificadorEnteroPositivo();
VerificadorNumeroPerfecto(numeroEntero, arrayContador);

arrayContador.forEach((e) => {
    console.log(e);
    contador += e;
});

console.log(`= ${contador}`);
if (contador == numeroEntero){
    console.log("✅ El número es perfecto")
}else{
    console.log("🚫 El número NO es perfecto")
}
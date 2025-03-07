
const prompt = require("prompt-sync")();

let temperatura = parseFloat(prompt("Ingrese la temperatura en grados celsius o -1 para salir"))

band = true;
while (band) {
    if (temperatura===-1) {
        console.log("Saliendo.");
        band=false;
        break;
    }
    if (isNaN(temperatura)) {
        console.log("Error. Debe ingresar un numero.")
        return;
    }
    else {
        fare=(temperatura * 9/5) + 32;
        kelvin=(temperatura + 273.15);
        console.log(`El numero en grados Fahrenheit es ${fare.toFixed(2)} y en grados Kelvin es ${kelvin.toFixed(2)}`)
        break;
    }
}
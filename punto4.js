/*
Ejercicio 4: Generador de Tablas de Multiplicar
📌 Descripción:
 ✔ Pedir al usuario un número entero positivo.
 ✔ Mostrar su tabla de multiplicar del 1 al 10.
📌 Ejemplo:
Ingrese un número: 4  
✅ Tabla del 4:  
4 × 1 = 4  
4 × 2 = 8  
...  
4 × 10 = 40 
Hacerlo en JavsScript
*/
const prompt = require('prompt-sync')();
let NumeroEntero;

function VerificadorEnteroPositivo(NumeroEntero) {
    while(NumeroEntero<0||isNaN(NumeroEntero)){
        console.log("Por favor poner un número positivo:");
        NumeroEntero =prompt()
        if (NumeroEntero<0||isNaN(NumeroEntero)){
            console.log("Digito no valido, intente de nuevo")
        }
    }
    console.log("\n")
    return NumeroEntero;

}

NumeroEntero= VerificadorEnteroPositivo(NumeroEntero);
console.log(`\tTABLA DE MULTIPLICAR DE ${NumeroEntero}`)
for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${NumeroEntero} = ${i*NumeroEntero}`)
    
    
}
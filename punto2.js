/*Ejercicio 2: Verificación de Número Perfecto
📌 Descripción:
 ✔ Pedir al usuario un número entero positivo.
 ✔ Determinar si es un número perfecto (la suma de sus divisores propios es igual al número).
📌 Ejemplo:
Ingrese un número: 6  
✅ 6 es un número perfecto (1 + 2 + 3 = 6). 
*/
const prompt = require('prompt-sync')();
let NumeroEntero;

function VerificadorEnteroPositivo(NumeroEntero) {
    while(NumeroEntero<1||isNaN(NumeroEntero)){
        console.log("Por favor poner un número positivo mayor a 0:");
        NumeroEntero =prompt()
        if (NumeroEntero<1||isNaN(NumeroEntero)){
            console.log("Digito no valido, intente de nuevo")
        }
    }
    console.log("\n")
    return NumeroEntero;

}
function VerificadorNumeroPerfecto(NumeroVerificar) {

    let ArrayContador=[];
    for(let i  =0; i<NumeroVerificar;i++){
        if (NumeroVerificar%i==0){
            ArrayContador.push(i)
        }
    }
    return ArrayContador;
}
let contador =0;
NumeroEntero= VerificadorEnteroPositivo(NumeroEntero);
ArrayContador= VerificadorNumeroPerfecto(NumeroEntero);
ArrayContador.forEach(e => console.log(e) )
ArrayContador.forEach(e => contador+=e )
console.log(`= ${contador}`)
if (contador == NumeroEntero){
    console.log("✅ El número es perfecto")
}else{
    console.log("🚫 El número NO es perfecto")
}
/* 
Ejercicio 6: Filtro de Números Pares e Impares
📌 Descripción:
 ✔ Pedir al usuario 10 números.
 ✔ Separarlos en pares e impares y mostrarlos en dos listas.
📌 Ejemplo:
Ingrese los 10 números: [1, 4, 7, 8, 10, 15, 20, 23, 30, 33]  
✅ Pares: [4, 8, 10, 20, 30]  
✅ Impares: [1, 7, 15, 23, 33] 

*/

const prompt = require('prompt-sync')();
let NumeroEntero=[-1,-2];

function VerificadorEnteroPositivo(NumeroEntero, i) {
    while(NumeroEntero<0||isNaN(NumeroEntero)){
        console.log(`Por favor ingresa el ${i+1} número positivo:`);
        NumeroEntero =prompt()
        if (NumeroEntero<0||isNaN(NumeroEntero)){
            console.log("Digito no valido, intente de nuevo")
        }
    }
    return NumeroEntero;

}
for(let i =0;i<10;i++){
    NumeroEntero[i]= VerificadorEnteroPositivo(NumeroEntero,i);
}

console.log(`Lista 10 números [ ${NumeroEntero} ]`)
let NumeroEnteroPar=[]
let NumeroEnteroImpar=[]

for(let i =0; i<=NumeroEntero.length;i++){
    if(NumeroEntero[i]%2==0){
        NumeroEnteroPar.push(NumeroEntero[i])
    }else{
        NumeroEnteroImpar.push(NumeroEntero[i])
    }
}
console.log(`Lista números Par: [ ${NumeroEnteroPar} ]`)
console.log(`Lista números Impar: [ ${NumeroEnteroImpar} ]`)

/*
Ejercicio 8: Contador de Palabras en un Texto
📌 Descripción:
 ✔ Pedir al usuario un párrafo.
 ✔ Contar cuántas palabras tiene el texto.
📌 Ejemplo:
Ingrese un texto: Me gusta programar en Python  
✅ El texto tiene 5 palabras.

*/
const prompt = require('prompt-sync')();
let Parrafo = [];
console.log("Ingresar Parrafo: ");
Parrafo=prompt();
let ContadorPalabras=0;


for(let i=0; i<Parrafo.length;i++){
    if (Parrafo[i]==" "){
        ContadorPalabras++;
    }
}

/*
Parrafo.forEach(e=>{
    if(e==" ")ContadorPalabras++;
    })
*/

console.log(`Cantidad de palabras: ${ContadorPalabras+1}`)
console.log(`Cantidad de letras: ${Parrafo.length}`)
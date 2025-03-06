/*
Ejercicio 10: Ordenador de Lista de Nombres
📌 Descripción:
 ✔ Pedir al usuario 5 nombres.
 ✔ Ordenarlos alfabéticamente y mostrarlos.
📌 Ejemplo:
Ingrese 5 nombres: ["Pedro", "Ana", "Luis", "Carlos", "Sofía"]  
✅ Lista ordenada: ["Ana", "Carlos", "Luis", "Pedro", "Sofía"]
*/
const prompt = require('prompt-sync')();
let Nombres =[]
for (let i = 0; i<5;i++){
    Nombres [i]=prompt(`Ingresar nombre ${i+1}: `)
}

console.log(Nombres)
console.log(`✅ Lista ordenada: [ ${Nombres.sort()} ]`)
//Problema con primera letra minuscula - mayuscula donde la mayuscula es mayor

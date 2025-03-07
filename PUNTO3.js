
const prompt = require("prompt-sync")();

let saldo = 100000000;

function consultasaldo() {
    console.log(`Su saldo es ${saldo}.`);
}

function depositarsaldo() {
    let incremento = parseFloat(prompt("Ingrese el valor que desea incrementar a su cuenta:"))
    if (isNaN(incremento) || incremento < 0) {
        console.log("Error. Debe ingresar un número positivo.");
        return;
    }
    saldo += incremento;
    console.log(`Su saldo es ${saldo}.`);
}

function retirarsaldo() {
    let retiro = parseFloat(prompt("Ingrese el valor que desea incrementar a su cuenta:"))
    if (isNaN(retiro) || retiro < 0) {
        console.log("Error. Debe ingresar un número positivo.");
        return;
    }
    if (saldo<retiro) {
        console.log("Error. El valor solicitado es superior a su saldo disponible.");
        return;
    }
    saldo -= retiro;
    console.log(`Su saldo es ${saldo}.`);
}

band = true;
while (band) {

    console.log("\n Sistema de Gestion de Estudiantes")
    console.log("1.Consultar saldo")
    console.log("2.Depositar dinero")
    console.log("3.Retirar dinero")
    console.log("4.Salir")
    
    let menu = parseInt(prompt("Seleccione una opcion: "))

    switch (menu) {
        case 1:
            consultasaldo();
            break;
        case 2:
            depositarsaldo();
            break;
        case 3:
            retirarsaldo();
            break;
        case 4:
            console.log("Saliendo.")
            band = false;
            break;
        default:
            console.log("Opción no valida.")
    }

}
/* 
Estructura:
Inicio --> Expresion ----|---Case1 --->sentencia1
                         |---Case 2 --->sentencia2
                         |---Case 3 --->sentencia3 
                         |---Case 4  --->sentencia4

    para que los casos funcionen como lo esperamos, hay que agregar la sentencia Break al final de cada caso.
    va a ir comparando los casos, hasta que encuentre un "break" , si no lo encuentra
*/ 

let numero = 4;

let numeroTexto = "Valor desconocido";

switch(numero){
    case 1:
        numeroTexto = "numero uno";
        break; //para que se termine de ejecutar el switch , si lo agregamos y tenemos let numero = 1,se ejecuta hasta el caso q tenga break.

    case 2:
        numeroTexto = "numero dos";
        break;
    case 3:
        numeroTexto = "numero tres";
        break;
        case 4:
        numeroTexto = "numero cuatro";
        break;
    // default: //Puede ir al inicio o al final, en caso que no coincida con ningun caso, se ejecuta esta opcion.
    default: "texto no encontrado";
}
console.log(numeroTexto);
// function miFuncion(){
//     console.log("saludos desde funcion");        FUNCioN NORMAL 
// }
 
let miFuncion = function (){ //se puede aplicar hoisting
    console.log("saludos desde funcion");   
}

let miFuncionFlecha = () => {  //CON LAS FUNCIONES FLECHAS NO SE APLICA EL HOISTING, al definir una variable con "let" no se aplica hoisting
    console.log("saludos desde mi funcion flecha")
}

const miFuncionFlecha1 = () => {  //CON LAS FUNCIONES FLECHAS NO SE APLICA EL HOISTING, al definir una variable con "let" no se aplica hoisting
    console.log("saludos desde mi funcion flecha")
}

miFuncion();
miFuncionFlecha();
miFuncionFlecha1(); //Cuando usamos const una vez q asignamos la referencia a la variable de algun objeto, ya no podemos modificar la referencia.
// es la unica dif entre let y const



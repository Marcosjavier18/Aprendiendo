let miFuncion = function (){ //se puede aplicar hoisting
    console.log("saludos desde funcion");   
}

let miFuncionFlecha = () => {  //CON LAS FUNCIONES FLECHAS NO SE APLICA EL HOISTING, al definir una variable con "let" no se aplica hoisting
    console.log("saludos desde mi funcion flecha")
}




const miFuncionFlecha1 = () => console.log("saludos desde const func flecha");
miFuncionFlecha1();





const saludar = () =>{
    return "saludos desde funcion flecha";
}
console.log(saludar()) ;





const saludar1 = () => "saludos desde funcion flecha"
console.log(saludar1());


//------------ SI QUEREMOS REGRESAR UN OBJETO, DEFINIMOS LA CONSTANTE Y DEFINIMOS LA VARIABLE y la f.flecha y regresamos un objeto.
const regresaObjeto = () =>({nombre: "Juan",apellido:"Coca Cola"});
console.log(regresaObjeto());


const funcionConParametros1 = function(mensaje){
    console.log(mensaje);
}
funcionConParametros1("hola aca 1parame"); 

const funcionConParametros =(mensaje) => console.log(mensaje);
funcionConParametros("saludos con parametros");

const funcionConParametros2 = mensaje => console.log(mensaje);
funcionConParametros2("variable asd ghn");

//Unicamente regresa la suma.
funcionConVariosParametros = (op1,op2) => op1 + op2;  
console.log(funcionConVariosParametros(400,20));


funcionConVariosParametros2 = (op1,op2) => {
    let resultado = op1 + op2;
    return  `resultado: ${resultado}`;
}
console.log(funcionConVariosParametros2(250,20));




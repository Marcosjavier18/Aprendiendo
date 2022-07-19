"use strict"
let resultado = 2;

try{
    // x=10;
    if (isNaN(resultado)) throw 'No es un numero';
    else if(resultado === "") throw "es cadena vacia";
    else if(resultado >= 0 ) throw "valor positivo";
    else if(resultado <= 0 ) throw "Valor negativo";
}
catch(error){
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
finally{
    console.log("termina revision de errores ");
}
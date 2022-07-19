


miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log("funcion 1");
}

function miFuncion2(){
    console.log("funcion 2");
}


//Funcion tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}



sumar(5,3,imp);

        //llamada asincronas con uso setTimeout
function miFuncionCallback(){
    console.log("saludo asincrcono despues de 3 seg");
}
setTimeout(miFuncionCallback,3000); //son milisegundos,osea que se ejecuta despues de 3 segundos.


setTimeout(function(){console.log("saludo asincrono 2")},10000);


setTimeout(()=> console.log("mensaje asincrono3"),13000);

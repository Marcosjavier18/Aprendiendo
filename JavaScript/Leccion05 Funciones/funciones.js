//HOISTING: podemos definir la funcion en cualquier parte del programa, lo que hace hoisting es mover la definicion al principio de lafuncion para que se 
// ejecute siempre
miFuncion(4,2);

// declaracion de funcion
function miFuncion(a,b){
    console.log("suma: " + ( a + b ));
}

// llamando a la funcion
miFuncion(2,6);
miFuncion(10,-5);

// -------------------------------------------------------------------------------------------------------------------

            // Funcion Return
function miFunction(a,b){
    console.log(arguments.length);
    return a + b ; //a = 10 , b = 6
}
let resultado = miFunction(10,6);
console.log(resultado);



// -------------------------------------------------------------------------------------------------------------------

                        //FUNCION TIPO  EXPRESIOn
let sumar = function (a,b){return a + b};
resultado = sumar(400, 20);
console.log(resultado);


let resta = function(a,b,c){return a - b - c };
resultado = resta(400,200,80);
console.log(resultado);

// -------------------------------------------------------------------------------------------------------------------

                        // funcion tipo Self Invoking (funcion anonima) es anonima pero se pueded llamar a si misma
                        // no se pueded volver a llamar. es la unica vez q se puede mandar a llamar
(function (a,b){
    console.log("ejecutando la funcion: " + (a + b));
})(5 , 39);


console.log(typeof sumar);

// -------------------------------------------------------------------------------------------------------------------
        // Funcion o metodo es lo mismo, podedmos hacer la funcion en texto

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)
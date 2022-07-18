// FUNCION FLECHA
 /*     Si usamos "let" podemos cambiar el valor de la variable en cualquier momento, usando "const" ya no podemos cambiar la referencia 
 o valor que se le asigno */

// La cantidad de parametros no necesariamente debe coincidir con la cantidad de argumentos que estamos enviando
// cuando mandamos a llamar a la funcion


         //FUNCION TIPO  EXPRESIOn
         let sumar = function (a = 4 ,b = 5 ){
            console.log(arguments[0]);
            console.log(arguments[1]);
            console.log(arguments[2]);
            return a + b + arguments[2];
        };
// si no le pasamos argumentos a "a y b " aparecen como undefined
         resultado = sumar(416, 4, 117);
         console.log(resultado);
         
         
         let resta = function(a,b,c){return a - b - c };
         resultado = resta(400,200,80);
         console.log(resultado);
        //  FIN FUNCION TIPO EXPRESION




        
// const sumarFuncionTipoFlecha = (a,b) => a + b;
// resultado = sumarFuncionTipoFlecha(4,10);
// console.log(resultado);
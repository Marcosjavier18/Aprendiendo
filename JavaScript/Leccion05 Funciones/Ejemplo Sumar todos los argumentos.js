// Recordemos que en JS si no usamos la sintaxis de flecha, podemos usar el concepto de hoisting

let resultado = sumarTodo(5, 4, 13, 10, 20,10,  9);
console.log(resultado);


function sumarTodo (){
    let suma = 0;
    // con el ciclo recorremos todos los elementos que tiene el argumento
    for( let i=0 ; i < arguments.length ; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return  suma;
}
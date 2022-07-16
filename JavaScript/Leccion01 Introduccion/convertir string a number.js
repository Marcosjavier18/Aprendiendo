/* Vamos a ver como convertir string a number, es normal debido a que nuestros datos siempre se almacenan como tipo string

*/

let miNumero = "18";
// console.log(miNumero);
 console.log(typeof miNumero);


//  ejercicio para chequear si una persona tiene 18 o mas años , puede votar. si es menor no puede
let edad = Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar");
}

// MISMO EJERCICIO USANDO EL OPERADOR TERNARIO
let resultado = (edad >= 18) ? "puede votar " : "no puede votar";
console.log(resultado);
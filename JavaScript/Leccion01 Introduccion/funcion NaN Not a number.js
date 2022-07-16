// funcion isNaN -> NaN = Not a Number , si cambiamos el 18 por 18x , ver resultados.

let miNumero = "18";
// console.log(miNumero);
 console.log(typeof miNumero);


//  ejercicio para chequear si una persona tiene 18 o mas años , puede votar. si es menor no puede
let edad = Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un numero");
}
else{

    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("No puede votar");
    }

}
if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado = (edad >= 18) ? "puede votar " : "no puede votar";

    console.log(resultado);
}


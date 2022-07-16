// las variables son dinamicas pero podemos cambiar su valor en cualquier momento,
// la varible "typeof" nos muestra de que tipo es la variable


// tipo de dato string 
var name = "Marcos"; 
console.log(name);
console.log(typeof name);

name = 10;
console.log(typeof name);


// Tipo de dato numerico
var number = 420;
console.log(number);
console.log(typeof number);
// tipo de dato Object
var objeto = {
    name : "Juan",
    surname : "Perez",
    number : "123456789"
}
console.log(objeto);

console.log(typeof objeto);

//  TIPO DE DATO BOOLEANO
var bandera = false;
console.log(bandera)
console.log(typeof bandera)


// TIPO DE DATO function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// TIPO DE DATO symbol , se utiliza para crear un valor unico de una variable
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// tipo de dato undefined
var x;
console.log(x);


// tipo de dato null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// tipo de dato Array 
var autos = ["bmw","audi","volvo"];
console.log(autos);
console.log(typeof autos);

// tipo de dato Empty
var z = "";
console.log(z);
console.log(typeof z);

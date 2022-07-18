//           ----------------METODO GET

// class Persona {
//     constructor(nombre, apellido){
//         this._nombre = nombre; 
//         this._apellido = apellido;
//     }
//     get nombre(){
//         return this._nombre;
//     }
// }

// let persona1 = new Persona("Marcos", "Cucatto"); 
// console.log(persona1.nombre);
//  //Esto manda a llamar al metodo get. Esto es una buena practica

//           ----------------METODO SET


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}
let persona1 = new Persona("Marcos", "Cucatto"); 
persona1.nombre = "Javier Marcos "; //manda a llamar de manera indirecta el metodo set nombre("parametro que querramos")
console.log(persona1.nombre);
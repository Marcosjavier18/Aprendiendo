/* NO SE APLICA EL CONCEPTO DE HOISTING , esto quiere edcir que primero tenemos que definir la clase para poder utilizarla
en las funciones podemos llamar primero la funcion y despues definirla, porque se aplica el concepto de hoisting
*/ 




// let persona2 = new Persona("Marcos", "Cucaaaaa"); NO ES POSIBLE CREAR OBJETOS ANTES DE DECLARAR LA CLASE
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
console.log(persona1.nombre); //manda a llamar al metodo get
let persona2 = new Persona("Marcos", "Cucaaaaa");
console.log(persona2);
/* Podemos usar herencias para reutilizar codigo
Podemos usar las herencias para  heredar caracteristicas de una clase padre a una hija
Los diagramas de las imagenes como el de herencia, se hace con UML - Unified modeling lenguaje y se puede usar online
vamos a resolver el problema de la imagen "herencia.png"
*/


class Persona {   //ESTA ES LA CLASE PADRE
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
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido  = apellido;
    }
}


class Empleado extends Persona{ //CLASE HIJA
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}




let persona1 = new Persona("Javier", "Cucatto"); 
console.log(persona1);

let empleado1 = new Empleado("Jajaj","Probando","Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.apellido);
class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo:${this._sueldo} `;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
    
}

function imprimir(tipo){
    tipo.obtenerDetalles();
   console.log(tipo.obtenerDetalles());
    
}


let empleado1 = new Empleado("juan",3000)
let gerente1 = new Gerente("Carlos", 50000, "sistemas");

imprimir(empleado1);
imprimir(gerente1);

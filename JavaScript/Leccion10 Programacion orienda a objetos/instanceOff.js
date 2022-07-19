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
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
    
}

function determinarTipo(tipo){

   console.log(tipo.obtenerDetalles());
   if(tipo instanceof Gerente){ //Si cambiamos Gerente por Empleado engancha a los 2, empleado y gerente, comprobarlo
    console.log("Es un objeto de tipo Gerente"); //Dejamos primero la de  menor jerarquia.
    console.log(tipo.departamento);
   }
   else if(tipo instanceof Empleado){ 
    console.log("Es un objeto de tipo Empleado");
    console.log(tipo.departamento);
   }
   else if(tipo instanceof Object){ //Si cambiamos Gerente por Empleado engancha a los 2, empleado y gerente, comprobarlo
    console.log("Es un objeto de tipo Object");
   }
    
    
}


let empleado1 = new Empleado("juan",3000)
let gerente1 = new Gerente("Carlos", 50000, "sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);

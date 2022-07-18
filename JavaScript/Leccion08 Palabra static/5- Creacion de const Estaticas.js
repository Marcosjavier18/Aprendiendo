//No podemos usar const, vamos a usar un metodo estatico

class Persona { 
    //ESTA ES LA CLASE PADRE
  static contadorPersonas = 0; //ATRIBUTO DE CLASE

  static get MAX_OBJ(){
    return 5;
  }

  constructor(nombre, apellido){
      this._nombre = nombre; 
      this._apellido = apellido;
      if(Persona.contadorPersonas < Persona.MAX_OBJ){
      this.idPersona = ++Persona.contadorPersonas;
  }
  else{
      console.log("Se han superado el maximo de iteraciones.")
  }
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
  nombreCompleto(){
      return this._nombre + " " + this._apellido;
  }
          //Sobreescribiendo el metodo de la clase Padre (Object)
  toString(){
             //Se aplica polimorfimos (multiples formas en tiempo de ejecucion)
          // el metodo que se ejecuta depende si es una referenci de tipo padre o de tipo hijo
      return this.idPersona + " " + this.nombreCompleto();
  }
  static saludar(){
      console.log("saludos desde metodo static");
  }
  static saludar2(persona){
      console.log(persona.nombre + " , " + persona.apellido);
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
  nombreCompleto(){
      return super.nombreCompleto() + ", " + this._departamento;
  }
}




let persona1 = new Persona("Javier", "Cucatto"); 
console.log(persona1.toString()); //Arranca el contador en 0 pero hicimos un pre-incremento


let empleado1 = new Empleado("Jajaj","12356","Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);


        //const estaticas.
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ); 
//NO SE modifico porque usamos el metodo get y NO el metodo set. Esto funciona como una constante.

let persona3 = new Persona("Juan","Corigliano");
let persona4 = new Persona("Armando","Flores");
let empleado3 = new Persona("Laura","Quinteros");
console.log(persona3.toString());
console.log(persona4.toString());
console.log(empleado3.toString());
//Solo se agrega el contador cuando el contador de personas es menor a la constante que definimos estaticamente.




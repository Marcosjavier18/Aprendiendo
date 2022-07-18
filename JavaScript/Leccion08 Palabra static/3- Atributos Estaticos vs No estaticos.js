class Persona { 
    //ESTA ES LA CLASE PADRE
  static contadorObjetosPersona = 0; //ATRIBUTO DE CLASE
  email = "valor default email";//Atributo de nuestros objetos

  constructor(nombre, apellido){
      this._nombre = nombre; 
      this._apellido = apellido;
      Persona.contadorObjetosPersona++;
      console.log("Se incrementa contador :" + Persona.contadorObjetosPersona);
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
      return this.nombreCompleto();
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
console.log(persona1.toString());


let empleado1 = new Empleado("Jajaj","12356","Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);


console.log(persona1.nombreCompleto());
console.log(empleado1.nombreCompleto());
         
              //to string
console.log(empleado1.toString());
console.log(persona1.toString());

              //palabra static
// persona1.saludar(); No es posible llamar a un metodo sattis desde un objeto, pero si de un clase, pero si le podemos pasar un argumento 
// q sea un objeto
Persona.saludar(); //sale en consola solamente
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

      //ATRIBUTOS ESTATICOS
      // si queremos usarla por medio de un objeto , en este caso persona1
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

//Esto quiere decir que las clases hijas tambien heredan los atributos
console.log(Empleado.contadorObjetosPersona); 


        //ATRIBUTO NO ESTATICO
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);

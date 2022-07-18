/* Una clase es una plantilla, vamos a definir atributos y metodos que queremos que contengan nuestros objetos
a partir de esta clase o plantilla vamos a poder crear instancias. un Objeto es una instancia de una clase.

Persona(clase) -----> Marcos(Objeto)
               |-----> Armando(objeto)

Un objeto ya puede tener valores en sus atributos, en este caso el nombre "Marcos",
Pero cuando creamos una clase, esta no tiene valores. Y si lo contiene, se van aplicar a todos los objetos que se creen.
la idea de la clase es que sea una platilla , y a partir de esta plantilla poder crear instancias, en este caso
vamos a crear objetos que son instancias de las clases.
        IMAGEN EN LA CARPETA, MIRARLA !
*/

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre; //this.nombredepropiedad O atributodeclase = nombredelparametro, a la propiedad le aplicamos el parametro
        this.apellido = apellido;
    }
}

let persona1 = new Persona("Marcos", "Cucatto"); //new Persona(); instancia de clase o Objeto
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
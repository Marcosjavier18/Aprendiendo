// creacion objeto {}
let persona = {
    nombre: "juan",
    apellido: "perez",
    mail: "jjperez@gmail.com",
    edad: 18,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido + " " + this.edad;
    },
    miFuncion: function(){
    }
}
//  Agregamos la propiedad tel
persona.tel = "2995971214";
persona.tel1 = "4914458"

console.log(persona);


// borramos la propiedad tel
delete persona.tel;
delete persona.tel1;
console.log(persona);

                 // FORMAS DE IMPRIMIR EN PANTALLA 
                // La forma mas sencilla es Concatenar cada valor de cada propiedad
console.log( persona.nombre + " , " + persona.apellido);

                // for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

                //Objetc, nos devuelve el arreglo pero como un array

let personaArray = Object.values(persona);
console.log(personaArray);


                //JSON.stringify nos convierte el objeto a una cadena
let personaString = JSON.stringify( persona );
console.log(personaString);
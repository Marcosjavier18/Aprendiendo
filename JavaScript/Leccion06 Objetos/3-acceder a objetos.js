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

console.log(persona.nombre);
console.log(persona["apellido"]);


//for in
for( nombrePropiedad in persona){
    // accedemos a los nombres de lasa propiedades
    console.log(nombrePropiedad);
    //accedemos al valor de la propiedad
    console.log(persona[nombrePropiedad])
}
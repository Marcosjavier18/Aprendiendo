let x = 10;
console.log(x.length);

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
console.log(persona.nombreCompleto());


console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.mail);
console.log(persona);

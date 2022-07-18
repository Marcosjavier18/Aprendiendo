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



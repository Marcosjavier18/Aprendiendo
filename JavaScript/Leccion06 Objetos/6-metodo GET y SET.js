// Get = Obtener   , Set = Establecer, modificar

// creacion objeto {}
let persona = {
    nombre: "juan",
    apellido: "perez",
    mail: "jjperez@gmail.com",
    edad: 18,
    idioma: "us_mx",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido + " " + this.edad;
    },
    miFuncion: function(){
    }
}

    // Para poder leer la info anteponemos get

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = "inglessssssss";
console.log(persona.lang); //*Llama al metodo get
console.log(persona.idioma); //Aca seteamos la conversion a mayuscula

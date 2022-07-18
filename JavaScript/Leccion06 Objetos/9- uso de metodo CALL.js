let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    mail: "123456@gmail.com",
    nombreCompleto: function(titulo , tel){
        return titulo + " : " + this.nombre + " " + this.apellido + ", " +  this.mail + " ," + tel ; 
    }
}


let persona2 ={
    nombre: "Julieta",
    apellido: "Cualquiera",
    mail : "julietasdasd@gmail.com"
}

//uso de Call para usar el metodo persona1.nombreCompleto con los datos

console.log(persona1.nombreCompleto("Lic.", "456123789"));

console.log(persona1.nombreCompleto.call(persona2, "Ing", "123456789"));


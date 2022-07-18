/* DIFERENCIAS ENTRE CALL Y APLY:
EN CALL SE LE PASAN LOS ARGUMENTOS COMO VALORES, Y EN APPLY SE APLICAN LOS VALORES EN UN ARRAY Y SE PASA ESA VARIABLE */

let persona1 = {
    nombre: "Marcos",
    apellido: "Perez",
    mail: "123456@gmail.com",
    nombreCompleto: function(titulo,tel){
        return titulo + " : " + this.nombre + " " + this.apellido + ", " +  this.mail + " ," + tel ; 
    }
}


let persona2 ={
    nombre: "Julieta",
    apellido: "Cualquiera",
    mail : "julietasdasd@gmail.com"
}

                //uso de APPLY para usar 

console.log(persona1.nombreCompleto("Ing" , "987654321"));

let arreglo = ["Lic", "123456789"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));


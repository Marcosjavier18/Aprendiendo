const persona = {
    nombre : "Marcos",
    apellido : "Cucatto",
    edad : 18
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = "Frito";
    p1.apellido = "Fritolin";
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

const personas = [
    new Persona("Marcos","Cucatto"),
    new Persona("Karla","Gggg"),
    new Persona("hola","nuevonnombre")
];

function mostrarPersonas(){
    console.log("Mostrar personas ejecutando");
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`; // += sirve para concatenar y que se forme una cadena
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersonas(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" & apellido.value != "" ){
        const persona = new Persona(nombre.value , apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log("no hay informacion que agregar")
    }
}
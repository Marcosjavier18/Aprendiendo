let miPromesa = new Promise((resolved,rejected ) => {
    let expresion = true;
    if(expresion)
        resolved("Resolvio correcto");
    else
        rejected("Se produjo un error");
    
});

// miPromesa.then(valor => console.log(valor), error => console.log(error));
/* miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));  */

let promesa = new Promise((resolved) => {
    console.log("Inicio de promesa");
    setTimeout( ()=> resolved("saludos con promesa y timeout"), 5000);
    console.log("Fin de promesa");
});

promesa.then(valor => console.log(valor));

/* La ventaja de trabajar con promesa es que trabajamos con codigo asincrono  . El texto de console.log se imprime primero y luego el de setTimeout.
 podemos verlo en la consola.. Nuestra promesa puede tener cierto codigo y adentro ejecutar otro codigo.
 Otra ventaja es que podemos trabajar con una promesa dentro de otra . asique una promesa puede recibir como respuesta el resultado de otra promesa,
 serian como una cadena de promesas.
 
 */


                        // PALABRA ASYNC , nos va a facilitar utilizar promesas
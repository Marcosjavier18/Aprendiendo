let promesa = new Promise((resolved) => {
    // console.log("Inicio de promesa");
    setTimeout( ()=> resolved("saludos con promesa y timeout"), 5000);
    // console.log("Fin de promesa");
});

// promesa.then(valor => console.log(valor));


// Async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return "saludos con promesa y async";
}
// miFuncionConPromesa().then(valor => console.log(valor));




// --------------- FUNCION ASYNC/AWAIT: no podemos usar await si no usamos async.
// Await lo que hace es esperar el resultado de una promesa
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolved => {
        resolved("Promesa con await");
    });
    console.log(await miPromesa);
}

// funcionConPromesaYAwait();


// --------------------- FUNCION CON TIMEOUT AWAIT Y AYNC;
async function funcionConPromesaAwaityTimeout(){
    console.log("inicio de funcion");
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved("promesa con await y timeout"),4500);
    })
    console.log(await miPromesa);
    console.log("fin de funcion");
}

funcionConPromesaAwaityTimeout();
console.log("aplicacion Calculadora");

// SI LO DEJJAMOS ASI SE CONCATENAN LOS VALORES SOLAMENTE, COMPROBARLO.
// function sumar(){
//     const forma = document.getElementById("forma");
//     let operandoA = forma["operandoA"];
//     let operandoB = forma["operandoB"];
//     let resultado = operandoA.value + operandoB.value
//     document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
// }

// la funcion parseInt transforma los valores a tipo Numerico

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
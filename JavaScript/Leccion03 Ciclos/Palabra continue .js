for(let contador = 0; contador < 10; contador ++){
    if(contador % 2 !== 0){
        console.log(contador);
        continue; //Significa ir a la siguiente iteracion 
    }
    else{
        console.log(contador);
    }
}
console.log("Fin de ciclo for")
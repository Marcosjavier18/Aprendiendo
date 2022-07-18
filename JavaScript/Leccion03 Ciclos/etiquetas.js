// Las etiquetas nos sirven para ir a la parte del programa que deseemos
inicio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){

        continue; //Significa ir a la siguiente iteracion 
}
console.log(contador);
}
console.log("Fin de ciclo for");
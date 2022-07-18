// el ciclo for tiene 3 zonas for(a,b,c), a= declaramos nuestras variables, b = condicion . c=

/*let contador = 0;

for(let contador = 5; contador < 10; contador ++){
    console.log(contador);
}
console.log("Fin Ciclo For"); */

for(let contador = 1; contador < 10; contador ++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log("Fin de ciclo for")
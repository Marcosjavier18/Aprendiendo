// operador AND (&&), regresa True solo si ambos operandos son true, en otro caso da False

let a = 9;
let valMin = 0 , valMax = 10;

if(a >= valMin &&  a <= valMax){
    console.log("Se encuentra en el rango");
}
else{
    console.log("No se encuentra en el rango");
} 


// OPERADOR OR (||) , ejemplo... Regresa True si cualquiera de los operandos es True. Si los dos son Falso, devuelve Falso.
// cambiar entre true y false las vacaciones y diadescanso para ver los resultados y como funciona.

let vacaciones = false, diaDescanso = true;

if(vacaciones || diaDescanso){
    console.log("Si tiene vacaciones");
}
else{
    console.log("No tiene vacaciones");
}
/* 
6am-11am - buenos dias
12pm-18pm - buenas tardes
19-24pm - buenas noches
0am-6am - durmiendo
*/ 

let horaDia = 10;
let mensaje;

if (horaDia >= 6 && horaDia <= 11 ){
    mensaje = "Buenos dias"
}
else if(horaDia >= 12 && horaDia <= 18){
    mensaje =  "Buenas Tardes"
}
else if(horaDia >= 19 && horaDia <= 24){
    mensaje =  "Buenas noches"
}
else if(horaDia >= 0 && horaDia <= 6){
    mensaje = "durmiendo"
}
else{
    "Valores incorrectos"
}

console.log(mensaje)
// let autos = new Array("VMW", "volvo", "mercedez benz");  vieja forma de armar arreglos, la de abajo es la forma mas reciente y mas usada
const autos = ["VMW", "volvo", "mercedez benz"];
console.log(autos);


autos[0];
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0 ; i < autos.length; i++){
    console.log(i + ' : ' +autos[i])
}


    // Modificamos el elemento de un array
autos[1] = "Marcos Cucatto";
console.log(autos[1]);



            // formas de agregar elementos a un array
autos.push("coca cola"); //La funcion push nos permite agregar elementos a un arreglo
 console.log(autos);


 console.log(autos.length);


 autos[autos.length] = "Lol";
 console.log(autos);


 autos[6] = "frito";
 console.log(autos);

 console.log(typeof autos);

 console.log(Array.isArray(autos));

 console.log(autos instanceof Array);
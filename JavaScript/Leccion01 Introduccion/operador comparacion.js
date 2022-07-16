let a = 10, b = 5, c = "10";

let z = ( a == b ); //el == sirve de comparacion. revisa sin importar el tipo
console.log(z);

console.log();

z = a === c; //revisa los valores pero tambien los tipos.
console.log(z);


z = a == c;
console.log(z);


                    // OPERADORES DISTINTO A !=

let x = a != c;     // sirve de comparacion. revisa sin importar el tipo
console.log(x);

x = a !== c;        //revisa los valores pero tambien los tipos.
console.log(x);


                // OPERADORES RELACIONALES

let h = a < b;
console.log(h);

z = a <= c;
console.log(z);

z = a > c;
console.log(z);

z = a >= c;
console.log(z);

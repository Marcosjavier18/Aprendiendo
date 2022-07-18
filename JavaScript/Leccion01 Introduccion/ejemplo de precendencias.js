let x = 5;
let y = 10;
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);


z = ++x + --y;
console.log(z);

let resultado = 4 + 5 * 6 / 3;   // por precedencia van en el orden 5*6/3 = 10 y se le suma el 4 al final. = 14
console.log(resultado);


resultado = (4 + 5) * 6 / 3;
console.log(resultado);
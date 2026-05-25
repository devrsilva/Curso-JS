//IEEE 754-2008
let num1 = 0.7; //Number
let num2 = 0.1; //Number

// num1 = num1 + num2
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

/*
console.log(num1.toString() + num2);
num1 = num1.toString();
console.log(num1.toString(2)); //Converte para número binário
console.log(num1.toFixed(2)); //Arredonda o número com duas casas decimais. toFixed(4) arredonda o número com 4 casas decimais.
console.log(Number.isInteger(num1)); //Verifica se o número é inteiro
console.log(Number.isNaN(temp));
let temp = num1 + "5";
console.log(temp);
*/

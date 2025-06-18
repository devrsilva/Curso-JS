//Exercício 1: Soma de três números
// Solicita ao usuário três números e exibe a soma deles

let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número: ");
let num3 = prompt("Digite mais um número: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let resultado = num1 + num2 + num3;
alert("O resultado da soma é: " + resultado);

//Exercicio 2
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

//Esse jeito que vc fez é o mais correto, mas tem outros jeitos de fazer
let temp = varA; // Armazena o valor de varA em uma variável temporária
// Aqui nao poderia ser const?
// Sim, mas se fosse const, nao poderia mudar o valor depois
// varA = varB; // A recebe o valor de B

varA = varB; // A recebe o valor de B
varB = varC; // B recebe o valor de C
varC = temp; // C recebe o valor de A

console.log(varA, varB, varC);

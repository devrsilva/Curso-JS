//IEEE 754-2008 // Padrão de representação de números em ponto flutuante
let num1 = 0.7;
let num2 = 0.1;

num1 = (num1 * 100 + num2 * 100) / 100; // 0.8
num1 = (num1 * 100 + num2 * 100) / 100; // 0.9
num1 = (num1 * 100 + num2 * 100) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1)); // Verifica se é um número inteiro (true ou false)

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); // Converte para binário
//console.log(num1.toFixed(2)); // Arredonda para duas casas decimais
//Entre parenteses, você pode colocar o número de casas decimais que deseja
//console.log(Number.isInteger(num1)); // Verifica se é um número inteiro (true ou false)
// let temp = num1 * "5"; // Multiplicação com string
// console.log(Number.isNaN(temp)); // Verifica se é NaN (Not a Number)
//True para não é um número, false para isso é um número

//Resumo da aula:
// - IEEE 754-2008
// - Padrão de representação de números em ponto flutuante
// - Problemas com precisão em operações com números de ponto flutuante
// - Métodos para contornar problemas de precisão
// - Conversão de números para string e binário
// - Verificação de números inteiros
// - Arredondamento de números
// - Verificação de NaN (Not a Number)
// - Multiplicação com string

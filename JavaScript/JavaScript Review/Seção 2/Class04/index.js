//Não pode criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST

/*
const nome = "Mario";
console.log(nome);
*/

// + - * /
/*
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof (primeiroNumero + segundoNumero));
*/

//Exercício - Const e Let
const nome = "Creusa Maria";
const sobrenome = " De Moraes Pereira Ferreira";
const idade = 23;
const peso = 68.79;
const alturaEmM = 1.72;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2026 - idade;

console.log(nome + sobrenome, "tem", idade, "anos e pesa", peso, "kg.");
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(nome, "nasceu em", anoNascimento);

// ECMAScript 2015 (ES6) = JavaScript
// Pode redeclarar variáveis quando se utiliza VAR

//Dados Primitivos

//String, number, undefined, null, boolean
const nome = "Romeo"; //string
const nome1 = `Romeo`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //Undefined -> Não aponta pra local nenhum na memória
const sobrenomealuno = null; //Nulo -> Não aponta pra local nenhum na memória.
const aprovado = false; //Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2

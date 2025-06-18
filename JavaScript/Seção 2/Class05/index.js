// Tipos de dados primitivos
// String - Number - Undefined - Null - Boolean - Symbol
const nome = "João"; // String
const num1 = 30; // Number
const num2 = 1.75; // Number
let nomeAluno; // Undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Null -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true ou false

// Operadores Aritméticos, de atribuição e incremento
/*Aritmeticos
 * () Prioridade
 * ** Potenciação
 * * Multiplicação
 * / Divisão
 * % Resto da divisão
 * + Adição / Concatenação
 * - Subtração
const num3 = 15;
const num4 = 2;
const num5 = 9;
console.log(num3 + num4 - num5);
//console.log(num3 ** num4);

let contador = 10; // {Melhor forma}
contador++;
console.log(contador);
*/

// Operadores de atribuição
/*
let contador = 10;
contador += 5; // Adiciona 5
console.log(contador);
contador -= 3; // Subtrai 3
console.log(contador);
contador *= 2; // Multiplica por 2
console.log(contador);
contador /= 4; // Divide por 4
console.log(contador);
*/
//Qual diferença entre ++contador e contador++?
// ++contador incrementa antes de usar o valor, enquanto contador++ incrementa depois de usar o valor.

//NaN - Not a Number | parseInt(inteiro), parseFloat/(decimais)
/*
const num6 = 10;
const num7 = parseInt("5.2"); // Converte string para inteiro
console.log(num6 + num7); // 15
*/

/*const num6 = 10;
const num7 = parseFloat("5.2"); // Converte string para numero decimal
console.log(num6 + num7);
console.log(typeof num7);
*/

const num8 = 10;
const num9 = Number("5"); // Converte string para numero
console.log(num8 + num9);
console.log(typeof num9);

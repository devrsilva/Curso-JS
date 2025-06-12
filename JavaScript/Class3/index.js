/*
Não podemos criar variáveis com palavras reservadas do JavaScript
let let
let console
let if
Não podemos criar variáveis com nomes que já existem
let nome
function nome() {}

Variáveis precisam ter nomes siginificativos
Forma incorreta           |Forma correta de nomear variáveis:
let n = "João";           | let nomeCliente = "João";
console.log(n); // João   | console.log(nomeCliente); // João

Não podemos começar o nome de uma variável com números
let 1nome = "João"; // Forma incorreta
let nome1 = "João"; // Forma correta

Não pod conter espaços ou traços no nome da variável
let nome cliente = "João"; // Forma incorreta
let nome-cliente = "João"; // Forma incorreta

Utilizamos camelCase para nomear variáveis
let nomeCompleto = "João Pereira da Silva Lemos"; // Forma correta

Case-sensitive: JavaScript diferencia maiúsculas de minúsculas
*/

let nomeCliente = "João";
let nomecliente = "Carlos";

console.log(nomeCliente, nomecliente);

/*
Não podemos redeclarar variáveis com let
NÃO UTILIZAR VAR, UTILIZAR LET


let nome; //Declaração de variável
nome = "João"; //Inicialização da variável
console.log(nome); // João
nome = "Ryan"; //Reatribuição da variável
console.log(nome); // Ryan

let nome = "João"; //Declaração e inicialização da variável
console.log(nome); // João
console.log(nome, "nasceu em 1990");
console.log("Em 2000", nome, "conheceu Maria");
console.log(nome, "casou-se com Maria em 2010");
console.log("Maria teve 1 filho com", nome, "em 2015");
console.log("O filho de", nome, "se chama Pedro");


o que é uma variavel let?
let é uma palavra-chave usada para declarar(criar) variáveis em JavaScript.
*/

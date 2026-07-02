/*
VALORES PRIMITIVOS E VALORES DE REFERÊNCIA
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor copiados

Referência (mutável) - array, object, function - Passados por referência 
*/

const a = {
  nome: "Thiago",
  sobrenome: "Bernardes",
};
const b = a;

b.nome = "João";
console.log(a);
console.log(b);

/*
let a = "A";
let b = a;
console.log(a, b);

a = "Outra coisa";
console.log(a, b);
*/

//For in - Estrutura de repetição
//For in -> lê os índices ou chaves do objeto
//                0        1      2

const pessoa = {
  nome: "Ryan",
  sobrenome: "Silva",
  idade: 18,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

/*
const frutas = ["Pêra", "Maçã", "Uva"];

for (let index in frutas) {
  console.log(frutas[index]);
}

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
*/

// --- --- --- ---
//For of - Estrutura de repetição
const nomes = ["Ryan", "Carlos", "Marcia"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("####");

for (let i in nomes) {
  console.log(nomes[i]);
}

console.log("####");

for (let valor of nomes) {
  console.log(valor);
}

//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)

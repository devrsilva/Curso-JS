//For - Clássico - Estrutura de repetição

/*
console.log("Linha 0");
console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");
console.log("Linha 4");
console.log("Linha 5");

i - index
for (let i = -100; i <= 50; i += 5) {
  console.log(`Linha ${i}`);
}

i += 10 --> vai de 10 em 10

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "ímpar";
  console.log(i, par);
}
*/

const frutas = [
  "Maçã",
  "Pêra",
  "Uva",
  "Banana",
  "Laranja",
  "Melancia",
  "Caju",
  "Kiwi",
  "Morango",
  "Abacaxi",
];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}

// While e Do While

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("#######");

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

/*
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
*/

// --- --- ---
// Break e Continue
// Continue continua para a próxima iteração
// Break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

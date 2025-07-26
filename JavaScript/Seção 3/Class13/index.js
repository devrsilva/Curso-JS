// --- Exercicios de Lógica de Programação ---

//      Exercicio 1:
//Escreva uma função que recebe 2 números e retorna o maior deles.
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maiorNumero(10, 20)); // Deve retornar 20
console.log(maiorNumero(30, 15)); // Deve retornar 30
console.log(maiorNumero(5, 5)); // Deve retornar 5 (são iguais)

// --- --- --- ---

//      Exercicio 2:
//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080)); // Deve retornar true
console.log(ePaisagem(1080, 1920)); // Deve retornar false
console.log(ePaisagem(800, 600)); // Deve retornar true

// --- --- --- ---

//      Exercicio 3:
/*Escreva uma função que recebe um número e 
Retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivel por 3 e 5 = Retorna o prório número
Checar se o número é realmente um número = Retorna o próprio número 
Use a função com número de 0 a 100
*/
function fizzBuzz(numero) {
  if (typeof numero !== "number") {
    return "Não é um número";
  }
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
}

console.log("a", fizzBuzz("a"));
for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
// --- --- --- ---

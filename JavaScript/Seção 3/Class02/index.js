// --- Avaliação de Curto-Circuito(Short-Circuit) ---
/*
&& -> false && true -> false "o valor mesmo"
|| -> true or false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi() {
//   return "Oi";
// }

// const vaiExecutar = "Joãozinho";

// console.log(vaiExecutar && falaOi());

// --- if, else if e else (1) ---
/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

// const hora = 50;

// if (hora >= 0 && hora <= 11) {
//   console.log("Bom dia");
// } else if (hora >= 12 && hora <= 17) {
//   console.log("Boa tarde");
// } else if (hora >= 18 && hora <= 23) {
//   console.log("Boa noite");
// } else {
//   console.log("Olá");
// }

// --- if, else if e else (2) ---
const numero = 11;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
  console.log("O número está entre 9 e 11.");
} else {
  console.log("O número não está entre 0 e 11.");
}

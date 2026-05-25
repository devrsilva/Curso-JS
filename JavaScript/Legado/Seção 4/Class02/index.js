//Parâmetros da Função
// arguments que sustenta todos os argumentos enviados
function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);

// ---- ---- ---- ----
function funcao(a, b = 2, C = 4) {
  console.log(a + b + C);
}
funcao(2, null, 20);

// ---- ---- ---- ----
function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: "Ryan", sobrenome: "Silva", idade: 18 };
funcao(obj);

// ---- ---- ---- ----
function funcao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao(["Ryan Silva", "Dias", 18]);

// ---- ---- ---- ----
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta("*", 1, 13, 33, 9, 52);

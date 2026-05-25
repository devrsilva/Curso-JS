// ---- Retorno da função ----
// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}
function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 2);

// ---- ---- ---- ----
document.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

// ---- ---- ---- ----
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa("Ryan", "Silva");
const p2 = {
  nome: "Daniel",
  sobrenome: "Carvalho",
};

console.log(p1);
console.log(p2);

// ---- ---- ---- ----
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

// ---- ---- ---- ----
function criaMultiplicador(multiplicador) {
  // Multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(4));

// ---- Escopo Léxico ----
const nome = "Marcelo";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Miranda";
  falaNome();
}
usaFalaNome();

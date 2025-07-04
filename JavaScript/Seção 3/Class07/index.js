//Diferenças entre var e let/const
const verdadeira = true;

//let tem escopo de bloco { ... bloco }
//var só tem escopo de função

/*
let nome = "Luiz"; // criando
var nome2 = "Luiz"; // criando

if (verdadeira) {
  let nome = "Otávio"; //criando
  var nome2 = "Rogério"; //redeclarando

  if (verdadeira) {
    var nome2 = "Ronaldo"; //redeclarando
    let nome = "Outra coisa";
  }
}

console.log(nome,nome2);


function falaOi() {
  if (verdadeira) {
    let nome = "Luiz";
    var sobrenome = "Miranda";
  }
  console.log(sobrenome);
}

falaOi();

let sobrenome = "Miranda";  
console.log(sobrenome); 
*/

//Atribuição via desestruturação (Arrays)
// ... rest, ... spread
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

//Atribuição via desestruturação (Objetos)
const pessoa = {
  nome: "Ryan",
  sobrenome: "Silva",
  idade: 18,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

//Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);

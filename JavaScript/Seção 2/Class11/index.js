//Funções em JavaScript

// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }

// const resultado = soma(4, 2);
// console.log(resultado);

// const raiz = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// // Arrow function
// const raizArrow = (n) => n ** 0.5;
// console.log(raizArrow(9));

//Objetos

const pessoa1 = {
  nome: "Ryan",
  sobrenome: "Silva",
  idade: 19,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

//                        //Parâmetros
// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Ryan", "Silva", 19);
// const pessoa2 = criaPessoa("Luiz", "Otávio", 25);
// const pessoa3 = criaPessoa("Maria", "Carvalho", 99);
// const pessoa4 = criaPessoa("Betânia", "Jesus", 84);
// const pessoa5 = criaPessoa("Mario", "Mesquita", 56);

// console.log(pessoa5.nome, pessoa5.sobrenome);

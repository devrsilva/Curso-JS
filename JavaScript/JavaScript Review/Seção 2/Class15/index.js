//OBJETOS
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Casemiro",
  idade: 68,

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

/*
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Caio", "Otavio", 37);
const pessoa2 = criaPessoa("Junior", "Carvalho", 7);
const pessoa3 = criaPessoa("Catia", "Macedo", 26);
const pessoa4 = criaPessoa("Pedro", "Henrique", 23);
const pessoa5 = criaPessoa("Hugo", "Santiago", 48);

console.log(pessoa1.nome, pessoa5.nome);
*/

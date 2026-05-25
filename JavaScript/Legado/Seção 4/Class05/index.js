// Funções imediatas (IIFE)
// (IIFE) -> immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Silva";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Ryan"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);

// ---- ---- ---- ----

// Funções fábrica (Factory Functions)
// Construtor function (Função Construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando sobre NADA") {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("Ryan", "Silva", 1.7, 50);
const p3 = criaPessoa("Mário", "Gonzales", 1.79, 67);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

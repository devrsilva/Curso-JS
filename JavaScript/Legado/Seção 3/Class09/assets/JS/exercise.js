const elementos = [
  { tag: "p", texto: "Sapien erat leo nec tortor finibus" },
  { tag: "div", texto: "Augue eleifend ipsum ultrices aliquam luctus neque." },
  { tag: "footer", texto: "euismod magnis conubia lobortis pulvinar." },
  { tag: "section", texto: "nam iaculis lectus vestibulum natoque euismod." },
];

const container = document.querySelector(".container");

const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i]; //Desestruturação
  const elemento = document.createElement(tag); //Cria o elemento da tag correspondente
  elemento.innerText = texto; //Adiciona o texto
  div.appendChild(elemento); // Coloca os elementos dentro da div
}

container.appendChild(div); // Coloca a div dentro do container

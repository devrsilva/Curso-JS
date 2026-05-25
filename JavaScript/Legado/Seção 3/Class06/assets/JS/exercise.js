function formataDataCompleta(data) {
  const opcoes = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dataFormatada = data.toLocaleDateString("pt-BR", opcoes);
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dataFormatada}\n${hora}`;
}

const div = document.getElementById("data-hora");
const agora = new Date();
div.innerText = formataDataCompleta(agora);

// --- OUTRA FORMA ---
/*
const div = document.querySelector(".container");
const data = new Date();
const opcoes = {
  dateStyle: "full",
  timeStyle: "short",
};

div.innerHTML = data.toLocaleString("pt-BR", opcoes);
*/

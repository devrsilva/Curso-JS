const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

//Função para formatar o tempo no formato 00:00:00
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

//Inicia o cronômetro
function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

//Evento de Iniciar
iniciar.addEventListener("click", function () {
  clearInterval(timer); // evita múltiplos timers
  relogio.style.color = "black"; // volta a cor para preta se estiver pausado
  iniciaRelogio();
});

// Evento de Pausar
pausar.addEventListener("click", function () {
  clearInterval(timer);
  relogio.style.color = "red"; // deixa o texto de vermelho
});

// Evento de Zerar
zerar.addEventListener("click", function () {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  relogio.style.color = "black"; // volta a cor para preta
  segundos = 0;
});

const form = document.querySelector("#formulario");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputPeso = form.querySelector("#peso");
  const inputAltura = form.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verificações de peso
  if (!peso) {
    setResultado("Peso inválido (Digite apenas números)", false);
    return;
  }
  if (peso < 18.5 || peso > 600) {
    setResultado("Peso fora do intervalo permitido (18,5kg a 600kg)", false);
    return;
  }

  // Verificações de altura
  if (!altura) {
    setResultado("Altura inválida (Digite apenas números)", false);
    return;
  }
  if (altura <= 0 || altura > 3) {
    setResultado("Altura fora do intervalo permitido (Até 3 metros)", false);
    return;
  }

  const imc = calculaIMC(peso, altura);
  const nivelImc = classificaIMC(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true);
});

function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function classificaIMC(imc) {
  if (imc >= 39.9) return "Obesidade Grau 3";
  if (imc >= 34.9) return "Obesidade Grau 2";
  if (imc >= 29.9) return "Obesidade Grau 1";
  if (imc >= 24.9) return "Sobrepeso";
  if (imc >= 18.5) return "Peso Normal";
  return "Abaixo do Peso";
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado"); // Sucesso (ex: verde)
  } else {
    p.classList.add("bad"); // Erro (ex: vermelho)
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

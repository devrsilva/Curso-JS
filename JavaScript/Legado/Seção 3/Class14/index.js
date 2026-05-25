//Tratando e Lançando Erros (try, catch, throw)
function dividirNumeros(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Os parâmetros devem ser números.");
    }
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  }
}
// o que é try, catch e throw?
// try: bloco de código que pode gerar um erro
// catch: bloco de código que trata o erro
// throw: lança um erro manualmente
// Exemplo de uso
console.log(dividirNumeros(10, 2)); // 5
console.log(dividirNumeros(10, 0)); // Erro: Divisão por zero não é permitida.
console.log(dividirNumeros(10, "a")); // Erro: Os parâmetros devem ser números.
console.log(dividirNumeros("a", "b")); // Erro: Os parâmetros devem ser números.

// ---- ---- ---- ----
//Tratando e Lançando Erros (try, catch, finally)

try {
  //É executada quando não há erros
} catch (e) {
  //É executada quando há erros
} finally {
  //Sempre
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  //Tratar erro
  //console.log(e)
} finally {
  console.log("Tenha um bom dia.");
}

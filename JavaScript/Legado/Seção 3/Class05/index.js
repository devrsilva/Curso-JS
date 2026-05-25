//Switch/Case
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

const data = new Date("2006-11-29 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

// if (diaSemana === 0) {
//   diaSemanaTexto = "Domingo";
// } else if (diaSemanaTexto === 1) {
//   diaSemanaTexto = "Segunda";
// } else if (diaSemanaTexto === 2) {
//   diaSemanaTexto = "Terça";
// } else if (diaSemanaTexto === 3) {
//   diaSemanaTexto = "Quarta";
// } else if (diaSemanaTexto === 4) {
//   diaSemanaTexto = "Quinta";
// } else if (diaSemanaTexto === 5) {
//   diaSemanaTexto = "Sexta";
// } else if (diaSemanaTexto === 6) {
//   diaSemanaTexto = "Sábado";
// } else {
//   diaSemanaTexto = "";
// }

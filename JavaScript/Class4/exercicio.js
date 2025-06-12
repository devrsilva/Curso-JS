const nome = "Ryan";
const sobrenome = "Silva";
const idade = 19;
const peso = 52;
const alturaEmM = 1.75;
let imc;
let anoDeNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoDeNascimento = 2025 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg,");

console.log(`Tem ${alturaEmM} de altura e seu IMC é ${imc}`);

console.log(`${nome} nasceu em ${anoDeNascimento}.`);

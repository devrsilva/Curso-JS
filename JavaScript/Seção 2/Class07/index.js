//Mais sobre strings
/*
let umaString = "Um texto";
let umaString = "Um 'texto'";
Ou let umaString = 'Um \"texto\"';
let umaString = 'Um //texto'; -> SAIDA: Um //texto

console.log(umaString.indexOf("texto")); // Retorna a posição do primeiro caractere da string
console.log(umaString.lastIndexOf("texto")); // Retorna a posição do último caractere da string

console.log(umaString.concat(" em", " um", " lindo dia!"));
console.log(umaString + " em um lindo dia!");
console.log(`${umaString} em um lindo dia!`);
*/

let umaString = " O rato roeu a roupa do rei de Roma. ";

//console.log(umaString.slice(-5, -1)); // Retorna uma parte da string do índice -5 ao -1
//console.log(umaString.substring(umaString.length - 5)); // Retorna uma parte da string do índice -5 ao final
//console.log(umaString.length); // Retorna o tamanho da string
//console.log(umaString.replace(/r/g, "#")); // Substitui todas as ocorrências de 'r' por '#'
//console.log(umaString.split("r")); // O valor selecionado não é incluído no array
console.log(umaString.toUpperCase()); // Converte a string para maiúsculas
console.log(umaString.toLowerCase()); // Converte a string para minúsculas
console.log(umaString.trim()); // Remove espaços em branco no início e no final da string

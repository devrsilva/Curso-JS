//Arrays
// Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável.
// Eles são definidos por colchetes [] e os valores são separados por vírgulas.

//                 0       1        2           3      4
const alunos = ["João", "Maria", "José"]; // Luiza, Eduardo

console.log(typeof alunos); // Exibe o tipo do array (object, pois em JavaScript arrays são objetos)
console.log(alunos instanceof Array); // Verifica se alunos é uma instância de Array (true)

// alunos.push("Luiza"); // Adiciona "Luiza" no final do array
// alunos.push("Eduardo"); // Adiciona "Eduardo" no final do array

// console.log(alunos.slice(0, -2)); //Se eu quero ate o 2° elemento eu coloco ate o 3° pois o slice não inclui o último elemento

// console.log(alunos[20]); // Acessa o elemento na posição 20 (undefined, pois não existe)

// delete alunos[1]; // Remove o segundo elemento do array
// console.log(alunos[1]); // Acessa o segundo elemento do array (undefined, pois foi deletado)

// alunos.shift(); // Remove o primeiro elemento do array
// alunos.pop(); // Remove o último elemento do array
// console.log(alunos);

// alunos.unshift("Luiza"); // Adiciona no começo do array
// alunos.unshift("Fábio");

// alunos.push("Otávio");
// alunos.push("Carla"); // Adiciona no final do array

// alunos[alunos.length] = "Lucas"; //Adiciona no final do array
// alunos[alunos.length] = "Pedro";
// alunos[alunos.length] = "Fábio";

// alunos[0] = "Pedro"; // Modifica o primeiro elemento do array
// alunos[4] = "Lucas"; // Adiciona no final do array

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]); // Acessa o terceiro elemento do array

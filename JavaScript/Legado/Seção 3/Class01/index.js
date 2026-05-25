//Operadores de Comparação
/*
> Maior que
>= Maior que ou igual a 
< Menor que 
<= Menor que ou igual a 
=== Igualdade estrita (valor e tipo) 
!== Diferente estrito (valor e tipo)
*/

const num1 = 10; //Number
const num2 = "10"; //String ->> Agora daria true pois sao diferentes
// const num2 = 10; //Number ->> Daria False pois são iguais

const comp = num1 !== num2;
console.log(comp);

// console.log(10 > 5); //True or False
// const comp = 10 > 5;
// console.log(comp);

//Operadores Lógicos
/*
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  -> OU -> Um retornando verdadeiro TODA a expressão passa a ser verdadeira
!  -> NOT -> NÃO
*/

// -- && AND --
const expressaoAnd = true && true && false && true;
//Retorna false pois TODAS precisam ser true

// -- || OR --
const expressaoOr = true || false;
// false || true -> Saída: Verdadeira
// false || false -> Saída: Falsa
//Se apenas uma delas retornar verdadeira a expressão completa retorna true
console.log(expressaoOr);

// -- ! NÃO --
console.log(!true); //(!!true)  -> Volta a ser Verdadeiro
console.log(!false); //(!false) -> Volta a ser Falso

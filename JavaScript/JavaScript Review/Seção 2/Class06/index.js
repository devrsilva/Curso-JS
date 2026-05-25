//Operadores Aritméticos, de atribuição e incremento

/**
 * (**) -> Potenciação                  |Ordem de Prioridade
 *Aritméticos                           |**
 * + Adição / Concatenação              | * / %
 * - / (*) -> Multiplicação             | + -
 * % Resto da Divisão                   |
 
Incremento = ++
Decremento = --

Operadores de Atribuição
**= -> Potenciação
*=  -> Multiplicação
*/

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
contador++; //6
console.log(contador);

let contador02 = 10;
console.log(--contador02); // 9
console.log(--contador02); // 8

let contador03 = 0;
contador03 += 4;
contador03 += 4;
contador03 += 4;
contador03 += 4;
console.log(contador03);

let contador04 = 3;
contador04 *= 3;
contador04 *= 3; //Multiplicação
contador04 *= 3;
contador04 *= 3;
console.log(contador04);

let contador05 = 2;
contador05 **= 10; //Potenciação
console.log(contador05);

//NaN - Not a Number
//ParseInt (inteiro), parseFloat(decimais), Number - executa direto, sem precidar diferenciar

const num1 = 0;
const num2 = "José";
console.log(num1 * num2);

const num23 = 10;
const num43 = parseInt("5.2"); //Vai somar 10 + 5, sem somar com a casa decimal
console.log(num23 + num43);
console.log(typeof num43);

const num11 = 10;
const num22 = parseFloat("5.2"); //Vai somar o 10 + 5.2
console.log(num11 + num22);
console.log(typeof num2);

const num07 = 10;
const num08 = Number("5.3");
console.log(num07 + num08);
console.log(typeof num08);

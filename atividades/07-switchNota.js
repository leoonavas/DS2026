/* 
🧠 Desafio de Programação – Sistema de Média Escolar
🎯 Objetivo


Criar um programa em JavaScript que calcule a média final de um aluno e informe sua situação no final do ano.


📌 Regras do programa
1. O programa deve receber 4 notas (de 0 a 10).
2. Calcular a média das notas.
3. Informar a situação do aluno de acordo com a média:


Média                   Situação
menor que 5             Reprovado
entre 5 e 6.9           Recuperação
maior ou igual a 7      Aprovado
*/

function obterMedia(n1, n2, n3, n4) {
    let calc = (n1 + n2 + n3 + n4) / 4

    return calc
}

let nota = Math.ceil(obterMedia(10, 7, 5, 4));
console.log("Sua média: ", nota)
console.log("\nResultado Final:")
switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Reprovado");
    break;

    case 5:
    case 6:
        console.log("Recuperação");
    break;

    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Aprovado");
    break;

    default: 
        console.log("Primo.")
    break;
}


// Resolução Castello:
/* 
🧠 Desafio de Programação – Sistema de Média Escolar Switch Case
🎯 Objetivo


Criar um programa em JavaScript com switch case que calcule a média final de um aluno e informe sua situação no final do ano.


📌 Regras do programa
1. O programa deve receber 4 notas (de 0 a 10).
2. Calcular a média das notas.
3. Informar a situação do aluno de acordo com a média:


Média                   Situação
menor que 5             Reprovado
entre 5 e 6.9           Recuperação
maior ou igual a 7      Aprovado


*/


let n1 = 7;
let n2 = 8;
let n3 = 6;
let n4 = 5;


// Calculando a média
let media = (n1 + n2 + n3 + n4) / 4;


//Usando switch case com boolean (true)
switch (true) {
  case media < 5:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Reprovado");
    break;


  case media < 7:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Recuperação");
    break;


  case media >= 7:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Aprovado");
    break;


  default:
    console.log("Erro no cálculo");
    break;
}


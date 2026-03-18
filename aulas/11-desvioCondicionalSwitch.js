// O Switch e Case trata-se de uma decisão usada quando queremos comparar o valor de uma variavel com vários possíveis resultados.
// REGRA DO CASTELLO: Se tiver mais de 3 comparadores, faça um switch case.

// Exemplo 1: Menu
// Neste exemplo a variavel menuSelecionado guardará o nome de uma opção de menu
// O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "Redes sociais";

switch (menuSelecionado) {
    case "Home":
        console.log("Bem-vindo");
    break;
    case "Quem somos":
        console.log("Sou o Milior");
    break;
    case "Contato":
        console.log("Número:");
    break;
    case "Redes sociais":
        console.log("Instagram: @samuel_golcontra2023");
    break;
    case "Pague um café":
        console.log("Doe 1 real ;)");
    break;
    default:
        console.log("Opção incorreta.");
    break;
}

/* 
            🧠 Desafio: Descobrindo o Trimestre


Você deverá criar um programa em JavaScript que identifique em qual trimestre do ano um determinado mês está.


📌 Regras do desafio
O programa deve receber um número de 1 a 12 representando o mês.
Utilize a estrutura switch case para resolver.
Exiba no console em qual trimestre o mês informado se encontra:


Mês                     Trimestre
1, 2, 3                 Primeiro trimestre
4, 5, 6                 Segundo trimestre
7, 8, 9                 Terceiro trimestre
10, 11, 12              Quarto trimestre
*/

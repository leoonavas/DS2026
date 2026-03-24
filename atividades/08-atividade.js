/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

// *********************************************************************
// Exercício 1 (Comentado):

// var matriz = [
//     [3, 5, 8],
//     [1, 9, 2],
//     [7, 1, 4],
// ]

// for (let linha = 0; linha < matriz.length; linha++) {
//     for (let coluna = 0; coluna < matriz[0].length; coluna++) {
//         switch (true) {
//             case (coluna == 0 && linha == 0):
//             case (coluna == 1 && linha == 1):
//             case (coluna == 2 && linha == 2):
//                 console.log("Elementos da diagonal (Direita para esquerda):")
//                 console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna])
//             break;
//         }
//         switch (true) {
//             case (coluna == 2 && linha == 0):
//             case (coluna == 1 && linha == 1):
//             case (coluna == 0 && linha == 2):
//                 console.log("Elementos da diagonal (Esquerda para direita):");
//                 console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna])
//             break;
//         }
//     }
// }
    

// Exercicio 2:
var matriz = [
    [ 8, 1, 3 ],
    [ 2, 9, 1 ],
    [ 4, 6, 2 ],
]
// Na diagonal, ele percorre assim: 0,0 - 1,1 - 2,2
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        console.log("Coluna:", coluna, "| Linha:", linha, "| Valor:", matriz[linha][coluna], "| Valor vezes 3 =", matriz[linha][coluna] * 3)
    }
}
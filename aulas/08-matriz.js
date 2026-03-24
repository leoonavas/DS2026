// Criando uma matriz:
// var matriz = [
//     [9, 0, 1],
//     [7, 1, 2],
//     [6, 2, 8],
//     [1, 3, 9],
// ];

// console.table(matriz);

// Obtendo elemento com base e seus indíces.

/*********************************************************
1. Crie uma matriz 3x3
2. Imprima os valores da diagonal principal.
3. Altere os valores do item matriz[1][2] para 20 e matriz[2][0] para 30.

*********************************************************/

var matriz = [
    [1, 9, 5],
    [3, 4, 8],
    [2, 6, 5],
];
console.table(matriz);
for (let i = 0; i < 3; i++) {
    for (let i2 = 0; i2 < 3; i2++) {
        matriz[1][2] = 20;
        matriz[2][0] = 30;
        console.log("X =", i, "| Y =", matriz[i][i2]);
    }
}
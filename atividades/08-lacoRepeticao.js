// Dado um vetor, calcule e exiba a quantidade de pares e de impares.

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
// let somaPar = 0;
// let somaImpar = 0;

// for (let i = 0; i < numeros.length - 1; i++) {
//     let indiceAtual = numeros[i]
//     if ((indiceAtual % 2) == 0) {
//         somaPar = somaPar + 1
//     } else {
//         somaImpar = somaImpar + 1
//     }
// }

// console.log(somaPar)
// console.log(somaImpar)


// Atividade 2: Multiplique todos elementos do vetor por 3.

// for (let i = 0; i < numeros.length; i++) {
//     let indiceAtual = numeros[i];
//     console.log("Número atual do indice:" , i, "| Valor do elemento: ", indiceAtual, "| Resultado da multiplicação por 3:", indiceAtual * 3);
// }


// Atividade 3: 

let matriz = [
    [8, 4, 1],
    [3, 7, 8],
];
console.table(matriz);

for (let i = 0; i < 2; i++) {
    for (let i2 = 0; i2 < 3; i2++) {
        console.log("X =", i, "| Y =", matriz[i][i2]);
    }
}

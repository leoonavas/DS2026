/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

let frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

let indiceUva = frutas.indexOf("Uva");
frutas.splice(indiceUva, 1);
console.table(frutas);

let copiaFrutas = frutas.slice(2, 5);
console.table(copiaFrutas);
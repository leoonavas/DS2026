// Operadores de incremento e decremento | pré e pós incremento.
// incremento = aumentar algo | somar algo a alguma variavel.
// decremento = diminuir algo | subtrair algo a alguma variavel.

let lines = "\n===================================================\n"
console.log(lines);

let idade = 16;
console.log(idade)

// idade = idade + 1 // somei 1 na idade.
idade++;
console.log(idade);
console.log(lines);
// idade++
idade = idade - 1 // somei 1 na idade.
console.log(idade)

let novaIdade = idade++
console.log(lines)
console.log("Idade: ", idade, "| Nova Idade: ", novaIdade)
console.log(lines)

novaIdade = idade++;
console.log("Idade: ", idade, "| Nova Idade: ", novaIdade)
console.log(lines)

// o idade++ soma na mesma variavel, ou seja, não funciona usar novaIdade = idade++;


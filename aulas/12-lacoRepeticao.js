// LAÇO DE REPETIÇÃO - FOR (PARA)

let linhas = "\n=============================================\n"

function lines(text) {
    if (!text) {
        console.log(linhas)
    } else {
        console.log(linhas + text + ":\n")
    }
}

// 1º parametro = valor inicial do for, pode ser uma variavel já definida, ou
// uma nova variavel criada.
// 2º parametro = limite do for, onde ele vai parar, ou seja, condicional para
// que ele se repita.
// 3º parametro = aumenta a variavel, de quanto em quando o valor inicial deve-se
// aumentar.
for (let i = 0; i < 1000; i++) {
    console.log("Eu vou prestar atenção nas aulas e anotar tudo!")
} // Com esse código, ele vai usar o console.log 1000 vezes. Se o i++ avançasse de 
// 2 em 2, ele imprimiria 500, ou se a condição fosse até 500, ou, caso o valor inicial
// fosse 500.

// Outro exemplo:
let idade = 16;
for (idade; idade < 90; idade++) {
    console.log("Feliz aniversário de", idade, "anos.");
} // Aqui é um exemplo com uma variavel de idade.
// Caso o último parametro não faça o valor inicial aumentar, ele cria um loop
// infinito.

// Imprimindo números de 1 a 20 utilizando for, para evitar 20 linhas de console.log.
for (let i = 1; i < 21; i++)
{
    console.log(i);
} // O enunciado pedia que fosse do 1 ao 20, por isso começamos com o valor inicial
// sendo 1, o valor final foi 21, pois o indice do for, começa com 0, se deixasse
// i < 20 ele iria imprimir até o 19.
// Mas, também poderia ser utilizado um i <= 20; Que ao invés de travar no 19, iria
// travar quando se igualasse.

lines("Escrevendo do 1 ao 20 (Somente números pares)") // separando conteúdo

// Escrevendo todos números pares entre 1 e 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) console.log(i)
    // % -> resto da divisão
    // i % 2 == 0 -> se o resto da divisão de i por 2 for 0, ele mostra i. 
}


// Dado um vetor, calcule e exiba o somatório de seus elementos
lines("Somando vetores usando for")

var numeros = [ 5, 6, 8, 14, 0, 6, 9, 7, 2];
var somaFinal = 0;
for (let index = 0; index < numeros.length - 1; index++) {
    var elements = numeros[index];
    var nextElement = numeros[index + 1]

    console.log(elements, "+", nextElement, "=", elements + nextElement)
    var somaFinal = somaFinal + (elements + nextElement)
}
console.log(somaFinal)
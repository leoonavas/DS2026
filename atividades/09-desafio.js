// 📌 Regras Gerais:
// Utilizar JavaScript
// Utilizar console.log() e/ou console.table()
// Sempre que indicado, utilizar laço for (OBRIGATÓRIO)
// Código deve estar organizado e indentado
// Não utilizar métodos prontos como map, filter, reduce (quando envolver lógica com laço)



// PARTE 1 – Variáveis, Operações e Lógica (1 a 10)
// 1. Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
function e(num) {
    console.log("\n==================================================")
    console.log("Exercício: " + num + ".\n")
}
e("1")
var nome = "Samuel Vasconcelos";
var idade = 18;
var cidade = "Jaú-SP"
console.log("Olá, eu me chamo", nome, "tenho", idade, "anos e moro em", cidade);
// 2. Crie duas variáveis numéricas e exiba:
//       soma
//       subtração
//       multiplicação
//       divisão
//       resto da divisão
function conta(n1, n2, tipo) {
    let resultado;
    switch (tipo) {
        case ("%"):
            resultado = n1 % n2;
        break;
        case "x":
            resultado = n1 * n2;
        break;
        case "/":
            resultado = n1 / n2;
        break;
        case "+":
            resultado = n1 + n2;
        break;
        case "-":
            resultado = n1 - n2;
        break;
    }
    console.log("Conta: ", n1, tipo, n2, "=", resultado)
}
e("2")

conta(100, 50, "-");
conta(2, 2, "x");
conta(3, 1, "%");
conta(12, 12, "+");
conta(8, 2, "/")
// 3. Calcule a área de um retângulo.

// Area do retangulo: a = b x h
e("3")
let base = 20;
let altura = 35;
let area = base * altura
console.log("Base: ", base, "| Altura: ", altura, "| Area total: ", area);

// 4. Calcule o volume de um paralelepípedo.
e("4")

// Formula: Comprimento x Altura x Largura = Volume.
let comprimento_paralelepipedo = 30;
let altura_paralelepipedo = 5;
let largura_paralelepipedo = 20;
let volume_paralelepipedo = (comprimento_paralelepipedo * altura_paralelepipedo * largura_paralelepipedo)
console.log("Altura:", altura_paralelepipedo, "| Largura:", largura_paralelepipedo, "| Comprimento:", comprimento_paralelepipedo, "| Volume total:", volume_paralelepipedo);

// 5. Dado o valor de um produto, calcule: 10% de desconto | valor final
e("5");
let valor_produto = 129.99;
let valor_desconto = 10;
let valor_final = (valor_produto - (valor_produto * valor_desconto / 100))
console.log("Preço do produto:", valor_produto, "| Valor de desconto:", valor_desconto.toFixed(2), "| Valor Final:", valor_final.toFixed(2))

// 6. Converta temperatura de Celsius para Fahrenheit.
// Fórmula: (Celsius * 9/5) + 32
e("6");
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius + "°C equivalem a", fahrenheit, "°F");


// 7. Calcule o IMC e exiba o valor.
// Fórmula: IMC = peso / (altura * altura)
e("7");
let peso = 80;
let altura_pessoa = 1.80;
let imc = peso / (altura_pessoa * altura_pessoa);
console.log("Peso:", peso, "kg | Altura:", altura_pessoa, "m | IMC:", imc.toFixed(2));


// 8. Calcule a média de 3 notas.
e("8");
let n1 = 8.5;
let n2 = 7.0;
let n3 = 9.0;
let media = (n1 + n2 + n3) / 3;
console.log("Notas: " + n1 + ", " + n2 + ", " + n3, "| Média Final: " + media.toFixed(1));


// 9. Calcule o delta de uma equação de 2º grau.
// Fórmula: Delta = b² - 4ac
e("9");
let a = 1;
let b = -5;
let c = 6;
let delta = (b * b) - (4 * a * c);
console.log("Valores: a=" + a + ", b=" + b + ", c=" + c + " | Delta:", delta);


// 10. Dado um valor em horas, converta para minutos e segundos.
e("10");
let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(horas + " hora equivalem a:");
console.log(minutos + " minutos");
console.log(segundos + " segundos");

// PARTE 2 – Condicionais (IF) (11 a 20)
// 11. Verifique se um número é positivo, negativo ou zero.
e("11");
let numero_11 = 1;
if (numero_11 >= 1) {
    console.log("O número " + numero_11, "é positivo");
} else if (numero_11 <= (-1)) {
    console.log("O número " + numero_11, "é negativo");
} else {
    console.log("O número é zero.");
}
// 12. Verifique se um número é par ou ímpar.
e("12")
let numero_12 = 7;
if (numero_12 % 2 == 0) {
    console.log("O número", numero_12, "é PAR.")
} else {
    console.log("O número", numero_12, "é IMPAR.")
}

// 13. Dado um número, verifique se é múltiplo de 3.
e("13")
function isMultiploDe3(numero) {
    if (numero % 3 == 0) console.log("O número", numero, "é MULTIPLO DE 3");
    else console.log("O número", numero, "NÃO É MULTIPLO DE 3");
}
isMultiploDe3(12);

// 14. Verifique se um aluno foi:
//        Aprovado (≥ 7)
//        Recuperação (≥ 5 e < 7)
//        Reprovado (< 5)
e("14")
function aprovado(nota) {
    if (nota >= 7) console.log("O aluno tirou", nota, "e foi APROVADO.");
    else if (nota >= 5 && nota < 7) console.log("O aluno tirou", nota, "e está de RECUPERAÇÃO.")
    else console.log("O aluno tirou", nota, "e foi REPROVADO.")
}
aprovado(8)

// 15. Verifique se uma pessoa pode votar (use regras reais).
e("15")
function podeVotar(idade) {
    if (idade >= 16 || idade >= 70) console.log("O cidadão possui", idade, "anos e tem o voto OPCIONAL.")
    else if (idade >= 18) console.log("O cidadão possui", idade, "anos e tem o voto OBRIGATORIO.")
    else console.log("O cidadão possui", idade, "anos e NÃO PODE VOTAR.")
}
podeVotar(16)
// 16. Verifique se um número está entre 10 e 50.
e("16")
function entreNumeros(numero) {
    if (numero >= 10 && numero <= 50) console.log("O número", numero, "está entre 10 e 50.")
    else console.log("O número", numero, "NÃO ESTÁ ENTRE 10 E 50")
}
entreNumeros(13)

// 17. Crie um sistema de login simples (usuário e senha).
e("17")
function login(user, senha) {
    let real_user = "leonavas";
    let real_senha = "cristianodepaula123"

    if (real_user === user && real_senha === senha) {
        console.log("Logado com sucesso! Bem vindo,", user)
    } else {
        console.log("Credenciais inválidas ou incorretas.")
    }
}
login("leonavas", "cristianodepaula123")
// 18. Verifique o maior entre dois números.
e("18")
function qualMaior(n1, n2) {
    if (n1 > n2) console.log("O número", n1, "é MAIOR que o", n2)
    else console.log("O número", n2, "é MAIOR que o número", n1)
}
qualMaior(20, 25)
// 19. Verifique o maior entre três números.
// 20. Classifique a idade:
//        Criança
//        Adolescente
//        Adulto
//        Idoso

// PARTE 3 – Switch Case (21 a 25)
// 21. Dado um número de 1 a 7, exiba o dia da semana.
// 22. Dado um mês (1 a 12), exiba o nome do mês.
// 23. Dado um mês, informe o trimestre.
// 24. Crie um menu simples:
//        1: Somar
//        2: Subtrair
//        3: Multiplicar
//        4: Dividir
// 25. Sistema de avaliação:
//        A → Excelente
//        B → Bom
//        C → Regular
//        D → Ruim

// PARTE 4 – Laço FOR (26 a 35) 🚨
// (TODOS DEVEM USAR for)
// 26. Exiba números de 1 a 100.
// 27. Exiba números de 100 até 1.
// 28. Exiba apenas números pares de 1 a 50.
// 29. Exiba apenas números ímpares de 1 a 50.
// 30. Calcule a soma de 1 até 100.
// 31. Calcule o fatorial de um número.
// 32. Exiba a tabuada de um número.
// 33. Conte quantos números pares existem entre 1 e 100.
// 34. Exiba todos os múltiplos de 5 entre 0 e 100.
// 35. Crie um programa que desenhe no console:
//        *
//        **
//        ***
//        ****
//        *****

// PARTE 5 – Vetores (36 a 42) 🚨
// (USAR for)
// 36. Crie um vetor com 10 números e exiba todos.
// 37. Calcule a soma dos elementos do vetor.
// 38. Calcule a média do vetor.
// 39. Encontre o maior valor do vetor.
// 40. Encontre o menor valor do vetor.
// 41. Conte quantos números são pares e ímpares.
// 42. Multiplique todos os elementos por 2.

// PARTE 6 – Matrizes (43 a 50) 🚨
// (USAR for ANINHADO)
// 43. Crie uma matriz 3x3 e exiba todos os valores.
// 44. Exiba a diagonal principal de uma matriz.
// 45. Exiba a diagonal secundária.
// 46. Some todos os elementos da matriz.
// 47. Encontre o maior valor da matriz.
// 48. Multiplique todos os valores por um número X.
// 49. Conte quantos valores são maiores que 10.
// 50. Crie uma matriz e exiba no formato:
// [ 1 2 3 ]
// [ 4 5 6 ]
// [ 7 8 9 ]
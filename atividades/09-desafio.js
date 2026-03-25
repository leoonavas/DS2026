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
e("19")
function qualMaior2(n1, n2, n3) {
    switch (true) {
        case (n1 > n2 && n1 > n3):
            console.log("O número", n1, "é MAIOR que", n2, "e", n3)
        break;
        case (n2 > n1 && n2 > n3):
            console.log("O número", n2, "é MAIOR que", n1, "e", n3)
        break;
        case (n3 > n2 && n3 > n1):
            console.log("O número", n3, "é MAIOR que", n2, "e", n1)
        break;
    }
}
qualMaior2(1, 2, 3)

// 20. Classifique a idade:
//        Criança
//        Adolescente
//        Adulto
//        Idoso
e("20")
function faixaEtaria(idade) {
    let faixa;
    switch (true) {
        case (idade < 3):
            faixa = "Bebê"
        break;
        case (idade < 12):
            faixa = "Criança"
        break;
        case (idade >= 13 && idade <= 18):
            faixa = "Adolescente"
        break;
        case (idade >= 18 && idade <= 60):
            faixa = "Adulto"
        break;  
        default:
            faixa = "Idoso"
        break;
    }
    console.log("Idade:", idade, "| Faixa Etária:", faixa);
}
faixaEtaria(21)

// PARTE 3 – Switch Case (21 a 25)
// 21. Dado um número de 1 a 7, exiba o dia da semana.
e("21")
function diaDaSemana(dia) {
    let nome;
    switch (dia) {
        case 1:
            nome = "Domingo"
        break;
        case 2:
            nome = "Segunda-feira"
        break;
        case 3:
            nome = "Terça-feira"
        break;
        case 4:
            nome = "Quarta-feira"
        break;
        case 5:
            nome = "Quinta-feira"
        break;
        case 6:
            nome = "Sexta-feira"
        break;
        case 7:
            nome = "Sábado"
        break;
    }
    console.log("Número:", dia, "| Dia da semana:", nome)
}
diaDaSemana(7)
// 22. Dado um mês (1 a 12), exiba o nome do mês.
e("22")
function qualMes(num) {
    let nome;
    switch (num) {
        case 1:
            nome = "Janeiro"
        break;
        case 2:
            nome = "Fevereiro"
        break;
        case 3:
            nome = "Março"
        break;
        case 4:
            nome = "Abril"
        break;
        case 5:
            nome = "Maio"
        break;
        case 6:
            nome = "Junho"
        break;
        case 7:
            nome = "Julho"
        break;
        case 8:
            nome = "Agosto"
        break;
        case 9:
            nome = "Setembro"
        break;
        case 10:
            nome = "Outubro"
        break;
        case 11:
            nome = "Novembro"
        break;
        case 12:
            nome = "Dezembro"
        break;
    }
    console.log("Número:", num, "| Mês:", nome)
}
qualMes(8)
// 23. Dado um mês, informe o trimestre.
e("23")
function qualTrimestre(mes) {
    let trimestre;
    switch (mes) {
        case 1:
        case 2:
        case 3:
            trimestre = 1
        break;
        case 4:
        case 5:
        case 6:
            trimestre = 2
        break;
        case 7:
        case 8:
        case 9:
            trimestre = 3
        break;
        case 10:
        case 11:
        case 12:
            trimestre = 4
        break;
    }
    console.log("Mês:", mes, "| Trimestre:", trimestre)
}
qualTrimestre(3)

// 24. Crie um menu simples:
//        1: Somar
//        2: Subtrair
//        3: Multiplicar
//        4: Dividir
e("24")
function menu(n1, n2, tipo) {
    let resultado;
    let type;
    switch (tipo) {
        case "+":
            resultado = n1 + n2
            type = "Adição"
        break;
        case "-":
            resultado = n1 - n2
            type = "Subtração"
        break;
        case "*":
            resultado = n1 * n2
            type = "Multiplicação"
        break;
        case "/":
            resultado = n1 / n2
            type = "Divisão"
        break;
    }

    console.log("*******MENU MATEMATICA********")
    console.log("Operação matemática:", type)
    console.log(n1, tipo, n2, "=", resultado)
    console.log("******************************")
}   
menu(1, 2, "+")
// 25. Sistema de avaliação:
//        A → Excelente
//        B → Bom
//        C → Regular
//        D → Ruim
e("25")
function avaliacao(char) {
    let final;
    switch (char) {
        case "A":
            final = "Excelente"
        break;
        case "B":
            final = "Bom"
        break;
        case "C":
            final = "Regular"
        break;
        case "D":
            final = "Ruim"
        break;
    }
    console.log("Nota:", char, "| Avaliação:", final)
}
avaliacao("A")
// PARTE 4 – Laço FOR (26 a 35) 🚨
// (TODOS DEVEM USAR for)
// 26. Exiba números de 1 a 100.
e("26")
for (let i = 1; i < 101; i++) {
    console.log("Número:", i)
}
// 27. Exiba números de 100 até 1.
e("27")
function v27() {
    for (let i = 100; i >= 1; i--) {
        console.log("Número:", i)
    }
}
v27();
// 28. Exiba apenas números pares de 1 a 50.
e("28")
function soPar() {
    for (let i = 0; i < 51; i++) {
        if (i % 2 == 0) console.log("Número:", i)
    }
}
soPar()
// 29. Exiba apenas números ímpares de 1 a 50.
e("29")
function soImpar() {
    for (let i = 0; i < 51; i++) {
        if (i % 2 == 1) console.log("Número:", i)
    }
}
soImpar()
// 30. Calcule a soma de 1 até 100.
e("30")
function calcSoma() {
    let soma = 0;
    for (let i = 0; i < 100; i++) {
        console.log(soma, "+", i, "=", soma + i)
        soma = soma + i
    }
    console.log("Soma final (1 a 100):", soma)
}
calcSoma()
// 31. Calcule o fatorial de um número.
e("31")
function calcFatorial(num) {
    let resultado = 1;
    for (let i = num; i > 1; i--) {
        resultado *= i
    }
    console.log("Número:", num, "| Fatorial:", resultado)
}
calcFatorial(10)
// 32. Exiba a tabuada de um número.
e("32")
function tabuada(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(num, "x", i, "=", num * i);
    }
}
tabuada(10)
// 33. Conte quantos números pares existem entre 1 e 100.
e("33")
function quantosPar() {
    let soma = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) soma += 1
    }
    console.log("Números par (1 a 100):", soma)
}
quantosPar()
// 34. Exiba todos os múltiplos de 5 entre 0 e 100.
e("34")
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
// 35. Crie um programa que desenhe no console:
//        *
//        **
//        ***
//        ****
//        *****
e("35")
for (let i = 0; i < 6; i++) {
    console.log('*'.repeat(i));
}

// PARTE 5 – Vetores (36 a 42) 🚨
// (USAR for)
// 36. Crie um vetor com 10 números e exiba todos.
e("36")
var matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function v36() {
    console.table(matriz)
}
v36()
// 37. Calcule a soma dos elementos do vetor.
e("37")
function v37() {
    let soma = 0;
    for (let i = 0; i <= matriz.length - 1; i++) {
        let num = matriz[i]
        soma = soma + num
    }
    console.log("Soma da matriz:", soma)
}
v37()
// 38. Calcule a média do vetor.
e("38")
function v38() {
    let soma = 0;
    for (let i = 0; i <= matriz.length - 1; i++) {
        let num = matriz[i]
        soma = soma + num
    }
    let media = soma / matriz.length
    console.log("Soma total:", soma, "| Média:", media)
}
v38()
// 39. Encontre o maior valor do vetor.
e("39")
function v39() {
    let maior = matriz[0]
    for (let i = 0; i < matriz.length; i++) {
        let num = matriz[i]
        if (num > maior) {
            maior = num
        }
    }
    console.log("Maior número:", maior)
}
v39()
// 40. Encontre o menor valor do vetor.
e("40")
function v40() {
    let menor = matriz[0]
    for (let i = 0; i < matriz.length; i++) {
        let num = matriz[i]
        if (num < menor) {
            menor = num
        }
    }
    console.log("Menor número:", menor)
}
v40()
// 41. Conte quantos números são pares e ímpares.
e("41")
function v41() {
    let somaPar = 0;
    let somaImpar = 0;
    for (let i = 0; i < matriz.length; i++) {
        let num = matriz[i]
        if (num % 2 == 0) somaPar += 1
        else somaImpar += 1
    }
    console.log("Números pares:", somaPar, "| Números impares:", somaImpar)
}
v41()
// 42. Multiplique todos os elementos por 2.
e("42")
function v42() {
    for (let i = 0; i < matriz.length; i++) {
        let num = matriz[i]
        console.log("Valor do elemento:", num, "| Número multiplicado por 2:", num * 2)
    }
}
v42()
// PARTE 6 – Matrizes (43 a 50) 🚨
// (USAR for ANINHADO)
// 43. Crie uma matriz 3x3 e exiba todos os valores.
var matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
e("43")
function v43() {
    console.table(matriz2)
}
v43()
// 44. Exiba a diagonal principal de uma matriz.
e("44")
function v44() {
    for (let coluna = 0; coluna < matriz2.length; coluna++) {
        for (let linha = 0; linha < matriz2[coluna].length; linha++) {
            if (coluna == linha) {
                console.log("Diagonal (" + coluna, linha + "):", matriz2[coluna][linha])
            }
        }
    }
}
v44()
// 45. Exiba a diagonal secundária.
e("45")
function v45() {
    let n = matriz2.length;
    for (let linha = 0; linha < n; linha++) {
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            if (linha + coluna === n - 1) {
                console.log("Diagonal (" + coluna, linha + "):", matriz2[coluna][linha])
            }
        }
    }
}
v45()
// 46. Some todos os elementos da matriz.
e("46")
function v46() {
    let soma = 0;
    for (let linha = 0; linha < matriz2.length; linha++) {
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            soma = soma + matriz2[coluna][linha]
        }
    }
    console.log("Soma total dos elementos:", soma)
}
v46()
// 47. Encontre o maior valor da matriz.
e("47")
function v47() {
    let maior = matriz2[0][0]
    for (let linha = 0; linha < matriz2.length; linha++) {
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            if (matriz2[linha][coluna] > maior) {
                maior = matriz2[linha][coluna]
            }
        }
    }
    console.log("Maior número:", maior)
}
v47()
// 48. Multiplique todos os valores por um número X.
e("48")
function v48() {
    let x = 4;
    console.log("Valor do X:", x)
    for (let linha = 0; linha < matriz2.length; linha++) {
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            let num = matriz2[linha][coluna];
            console.log("Elemento atual:", num, "| Multiplicado por x:", num * x)
        }
    }
}
v48()
// 49. Conte quantos valores são maiores que 10.
e("49")
function v49() {
    let soma = 0;
    for (let linha = 0; linha < matriz2.length; linha++) {
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            let num = matriz2[linha][coluna];
            if (num > 10) {
                soma += 1
            }
        }
    }
    console.log("Números maiores que 10:", soma)
}
v49()
// 50. Crie uma matriz e exiba no formato:
// [ 1 2 3 ]
// [ 4 5 6 ]
// [ 7 8 9 ]
e("50")
function v50() {
    for (let linha = 0; linha < matriz2.length; linha++) {
        let txt = "[ ";
        for (let coluna = 0; coluna < matriz2[linha].length; coluna++) {
            txt += matriz2[linha][coluna] + ",";
        }
        txt += "]";
        console.log(txt);
    }
}
v50()
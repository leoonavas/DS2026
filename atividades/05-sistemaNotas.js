// Calculo de situação final:

function verificarSituacao(nota) {
    if (nota < 5) {
        return "Reprovado";
    } else if (nota < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}

console.log(verificarSituacao(7))

// Verificar média:

function calcMedia(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;

    if (media < 5) {
        return "Reprovado"
    } else if (media < 7) {
        return "Recuperação"
    } else {
        return "Aprovado"
    }
}

// Outro jeito de resolução:

function final(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4
    let situacao;

    if (media < 5) situacao = "Reprovado";
    else if (media < 7) situacao = "Recuperacao";
    else situacao = "Aprovado";

    return "Média: " + media + " - Situação: " + situacao;
}

console.log(final(7, 10, 9, 7))
// let name = "Cristiano";
// let lines = "\n========================================================================================\n"
// function verificarVoto(idade) {
//     if (idade >= 18) {
//         return `${name} possui ${idade} anos, e tem que votar obrigatoriamente.`
//     } else if (idade >= 16 && idade < 18) {
//         return `${name} possui ${idade} anos, e pode votar, mas não é obrigatório.`
//     } else {
//         return `${name} possui ${idade} anos, e não pode votar.`
//     }
// }
// console.log(lines)
// console.log(verificarVoto(18));
// console.log(lines)
// function status(nota) {
//     if (nota >= 7) {
//         return `Você tirou ${nota}, parabéns, você passou de ano!`
//     } else if (nota >= 5 && nota <= 6.9) {
//         return `Você tirou ${nota}, a recuperação será semana que vem!`
//     } else {
//         return `Você tirou ${nota} e não possui direito a recuperação, você foi reprovado.`
//     }
// }
// console.log(status(4));
// console.log(lines)
function calcularMedia(n1, n2, n3, n4) {
    let nota = (n1 + n2 + n3 + n4) / 4
    console.log(`Suas notas: ${n1}, ${n2}, ${n3}, ${n4}`)
    if (nota >= 7) {
        return `Sua média: ${nota}, parabéns, você passou de ano!`
    } else if (nota >= 5 && nota <= 6.9) {
        return `Sua média: ${nota}, a recuperação será semana que vem!`
    } else {
        return `Sua média: ${nota}, você reprovou de ano.`
    }
}
// console.log(calcularMedia(7, 9, 7, 8))
// console.log(lines)

// function verificarSituacao(nota) {
//     if (nota < 5) {
//         return "Reprovado";
//     } else if (nota < 7) {
//         return "Recuperação";
//     } else {
//         return "Aprovado";
//     }
// }

// console.log(verificarSituacao(7))
// console.log(lines)

// function calcMedia(n1, n2, n3, n4) {
//     let media = (n1 + n2 + n3 + n4) / 4;

//     if (media < 5) {
//         return "Reprovado"
//     } else if (media < 7) {
//         return "Recuperação"
//     } else {
//         return "Aprovado"
//     }
// }

// console.log(calcMedia(6, 7, 8, 9))

// let n1 = Math.ceil(Math.floor(Math.random(1, 11) * 10))
// let n2 = Math.ceil(Math.floor(Math.random(1, 11) * 10))
// let n3 = Math.ceil(Math.floor(Math.random(1, 11) * 10))
// let n4 = Math.ceil(Math.floor(Math.random(1, 11) * 10))
// console.log(calcularMedia(n1, n2, n3, n4))



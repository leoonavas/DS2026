function obterIdade(anoNascimento) {
    return `Você nasceu em: ${anoNascimento} e tem: ${2026 - anoNascimento} anos`;
}

console.log(obterIdade(1990));
console.log(obterIdade(2009));

function autonomiaCarro(combustivel) {
    return `Com ${combustivel}L de combustível, o carro pode percorrer ${combustivel * 12} km`;
}
console.log(autonomiaCarro(50));
console.log(autonomiaCarro(30));
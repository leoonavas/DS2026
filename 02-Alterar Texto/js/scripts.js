const falar = () => {
    const frases =[
        "Hoje está um dia bonito!",
        "Falta muito para sexta-feira?",
        "Qual o cardápio de hoje no almoço?",
        "Vish, tem prova de matemática.",
    ];
    let tagarela = document.getElementById("tagarela")
    let controle = 0;
    let numero = Math.random();

    if (numero > 0.75) controle = 3;
    else if (numero > 0.5) controle = 2;
    else if (numero > 0.25) controle = 1

    tagarela.innerHTML = frases[controle]

}
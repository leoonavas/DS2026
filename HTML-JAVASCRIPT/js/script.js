
const olaMundo = () => {
    alert("Ola Mundo")
}

const mudarTexto = () => {
    document.getElementById("Texto").innerHTML = "🔥 Novo texto com JS";
    document.getElementById("Texto").style.color = "red";
    document.getElementById("Texto").style.backgroundColor = "yellow";

}

const enviarNome = () => {
    let nomeDigitado = document.getElementById("nome").value;
    alert ("Olá " + nomeDigitado)
}

const somar = () => {

    event.preventDefault();
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let resultado = Number(n1) + Number(n2)

    document.getElementById("result").innerHTML = "Resultado: " + resultado 

    alert(resultado)
}
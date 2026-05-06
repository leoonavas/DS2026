const exercicio1 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = " # ";

  for (let i = 1; i <= 10; i++) {
    resultado += i + " # ";
  }

  resposta.innerHTML = resultado;
};


const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  let mensagem = " #";

  for (let i = 0; i <= numero; i += 2) {
    if (numero % 2 == 0) {
      mensagem += i + " #";
    }
  }
  resultado.innerHTML = mensagem;
};

const exercicio3 = () => {
  let num = Number(document.getElementById("num").value)
  let resultado = document.getElementById("resultado")
  let ePrimo = true;
  let mensagem = "O número " + num + " é um número primo."
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      ePrimo = false;
    }
  }
  if (ePrimo == false) {
    mensagem = "O número " + num + " NÃO é um número primo."
  }
  resultado.innerHTML = mensagem
};

const exercicio4 = () => {
  let resultado = document.getElementById("resultado")
  let num = Number(document.getElementById("num").value)
  let resposta = " #"
  for (i = 0; i <= 10; i++) {
    resposta += (i * num) + " #";
  }
  resultado.innerHTML = resposta
}

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let num = Number(document.getElementById("num").value);

  let resposta = " #";
  let i = 0;

  while (i <= num) {
    if (i % 2 !== 0) {
      resposta += i + " #";
    }

    i++;
  }

  resultado.innerHTML = resposta;
};  

const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let num = Number(document.getElementById("num").value);
  let soma = 0;
  let i = 0;
  while (i <= num) {
    if (i % 2 === 0) {
      soma += i;
    }
    i++;
  }

  resultado.innerHTML = "Soma dos pares: " + soma;
};

const exercicio7 = () => {
  let resultado = document.getElementById("resposta");

  let resposta = " #";
  let i = 10;

  while (i >= 1) {
    resposta += i + " #";
    i--;
  }

  resultado.innerHTML = resposta;
};

const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let palavra = document.getElementById("palavra").value;

  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  if (palavra === palavraInvertida) {
    resultado.innerHTML = "A palavra é um palíndromo.";
  } else {
    resultado.innerHTML = "A palavra não é um palíndromo.";
  }
};

const exercicio9 = () => {

  let resposta = document.getElementById("resposta");
  let soma = 0;


  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  resposta.innerHTML = "A soma de 1 a 100 é: " + soma
};

let contador = 0
let soma = 0
const exercicio10 = () => {
  let resultado = document.getElementById("resultado")
  let num = document.getElementById("num").value

  soma += Number(num)
  contador++

  resultado.innerHTML = `A média dos números digitados é: ${soma / contador}`
};

const exercicio11 = () => {
  let resultado = document.getElementById("resposta");

  let resposta = " #";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      resposta += i + " #";
    }
  }

  resultado.innerHTML = resposta;
};

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let num = document.getElementById("num").value;

  let soma = 0;

  for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
  }

  resultado.innerHTML = "Soma dos dígitos: " + soma;
};

const exercicio13 = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let mensagem = " #";

  for (let i = num1; i <= num2; i++) {

    let eprimo = true;

    for (let i2 = 2; i2 <= Math.sqrt(i); i2++) {
      if (i % i2 === 0) {
        eprimo = false;
      }
    }

    if (eprimo === true) {
      mensagem = mensagem + i + " #";
    }
  }

  document.getElementById("resultado").innerHTML = mensagem;
};

const exercicio14 = () => {
  let resultado = document.getElementById("resultado");

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let area = num1 * num2;

  resultado.innerHTML = "Área do retângulo: " + area;
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value
  let letras = palavra.split("");

  let vogais = ["a", "e", "i", "o", "u"]
  let resposta = "#"
  for (let i = 0; i < letras.length; i++) {
    if (vogais.includes(letras[i])) {
      resposta = resposta + letras[i] + " #"
    }
  }
  document.getElementById("resultado").innerHTML = resposta
};

const exercicio16 = () => {
  let raio = Number(document.getElementById("num1").value)
  let conta = (raio * raio) * 3.14159

  document.getElementById("resultado").innerHTML = "A área do círculo é: " + conta
};

const exercicio17 = () => {
  let b = Number(document.getElementById("num1").value)
  let h = Number(document.getElementById("num2").value)
  let resultado = document.getElementById("resultado")
  let area = (b * h) / 2

  resultado.innerHTML = "Área do Triângulo: " + area
}

const exercicio18 = () => {
  let B = Number(document.getElementById("num1").value)
  let b = Number(document.getElementById("num2").value)
  let h = Number(document.getElementById("num3").value)

  let area = ((B + b) * h) / 2

  resultado.innerHTML = "Área do Trapézio: " + area
}

const exercicio19 = () => {
  let palavra = document.getElementById("palavra").value;
  let caractere = document.getElementById("letra").value;
  let resultado = document.getElementById("resultado");

  let vetorLetras = palavra.split("");
  const vogais = "aeiou";

  for (let i = 0; i < vetorLetras.length; i++) {
    if (vogais.includes(vetorLetras[i])) {
      vetorLetras[i] = caractere;
    }
  }

  let novaPalavra = vetorLetras.join("");
  resultado.innerHTML = "Resultado: " + novaPalavra;
}

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let resultado = document.getElementById("resultado");
  
  let fraseInvertida = "";

  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }

  resultado.innerHTML = "Frase invertida: " + fraseInvertida;
}

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let resultado = document.getElementById("resultado");
  
  let fraseSemEspaco = "";

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
      fraseSemEspaco += frase[i];
    }
  }

  resultado.innerHTML = "Frase sem espaços: " + fraseSemEspaco;
}

const exercicio22 = () => {
  
}

const exercicio23 = () => {
  let frase = document.getElementById("frase").value
  let palavra = document.getElementById("palavra").value
  let resultado = document.getElementById("resultado")

  const contagem = frase.split(palavra).length - 1;

  resultado.innerHTML = 'A palavra "' + palavra + '" aparece ' + Number(contagem) + ' vezes.'

}

const exercicio24 = () => {
  let frase = document.getElementById("frase").value
  let resultado = document.getElementById("resultado")
  let fraseTitle = frase.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ')

  resultado.innerHTML = fraseTitle
}

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);

  let numeros = [num1, num2, num3];

  numeros.sort((a, b) => a - b);

  resultado.innerHTML = numeros.join(" | ");
};  

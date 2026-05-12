let userCount = 0; // Contador

const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();
  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

  userCount++; // Acrescer o contador em
  let id = userCount; // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  novoItem.innerHTML = `${id} - ${nome} - ${email} - <p onClick=editar(${id}) class='btn'>Editar</p> - <p onClick=excluir(${id}) class='btn'>Excluir</p>`;

  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);

  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};

const editar = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");
  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      // recuperar o texto do item
      // cortar a string e variaveis nome e email
      let nome = item.innerHTML.split(" - ")[1];
      let email = item.innerHTML.split(" - ")[2];

      document.getElementById("nome").value = nome;
      document.getElementById("email").value = email;
    }
  });
};

// Função Escluir
const excluir = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      item.remove();
    }
  });
};

// =============================================================================== //

let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  const nome = document.getElementById("produto").value;

  const quantidade = parseFloat(document.getElementById("quantidade").value);

  const valor = parseFloat(document.getElementById("valor").value);


  const total = quantidade * valor;

  produtos.push({
    nome,
    quantidade,
    valor,
    total,
  });

  atualizarTabela();
  limparCampos();
};

const atualizarTabela = () => {
  const tbody = document.querySelector("#tabelaProdutos tbody");

  tbody.innerHTML = "";

  totalGeral = 0;

  produtos.forEach((produto, index) => {
    totalGeral += produto.total;

    const linha = `
      <tr>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${produto.valor.toFixed(2)}</td>
        <td>R$ ${produto.total.toFixed(2)}</td>
      </tr>
    `;

    tbody.innerHTML += linha;
  });

  document.getElementById("total").textContent = totalGeral.toFixed(2);

  document.getElementById("valorLiquido").textContent = totalGeral.toFixed(2);
};

const aplicarDesconto = () => {
  const descontoValor = parseFloat(document.getElementById("descontoValor").value) || 0;

  const descontoPercentual = parseFloat(document.getElementById("descontoPercentual").value) || 0;

  let valorLiquido = totalGeral;

  if (descontoValor > 0) {
    valorLiquido -= descontoValor;
  }

  if (descontoPercentual > 0) {
    valorLiquido -=
      totalGeral * (descontoPercentual / 100);
  }

  if (valorLiquido < 0) {
    valorLiquido = 0;
  }

  document.getElementById("valorLiquido").textContent = valorLiquido.toFixed(2);
};

const finalizarCompra = () => {
  alert("Compra finalizada com sucesso!");

  produtos = [];
  totalGeral = 0;

  atualizarTabela();

  document.getElementById("descontoValor").value = "";

  document.getElementById("descontoPercentual").value = "";
};

const limparCampos = () => {
  document.getElementById("produto").value = "";

  document.getElementById("quantidade").value = "";

  document.getElementById("valor").value = "";

  document.getElementById("produto").focus();
};  
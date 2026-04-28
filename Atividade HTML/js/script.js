let userCount = 0;

cadastrar = (event) => {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (!nome || !email) return; // Basic validation

    let lista = document.getElementById('lista');

    let novoItem = document.createElement(' ');

    let span = document.createElement('span');
    span.innerText = nome + " - " + email;
    novoItem.appendChild(span);

    // Botão deleta
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Deletar';
    deleteBtn.onclick = () => deleteUser(novoItem);
    novoItem.appendChild(deleteBtn);

    // Adiciona o novo item à lista
    lista.appendChild(novoItem);

    // Limpa os campos do formuario
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    userCount++;
    document.getElementById('userCount').innerText = userCount;
}

editUser = (li) => {

}

deleteUser = (li) => {
    li.remove();
    userCount--;
    document.getElementById('userCount').innerText = userCount;
}
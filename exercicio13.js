let usuario, senha = "";
do {
    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");

    if (usuario == senha)
        alert("O usuário não pode ser igual a senha!!");

} while (usuario == senha);

alert("Cadastrado com sucesso!")



//Codigo abaixo ou modo de fazer o programa acima 

/* let usuario, senha = "";

usuario = prompt("Informe o nome do usuário:");
senha = prompt("Informe a sua senha:");

while (usuario == senha) {
    alert("O usuário não pode ser igual a senha!");

    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");
}

alert("Cadastrado com sucesso!")*/
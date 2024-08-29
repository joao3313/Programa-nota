alert("faça já seu cadastro:")

usuario = parseFloat(alert("usuário--> "))
senha = parseFloat(alert("senha-->"))


if (usuario == senha) {
    alert("ERRO: o usuário não pode ser igual a senha, tente novamente");
    usuario = parseFloat(alert("usuário--> "))
    senha = parseFloat(alert("senha-->"))
}
else

{
    alert("cadastrado efetuado com sucesso");

}
let textoMenu = ` Escolha o turno em que você estuda, digitando a primeira letra:
                  M - Matutino
                  V - Vespertino
                  N - Noturno`;

                  let turnoEscolhido = prompt(textoMenu);

                  let turno;

                 
if (turnoEscolhido == M) {

    alert(  "Matutino!" + "Bom dia !");

}
else if (turnoEscolhido == V) {

    alert ( "Vespertino!" + " Boa tarde !");
       
}
else if (turnoEscolhido == N) {

    alert ( "Noturno!" + "Boa Noite !");
       
}
else {
    alert( "Valor Inválido!");

}
            

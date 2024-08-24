let nome = prompt("Informe seu nome:");

let Numero_Escolhido01 = parseInt(prompt("Informe um número:"));
let Numero_Escolhido02 = parseInt(prompt("Informe um número:"));
let Numero_Escolhido03 = parseInt(prompt("Informe um número:"));
//let mensagem = "";
let maior, menor;

{

    if ((Numero_Escolhido01 >= Numero_Escolhido02) && (Numero_Escolhido01 >= Numero_Escolhido03)) {

        maior = Numero_Escolhido01;
    }

    else if ((Numero_Escolhido02 >= Numero_Escolhido01) && (Numero_Escolhido02 >= Numero_Escolhido03)) {

        maior = Numero_Escolhido02
    }


    else if ((Numero_Escolhido03 >= Numero_Escolhido01) && (Numero_Escolhido03 >= Numero_Escolhido02)) {

        maior = Numero_Escolhido03

    }


    if ((Numero_Escolhido01 <= Numero_Escolhido02) && (Numero_Escolhido01 <= Numero_Escolhido03)) {

        menor = Numero_Escolhido01
    }

    else if ((Numero_Escolhido02 <= Numero_Escolhido01) && (Numero_Escolhido02 <= Numero_Escolhido03)) {

        menor = Numero_Escolhido02
    }


    else if ((Numero_Escolhido03 <= Numero_Escolhido01) && (Numero_Escolhido03 <= Numero_Escolhido02)) {

        menor = Numero_Escolhido03

        alert(nome + ", " + "você escolheu o maior número:" + " " + maior
            + "E o menor número:" + " " + menor
         );
    }


}
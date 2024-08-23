let nome = prompt("Informe seu nome:");

let Numero_Escolhido01 = parseInt(prompt("Informe um número:"));
let Numero_Escolhido02 = parseInt(prompt("Informe um número:"));
let Numero_Escolhido03 = parseInt(prompt("Informe um número:"));
//let mensagem = "";


{

    if (Numero_Escolhido01 > Numero_Escolhido02 === Numero_Escolhido01 > Numero_Escolhido03)
        
        {

       // alert(nome + " ," + "você escolheu o número:" + " " + Numero_Escolhido01);
    }

    else if (Numero_Escolhido02 > Numero_Escolhido01 === Numero_Escolhido02 > Numero_Escolhido03)
        
        {

       // alert(nome + ", " + "você escolheu o número:" + " " + Numero_Escolhido02);
    }


    else  (Numero_Escolhido03 > Numero_Escolhido01 === Numero_Escolhido03 > Numero_Escolhido02)
    
    {

       // alert(nome + ", " + "você escolheu o número:" + " " + Numero_Escolhido03);
       alert(nome + ", " + "você escolheu o número:" + Numero_Escolhido01 || Numero_Escolhido02 || Numero_Escolhido03);
    }
   
}

//let nome = prompt("Informe seu nome:");

let produto01 = prompt("Informe nome produto :");
let produto02 = parseFloat(prompt("Valor do produto:"));
let produto03 = prompt("Informe nome produto :");
let produto04 = parseFloat(prompt("Valor do produto:"));
let produto05 = prompt("Informe nome produto :");
let produto06 = parseFloat(prompt("Valor do produto:"));




let menor;
{

 // Abaixo compilação para menor nota

    if ((produto02 <= produto04) && (produto02 <= produto06)) {

        menor = produto02
    }

    else if ((produto04 <= produto02) && (produto04 <= produto06)) {

        menor = produto04
    }


    else if ((produto06 <= produto02) && (produto06 <= produto04)) {

        menor = produto06

       
    }

    alert("Produto escolhido:" + " Valor do produto:" + " " + menor  );
    }
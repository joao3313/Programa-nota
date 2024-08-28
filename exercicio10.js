let calculadora = `Calculadora:
                   1 - soma
                   2 - subtração
                   3 - Multiplicação
                   4 - divisão
                   5 - potenciação
                   6 - radiciação `;


let numeroescolhido = parseInt(prompt(calculadora));
let Numero1 = parseInt(prompt("Informe um número:"));
let Numero2 = parseInt(prompt("Informe um número:"));

//let num1 = 0, num2 = 0, total = 0;

//let = resultado;

switch (numeroescolhido) {



  case 1:
    numeroescolhido = (Numero1) + (Numero2)
    alert("Resultado! " + numeroescolhido);
    break;

  case 2:
    numeroescolhido = (Numero1) - (Numero2)
    alert("Resultado! " + numeroescolhido);
    break;

  case 3:
    numeroescolhido = (Numero1) * (Numero2)
    alert("Resultado! " + numeroescolhido);
    break;

  case 4:

    numeroescolhido = (Numero1) / (Numero2)

    if
      (Numero2 == 0) {
      alert("Inválido! ");
    }

    else {

      alert("Resultado! " + numeroescolhido);
    }
    break;
  case 5:
    numeroescolhido = (Numero1) ** (Numero2)
    alert("Resultado! " + numeroescolhido);
    break;

  case 6:
    numeroescolhido = (Numero1) ** (Numero2);
    //alert("Resultado! " + numeroescolhido);

    let operacao = ""
    if (Numero2 == 2) {
      operacao = "quadrada";

    }
    else if (Numero2 == 3) {

      operacao = "cúbica";
    }
    else {
      operacao = Numero2.toString();
    }

    alert("Resultado !" + Numero1 ** (1 / Numero2)); ''
    break;

  default:
    alert("Inválido");
    break;





}





//alert(`Resultado: ${resultado}`); 


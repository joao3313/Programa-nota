let calculadora = `Calculadora:`

let numeroescolhido = parseInt(prompt(calculadora));
let num1 = parseInt(prompt("Informe um número:"));
let num2 = parseInt(prompt("Informe um número:"));


if (num1 == '' || num1 == null) {
    alert("Favor digitar número válido para operação");
    return false;
}

else if (num2 == '' || num2 == null) {
    alert("Favor digitar número válido para a operação");
    return false;
}
{

var resultado = null;

switch (operacao){



    case '1': //Subtração
        resultado = num1 - num2;
        break;

    case '2': // Adição
        resultado = num1 + num2;
        break;

    case '3': // Multiplicação
        resultado = num1 * num2;
        break;

    case '4': // Divisão
        resultado = num1 / num2;
        break;

    default:
        alert('A opção selecionada é inválida');
        return false;

    //alert( ""+ resultado);
    //break;
}

}

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

        if (Numero2 == 0) {
            alert("Inválido! ");

        }
        else {
            numeroescolhido = (Numero1) / (Numero2)
            alert("Resultado! " + numeroescolhido);
            break;
        };

    case 5:
        numeroescolhido = (Numero1) ** (Numero2)
        alert("Resultado! " + numeroescolhido);
        break;

    case 6:
        numeroescolhido = (Numero1) ** (Numero2)
        alert("Resultado! " + numeroescolhido);
        break;





}


//alert(`Resultado: ${resultado}`); 


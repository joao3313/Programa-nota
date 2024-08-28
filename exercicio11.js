
let conversao = ` Converter:
                   1 - Fahrenheit
                   2 - Celsius
                   `;

let numeroescolhido = parseInt(prompt(conversao))
let Numero1 = parseInt(prompt("Temperatura em graus:"))


//let Temperatura = parseFloat(prompt("Temperatura em graus :"));

//let opcao1 = parseInt(prompt("Digite número para converter:"));

var fahrenheit = (Numero1 - 32)* 5/9 ;
var celsius = (Numero1 * 9/5) + 32;





switch (numeroescolhido) {



    case 1:

        (conversao) + (Numero1)
        alert("Número convertido:  " + celsius );
        break;



    case 2:
        (conversao) + (Numero1)
        alert("Número convertido:  " + fahrenheit);
        break;

}

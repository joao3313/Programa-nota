// feito pelo professor

let nome = prompt("Informe seu nome:");

let Ganhos_por_hora = parseFloat(prompt("Quanto você ganha por hora:"));
let Horas_trabalhadas_mês = parseFloat(prompt("Horas trabalhadas no mês:"));
let Renda_mensal = Ganhos_por_hora * Horas_trabalhadas_mês;



//if (Ganhos_por_hora * Horas_trabalhadas_mês);

let mensagem = `${nome}, recebeu R$ ${Renda_mensal.toFixed(2)} no mês`



alert (mensagem);





//alert(nome + ", " + "você escolheu o número:" + " " + Renda_mensal);

var nome1 = "";
let nota1, nota2, nota3 = 0;
const Provas = 2;

nome1 = prompt("Digite o Nome do Aluno:");
nota1 = parseFloat(prompt("Digite a Nota 1: "));
nota2 = parseFloat(prompt("Digite a Nota 2: "));


var media = (nota1 + nota2) / Provas;

{

  if (media >= 6) {
    alert(nome1 + ", " + "Uau! Aprovado");
  } else if (media >= 5) { alert(nome1 + ", " + "Recuperação!"); }
  else {alert (nome1+ ", "+"Reprovado"); }

}

alert(nome1 + mensagem);
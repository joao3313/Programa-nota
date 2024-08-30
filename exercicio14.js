let continuar = "S";
do {
    let num = parseInt(prompt("Informe sua tabuada!"));
    let stringTab =
        `
        ${num} X 1 = ${num * 1} 
        ${num} X 2 = ${num * 2}
        ${num} X 3 = ${num * 3}
        ${num} X 4 = ${num * 4}
        ${num} X 5 = ${num * 5}
        ${num} X 6 = ${num * 6}
        ${num} X 7 = ${num * 7}
        ${num} X 8 = ${num * 8}
        ${num} X 9 = ${num * 9}
        ${num} X 10 = ${num * 10}
    `;
    alert(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")

} while (continuar == "S");

// outro modelo de tabuada abaixo :


/*let continuar = "S";
do {
    let num = parseInt(prompt("Informe sua tabuada!"));
    let stringTab = "";
    for (let i = 1; i <= 10; i++) {
        stringTab += `${num} X ${i} = ${num * i} \n`;
    }
    alert(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")

} while (continuar == "S");*/
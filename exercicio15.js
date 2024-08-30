
preco = parseFloat(prompt("Informe o valor do pão:"));
let tabString = `Preço do pão: R$ ${(preco).toFixed(2)} unid. <br>`;
for (let i = 1; i <= 50; i++) {
    tabString += `${i} = R$ ${(preco * i).toFixed(2)} <br>`;
}
document.write(tabString); 
   
   
   
   
   
   
   
   
   
   
   
  /* Codigo que fiz abaixo
  
  
  
  let num = parseFloat(prompt("Preço do pão!"));
    let stringTab = "";
    for (let i = 1; i <= 50; i++) {
        stringTab += `${i} = ${num * i. toFixed(2)} <br>`;
    }
    document.write(stringTab);


   */
   /* preco = parseFloat(prompt("Informe o valor do pão:"));
    let tabString = `Preço do pão: R$ ${(preco).toFixed(2)} unid. <br>`;
    for (let i = 1; i <= 50; i++) {
        tabString += `${i} = R$ ${(preco * i).toFixed(2)} <br>`;
    }
    document.write(tabString);
*/


   // continuar = prompt("Outro preço de pão ? S=Sim e N=Não")




/*let continuar = "Pão";

// mensagem "";

do {
    let num = parseInt(prompt("Preço do pão!"));
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
        ${num} X 11 = ${num * 11} 
        ${num} X 12 = ${num * 12}
        ${num} X 13 = ${num * 13}
        ${num} X 14 = ${num * 14}
        ${num} X 15 = ${num * 15}
        ${num} X 16 = ${num * 16}
        ${num} X 17 = ${num * 17}
        ${num} X 18 = ${num * 18}
        ${num} X 19 = ${num * 19}
        ${num} X 20 = ${num * 20}
        ${num} X 21 = ${num * 21} 
        ${num} X 22 = ${num * 22}
        ${num} X 23 = ${num * 23}
        ${num} X 24 = ${num * 24}
        ${num} X 25 = ${num * 25}
        ${num} X 26 = ${num * 26}
        ${num} X 27 = ${num * 27}
        ${num} X 28 = ${num * 28}
        ${num} X 29 = ${num * 29}
        ${num} X 30 = ${num * 30}
        ${num} X 31 = ${num * 31} 
        ${num} X 32 = ${num * 32}
        ${num} X 33 = ${num * 33}
        ${num} X 34 = ${num * 34}
        ${num} X 35 = ${num * 35}
        ${num} X 36 = ${num * 36}
        ${num} X 37 = ${num * 37}
        ${num} X 38 = ${num * 38}
        ${num} X 39 = ${num * 39}
        ${num} X 40 = ${num * 40}
        ${num} X 41 = ${num * 41} 
        ${num} X 42 = ${num * 42}
        ${num} X 43 = ${num * 43}
        ${num} X 44 = ${num * 44}
        ${num} X 45 = ${num * 45}
        ${num} X 46 = ${num * 46}
        ${num} X 47 = ${num * 47}
        ${num} X 48 = ${num * 48}
        ${num} X 59 = ${num * 59}
        ${num} X 50 = ${num * 50}
    `;
    
    document.write(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")
    
} while (continuar == "Pão");*/
let nome = prompt ("Informe o seu nome :");

let idade = prompt ("Informe sua Idade:");

let altura = parseFloat(prompt("Qual sua altura:"));



{

    if (altura >= 1.70) 
        
        {

        alert(nome + ", " + " Autorizada!");

    } 
    
    
   else if ((idade <= 18) && (altura <= 1.60))
   
   {

    alert(nome + ", " + "Passagem autorizada!");

  
  }

  else ((idade < 18) && (altura < 1.60))
  {
    alert(nome + ", " + "Passagem não autorizada!");
    
  }
   
  

    

  
  
}
  
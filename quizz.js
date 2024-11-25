function quizz() {

   
   var resp1 = document.querySelector('input[name="quest1"]:checked').value ;
   var resp2 = document.querySelector('input[name="quest2"]:checked').value ;
   var resp3 = document.querySelector('input[name="quest3"]:checked').value ;
   var resp4 = document.querySelector('input[name="quest4"]:checked').value ;
   var resp5 = document.querySelector('input[name="quest5"]:checked').value ;
   var resp6 = document.querySelector('input[name="quest6"]:checked').value ;
   var resp7 = document.querySelector('input[name="quest7"]:checked').value ;
   var resp8 = document.querySelector('input[name="quest8"]:checked').value ;
   var resp9 = document.querySelector('input[name="quest9"]:checked').value ;
   var resp10= document.querySelector('input[name="quest10"]:checked').value ;

    if(resp1 == 'errada'){
    document.getElementById('resp_correta1').innerText = "CORRETA!!";

   }else {
      
    document.getElementById('resp_errada1').innerText = "ERRADA!"; 
    document.getElementById('resp_errada1.5').innerText = " O IRRF antecipa o pagamento do imposto de renda, tornando o processo mais prático para o governo e contribuintes.";
   } 
     if (resp2 == 'certa'){
    document.getElementById('resp_correta2').innerText = "CORRETA!!";
    
 }else {
    document.getElementById('resp_errada2').innerText = "ERRADA!";
    document.getElementById('resp_errada2.5').innerText = "Ele incide sobre rendimentos pagos a pessoas físicas, como salários e aluguéis.";
    
 }
   if (resp3 == 'certa'){
    document.getElementById('resp_correta3').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada3').innerText = "ERRADA!";
    document.getElementById('resp_errada3.5').innerText = "O cálculo segue a tabela progressiva, com alíquota baseada na renda mensal.";
    
 }
   if (resp4 == 'certa'){
    document.getElementById('resp_correta4').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada4').innerText = "ERRADA!";
    document.getElementById('resp_errada4.5').innerText = "Caso retido indevidamente, o contribuinte pode solicitar restituição na declaração anual.";
    
    
 }
  if (resp5 == 'certa'){
    document.getElementById('resp_correta5').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada5').innerText = "ERRADA!";
    document.getElementById('resp_errada5.5').innerText = "A alíquota de 27,5% aplica-se a rendas mensais mais altas, como R$ 5.000,00.";
}
 if (resp6 == 'errada'){
    document.getElementById('resp_errada6').innerText = "ERRADA!";
    document.getElementById('resp_errada6.5').innerText = "IRRF é aplicado a rendimentos mensais superiores a R$ 1.903,98.";
    
}else {
   document.getElementById('resp_correta6').innerText = "CORRETA!!";
   
}
if (resp7 == 'errada'){
    document.getElementById('resp_errada7').innerText = "ERRADA!";
    document.getElementById('resp_errada7.5').innerText = "Para aluguéis, o IRRF é retido diretamente pela fonte pagadora, se aplicável.";
    
}else {
   document.getElementById('resp_correta7').innerText = "CORRETA!!";
   
}
if (resp8 == 'errada'){
    document.getElementById('resp_errada8').innerText = "ERRADA!";
    document.getElementById('resp_errada8.5').innerText = "Salários de R$ 6.000,00 são tributados com a alíquota máxima de 27,5%.";
    
}else {
   document.getElementById('resp_correta8').innerText = "CORRETA!!";
   
}
if (resp9 == 'errada'){
    document.getElementById('resp_errada9').innerText = "ERRADA!" ;
    document.getElementById('resp_errada9.5').innerText = "A fonte pagadora (empresa) é responsável por reter e repassar o IRRF." ;
    
}else {
   document.getElementById('resp_correta9').innerText = "CORRETA!";
   
}
if (resp10 == 'errada'){
    document.getElementById('resp_errada10').innerText = "ERRADA!";
    document.getElementById('resp_errada10.5').innerText = "Salários de trabalhadores com carteira assinada estão sujeitos à retenção do IRRF.";
    
}else {
   document.getElementById('resp_correta10').innerText = "CORRETA!!";
   
} 


}
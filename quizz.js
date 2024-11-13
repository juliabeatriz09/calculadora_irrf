function quizz() {

   // inicio definição de variaveis
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
// fim definições
// inicio corretor de respostas
    if(resp1 == 'errada'){
    document.getElementById('resp_correta1').innerText = "CORRETA!!";

   }else {
      
    document.getElementById('resp_errada1').innerText = "CORRETA!!";
   } 
     if (resp2 == 'certa'){
    document.getElementById('resp_correta2').innerText = "CORRETA!!";
    
 }else {
    document.getElementById('resp_errada2').innerText = "ERRADA!!";
    
 }
   if (resp3 == 'certa'){
    document.getElementById('resp_correta3').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada3').innerText = "ERRADA!!";
    
 }
   if (resp4 == 'certa'){
    document.getElementById('resp_correta4').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada4').innerText = "ERRADA!!";
    
 }
  if (resp5 == 'certa'){
    document.getElementById('resp_correta5').innerText = "CORRETA!!";
    
 }else  {
    document.getElementById('resp_errada5').innerText = "ERRADA!!";
}
 if (resp6 == 'errada'){
    document.getElementById('resp_errada6').innerText = "ERRADA!!";
    
}else {
   document.getElementById('resp_correta6').innerText = "CORRETA!!";
   
}
if (resp7 == 'errada'){
    document.getElementById('resp_errada7').innerText = "ERRADA!!";
    
}else {
   document.getElementById('resp_correta7').innerText = "CORRETA!!";
   
}
if (resp8 == 'errada'){
    document.getElementById('resp_errada8').innerText = "ERRADA!!";
    
}else {
   document.getElementById('resp_correta8').innerText = "CORRETA!!";
   
}
if (resp9 == 'errada'){
    document.getElementById('resp_errada9').innerText = "ERRADA!!";
    
}else {
   document.getElementById('resp_correta9').innerText = "CORRETA!!";
   
}
if (resp10 == 'errada'){
    document.getElementById('resp_errada10').innerText = "ERRADA!!";
    
}else {
   document.getElementById('resp_correta10').innerText = "CORRETA!!";
   
} 
// fim corretor

}
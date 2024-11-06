function quizz(){
    var  resp1= document.querySelector('input[name="quest1"]:checked') ;
    var  resp2= document.querySelector('input[name="quest2"]:checked') ;
    var  resp3= document.querySelector('input[name="quest3"]:checked') ;
    var  resp4= document.querySelector('input[name="quest4"]:checked') ;
    var  resp5= document.querySelector('input[name="quest5"]:checked') ;
    var  resp6= document.querySelector('input[name="quest6"]:checked') ;
    var  resp7= document.querySelector('input[name="quest7"]:checked') ;
    var  resp8= document.querySelector('input[name="quest8"]:checked') ;
    var  resp9= document.querySelector('input[name="quest9"]:checked') ;
    var  resp10= document.querySelector('input[name="quest10"]:checked') ;
 
   if (resp1.value == 'correta'){
    document.getElementbyI('resp_correta1').innertext = "CORRETA!!"

   }else {
    document.getElementbyI('resp_errada1').innertext = "CORRETA!!"
    
 }  if (resp2.value == 'correta'){
    document.getElementbyI('resp_correta2').innertext = "CORRETA!!"
    
 }else {
    document.getElementbyI('resp_errada2').innertext = "ERRADA!!"
    
 }
   if (resp3.value == 'correta'){
    document.getElementbyI('resp_correta3').innertext = "CORRETA!!"
    
 }else  {
    document.getElementbyI('resp_errada3').innertext = "ERRADA!!"
    
 }
   if (resp4.value == 'correta'){
    document.getElementbyI('resp_correta4').innertext = "CORRETA!!"
    
 }else  {
    document.getElementbyI('resp_errada4').innertext = "ERRADA!!"
    
 }
  if (resp5.value == 'correta'){
    document.getElementbyI('resp_correta5').innertext = "CORRETA!!"
    
 }else  {
    document.getElementbyI('resp_errada5').innertext = "ERRADA!!"
}
 if (resp6.value == 'errada'){
    document.getElementbyI('resp_errada6').innertext = "ERRADA!!"
    
}else {
   document.getElementbyI('resp_correta6').innertext = "CORRETA!!"
   
}
if (resp7.value == 'errada'){
    document.getElementbyI('resp_errada7').innertext = "ERRADA!!"
    
}else {
   document.getElementbyI('resp_correta7').innertext = "CORRETA!!"
   
}
if (resp8.value == 'errada'){
    document.getElementbyI('resp_errada8').innertext = "ERRADA!!"
    
}else {
   document.getElementbyI('resp_correta8').innertext = "CORRETA!!"
   
}
if (resp9.value == 'errada'){
    document.getElementbyI('resp_errada9').innertext = "ERRADA!!"
    
}else {
   document.getElementbyI('resp_correta9').innertext = "CORRETA!!"
   
}
if (resp10.value == 'errada'){
    document.getElementbyI('resp_errada10').innertext = "ERRADA!!"
    
}else {
   document.getElementbyI('resp_correta10').innertext = "CORRETA!!"
   
}


}
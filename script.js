function irrf(){
   // declaração de variaveis
    const salario = document.getElementById('salario').value - 554.8;
    const base = salario - document.getElementById('deducao').value; 
    let aliquota = 0;
    let num_depe = document.getElementById('dependentes').value;
    let deducao =(document.getElementById('deducao').value * num_depe) / num_depe ;
    let result = 0;
  
   //  fim declaração
   //  inicio calculo 
     if (salario<=2259.20){
         document.getElementById('valor').innerText="não é necessário pagar imposto";

     }else if( salario<=2826.5){ 
        aliquota=(0.075 * salario)/100;
        result = (base * aliquota) - deducao;
        
     }else if( salario<=3751.65){
        aliquota=(0.15 * salario)/100;
        result = (base * aliquota )- deducao;
       
     }else if( salario<=4664.68){
        aliquota = (0.225 * salario)/100;
        result = (base * aliquota )- deducao;
        
     }else{
        aliquota = (0.275 * salario)/100;
        result = (base * aliquota) - deducao;
        
     }
   //   fim calculo
     document.getElementById('valor').innerText = "o valor a ser pago=" + result.toFixed(2);
}
function irrf(){
   // declaração de variaveis
    const salario = document.getElementById('salario').value - 554.8;
    let base = 0 ; 
    let aliquota = 0;
    let num_depe = document.getElementById('dependentes').value;
    let deducao =0;
    let result = 0;
  
   //  fim declaração
   //  inicio calculo 
     if (salario<=2259.20){
         document.getElementById('valor').innerText="Não é necessário pagar imposto";

     }else if( salario<=2826.5){ 
        deducao = 169.44  * num_depe;
        base = salario - deducao;
        aliquota=(7.50 * salario)/100;
        result = (base * aliquota) - deducao;
        document.getElementById('valor').innerText =   result.toFixed(1);

     }else if( salario<=3751.65){
        deducao= 381.44  * num_depe;
        base = salario -  deducao;
        aliquota=(0.15 * salario)/100;
        result = (base * aliquota )- deducao;
        document.getElementById('valor').innerText =  result.toFixed(1);
       
     }else if( salario<=4664.68){
        deducao= 662.77 * num_depe;
        base = salario - deducao;
        aliquota = (0.225 * salario)/100;
        result = (base * aliquota )- deducao;
        document.getElementById('valor').innerText = result.toFixed(1);
        
     }else{
        deducao = 896.00  * num_depe;
        base = salario - deducao;
        aliquota = (0.275 * salario)/100;
        result = (base * aliquota) - deducao;
        document.getElementById('valor').innerText =  result.toFixed(1);
     }
   //   fim calculo
     
}
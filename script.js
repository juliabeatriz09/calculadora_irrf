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
        deducao = 189,59  * num_depe;
        base = salario - deducao;
        aliquota=(7.50 * base)/100;
        result = aliquota - 169,44;
        document.getElementById('valor').innerText =   result.toFixed(1);

     }else if( salario<=3751.65){
        deducao= 189,59  * num_depe;
        base = salario -  deducao;
        aliquota=(15 * base)/100;
        result = aliquota - 381,44;
        document.getElementById('valor').innerText =  result.toFixed(1);
       
     }else if( salario<=4664.68){
        deducao= 189,59 * num_depe;
        base = salario - deducao;
        aliquota = (22.5 * base)/100;
        result =  aliquota - 662,77;
        document.getElementById('valor').innerText = result.toFixed(1);
        
     }else{
        deducao = 189,59  * num_depe;
        base = salario - deducao;
        aliquota = (27.5 * base)/100;
        result = aliquota- 896;
        document.getElementById('valor').innerText =  result.toFixed(1);
     }
   //   fim calculo
     
}
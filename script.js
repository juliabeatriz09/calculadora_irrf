         document.getElementById('valor').innerText="Não é necessário pagar imposto";

     }else if( salario<=2826.5){ 
        deducao = 169.44  * num_depe;
        deducao = 189,59  * num_depe;
        base = salario - deducao;
        aliquota=(7.50 * salario)/100;
        result = (base * aliquota) - deducao;
        aliquota=(7.50 * base)/100;
        result = aliquota - 169,44;
        document.getElementById('valor').innerText =   result.toFixed(1);

     }else if( salario<=3751.65){
        deducao= 381.44  * num_depe;
        deducao= 189,59  * num_depe;
        base = salario -  deducao;
        aliquota=(0.15 * salario)/100;
        result = (base * aliquota )- deducao;
        aliquota=(15 * base)/100;
        result = aliquota - 381,44;
        document.getElementById('valor').innerText =  result.toFixed(1);

     }else if( salario<=4664.68){
        deducao= 662.77 * num_depe;
        deducao= 189,59 * num_depe;
        base = salario - deducao;
        aliquota = (0.225 * salario)/100;
        result = (base * aliquota )- deducao;
        aliquota = (22.5 * base)/100;
        result =  aliquota - 662,77;
        document.getElementById('valor').innerText = result.toFixed(1);

     }else{
        deducao = 896.00  * num_depe;
        deducao = 189,59  * num_depe;
        base = salario - deducao;
        aliquota = (0.275 * salario)/100;
        result = (base * aliquota) - deducao;
        aliquota = (27.5 * base)/100;
        result = aliquota- 896;
        document.getElementById('valor').innerText =  result.toFixed(1);
     }
   //   fim calculo



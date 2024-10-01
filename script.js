function irrf(){
   
    const salario = document.getElementById('salario').value - 554.8;
    const base = salario - document.getElementById('deducao').value; 
    let aliquota = 0;
    let deducao =0;
    const num_dependentes = document.getElementById('dependentes').value;
    let result = 0;
    
    
     if (salario<=2259.20){
         document.getElementById('valor').innerText="não é necessário pagar imposto";
     }else if( salario<=2826.5){
        deducao =( 169.44 * num_dependentes) / num_dependentes;
        aliquota=(0.075*salario)/100;
        result = (base * aliquota) -deducao;
       
        
     }else if( salario<=3751.65){
        deducao = (381.44 * document.getElementById('dependetes').value) / document.getElementById('dependentes');
        aliquota=(0.15*salario)/100;
        result = (base * aliquota )-deducao;
        
     }else if( salario<=4664.68){
        deducao = (662.77 * document.getElementById('dependetes').value) / document.getElementById('dependentes');
        aliquota = (0.225*salario)/100;
        result = (base * aliquota )-deducao;
        
     }else{
        deducao = (896.0 * document.getElementById('dependetes').value) / document.getElementById('dependentes');
        aliquota = (0.275*salario)/100;
        result = (base * aliquota) -deducao;
        
     }
     document.getElementById('valor').innerText = "o valor a ser pago=" + result.toFixed(2);
}
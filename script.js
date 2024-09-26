function irrf(){
   
    const salario = document.getElementById('salario').value;
    const base = salario - document.getElementById('deducao').value; 
    let aliquota = 0;
    const num_dependentes = document.getElementById('dependentes').value;
    let deducao = document.getElementById('deducao').value * document.getElementById('dependentes').value;
    let result = 0;
    
    
     if (salario<=2259.20){
         document.getElementById('valor').innerText="não é necessário pagar imposto";
     }else if( salario<=2826.5){
        aliquota=7.5*salario/100;
        result = base * aliquota -deducao;
        
     }else if( salario<=3751.65){
        aliquota=15.0*salario/100;
        result = base * aliquota -deducao;
        
     }else if( salario<=4664.68){
        aliquota=22.5*salario/100;
        result = base * aliquota -deducao;
        
     }else{
        aliquota=27.5*salario/100;
        result = base * aliquota -deducao;
        
     }
     document.getElementById('valor').innerText = "o valor a ser pago=" + result;
}
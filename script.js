// julia 
function irrf(){
const salario = document.getElementById('salario').value;
const base = salario - descontos; 
let aliquota=0;
const num_dependentes = document.getElementById('dependentes').value;
let deducao= document.getElementById('deducao').value*document.getElementById('dependentes').value;
const principal = base * aliquota - deducao; 
let result = principal;



 if (salario<=2259,20){
     getElementById('valor').innerhtml="não é necessário pagar imposto";
 }else if( salario<=2826,65){
    aliquota=7.5*salario/100
    result = principal;
    getElementById('valor').innerhtml= "o valor a ser pago=" + result;
 }else if( salario<=3751,65){
    aliquota=15.0*salario/100
    result = principal;
    getElementById('valor').innerhtml= "o valor a ser pago=" + result;
 }else if( salario<=4664,68){
    aliquota=22.5*salario/100
    result = principal;
    getElementById('valor').innerhtml= "o valor a ser pago=" + result;
 }else{
    aliquota=27.5*salario/100
    result = principal;
    getElementById('valor').innerhtml= "o valor a ser pago=" + result;
 }
}
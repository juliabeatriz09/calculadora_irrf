
function holerite(){
 i // inicio definição de variaveis
 let descri = document.getElementById('descri').value;
 
 let refer = document.getElementById('refe').value;

 let prov = document.getElementById('prov').value;
 
 let desco = document.getElementById('pandora').value;
//  fim definição
// inicio gerador tabela
 let linha = 
   `<tr>
     <td>${descri}</td>
     <td>${refer}</td>
     <td>${prov}</td>
     <td>${desco}</td>
     <td>${desco}</td>
   </tr>`
 ;

  document.getElementById("caixinha").innerHTML = linha;
  // fim gerador
}
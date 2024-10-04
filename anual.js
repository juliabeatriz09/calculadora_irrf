function holerite(){
 let descri = document.getElementById('descri');
 let refe = document.getElementById('refe').value;
 let prov = document.getElementById('prov').value;
 let desco = document.getElementById('pandora').value;
let linha =

  ` <Tr>

     <td>${descricao}</td>
     <td>${referencia}</td>
     <td>${provenentos}</td>
     <td>${descontos}</td>
   </Tr>`
 
 
}
document.getElementById('dentro').innerText = linha;

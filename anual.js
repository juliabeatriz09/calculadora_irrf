function holerite(){
 let descri = document.getElementById('descri');
 let refe = document.getElementById('refe').value;
 let prov = document.getElementById('prov').value;
 let desco = document.getElementById('pandora').value;

 let linha =

  ´ <Tr>

     <td>${descri}</td>
     <td>${refe}</td>
     <td>${prov}</td>
     <td>${desco}</td>
     
   </Tr>´
 ;
 
}
document.getElementById('dentro').innerText = linha;

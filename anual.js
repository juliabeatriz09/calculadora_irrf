function holerite(){
 let descri = document.getElementById('descri');
 
 let refer = document.getElementById('refe').value;

 let prov = document.getElementById('prov').value;
 
 let desco = document.getElementById('pandora').value;
 
 let linha =
 
   `<Tr>

     <th>${descri}</th>
     <th>${refer}</th>
     <th>${prov}</th>
     <th>${desco}</th>
     
   </Tr>`
 ;

}
  document.getElementById('caixinha').innerText = linha;
alert("aaa");
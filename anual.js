function holerite(){
 const descri = document.getElementById('descri').value;
 const refe = document.getElementById('refe').value;
 const prov = document.getElementById('prov').value;
 const desc = document.getElementsById('desc').value;
let linha =
`
   <Tr>

     <td>${descrição}</td>
     <td>${refencia}</td>
     <td>${proventos}</td>
     <td>${descontos}</td>
   </Tr>
 `
}
document.getElementById('dentro').innerHTML = linha;

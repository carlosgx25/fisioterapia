const datos = {
  Cervical:["Trapecio","ECM","Suboccipitales","Elevador escapular"],
  Hombro:["Deltoides","Supraespinoso","Infraespinoso"],
  Codo:["Flexores","Extensores"],
  Muñeca:["Flexor radial","Extensor cubital"],
  Lumbar:["Cuadrado lumbar","Multífidos","Erectores"],
  Rodilla:["Cuádriceps","Isquiotibiales"],
  Tobillo:["Gemelos","Sóleo"],
  FascitisPlantar:["Fascia plantar","Tibial posterior"],
  Neuropático:["Ciático","Peroneo","Tibial"]
};

const tbody = document.getElementById("tabla-body");

for(let i=1;i<=15;i++){

let fila = document.createElement("tr");

fila.innerHTML = `

<td>${i}</td>

<td>
<select>
<option>Sin dolor</option>
<option>Leve</option>
<option>Moderado</option>
<option>Severo</option>
</select>
</td>

<td>
<select class="zona">
<option value="">Seleccione zona</option>
<option>Cervical</option>
<option>Hombro</option>
<option>Codo</option>
<option>Muñeca</option>
<option>Lumbar</option>
<option>Rodilla</option>
<option>Tobillo</option>
<option>Fascitis Plantar</option>
<option>Neuropático</option>
</select>
</td>

<td>
<select>
<option>No</option>
<option>Escoliosis</option>
<option>Cifosis</option>
<option>Lordosis</option>
</select>
</td>

<td>
<select>
<option>No</option>
<option>Leve</option>
<option>Moderada</option>
<option>Severa</option>
</select>
</td>

<td>
<input type="checkbox">
</td>

<td>
<select class="musculo">
<option>Seleccione zona</option>
</select>
</td>

<td>
<select>
<option>Completo</option>
<option>Disminuido</option>
<option>Limitado</option>
</select>
</td>

<td>
<select>
<option>1/5</option>
<option>2/5</option>
<option>3/5</option>
<option>4/5</option>
<option>5/5</option>
</select>
</td>

<td>
<select>
<option>Independiente</option>
<option>Con ayuda</option>
<option>Dependiente</option>
</select>
</td>
`;

tbody.appendChild(fila);
}

document.addEventListener("change", e=>{

if(e.target.classList.contains("zona")){

const zona = e.target.value;
const fila = e.target.closest("tr");
const musculo = fila.querySelector(".musculo");

musculo.innerHTML = "";

datos[zona].forEach(m=>{
musculo.innerHTML += `<option>${m}</option>`;
});

}

});
function imprimirPDF(){

window.print();

}

let calcularVacaciones = document.getElementById('calcularVacaciones')

calcularVacaciones.addEventListener('submit', calcExpenses)

function getValues()  {
  let destino = document.getElementById('destino').value,
      presupuesto = document.getElementById('presupuesto').value,
      transporte = document.getElementById('transporte').value,
      alojamiento = document.getElementById('alojamiento').value,
      comida = document.getElementById('comida').value;

  return { destino, presupuesto, transporte, alojamiento, comida }    

  
}

function calcExpenses(e) {
  e.preventDefault();
  
  const  { destino, presupuesto, transporte, alojamiento, comida } = getValues()

  let gastos = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida)
  let balance = presupuesto - gastos

  UI (destino, presupuesto, balance)
  manejeElClicks()
}

function UI(destino, presupuesto, balance) {
  let result = document.getElementById("result")
  let dataPrint = document.createElement("div")
  
   dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destino}</h6>
      </div>
      <div class="col s4">
        <h6>${presupuesto}</h6>
      </div>
      <div class="col s4">
      <h6 id="balance">${balance}</h6> 
    </div>
  </div>

  `
  result.appendChild(dataPrint) 

  reset()
}

function reset() {
  document.getElementById("calcularVacaciones").reset()
}

function balanceColours() {

  const { balance} = getValues()


    if(balance < 0) {
      document.getElementById("balance").classList.add("red")
    }
    else if(balance > 0) {
      document.getElementById("balance").classList.add("green")
    }
}

let destino = localStorage.getItem("destino");

function obtener_localstorage() {

  if (localStorage.getItem("pais")){
    let pais =localStorage.getItem("pais");
let destino = JSON.parse( localStorage.getItem("destino"));

console.log(pais);
console.log(destino);

  }else {
    console.log("No hay localStorage")
  }

}


function guardar_localstorage () {
  let destino = {
    pais: "Uruguay",
    distancia:"600km",
    costo: 1000,
    comida: "chivito",
  }
};

localStorage.getItem("pais", JSON.stringify(destino));

function manejeElClicks() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Ya calculaste tus vacaciones!',
    showConfirmButton: false,
    timer: 5000,
  })
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaf53b95dbmshbe0146fca97abafp10df3djsn568445cdecd4',
		'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
	}
};

fetch('https://google-search1.p.rapidapi.com/google-search?hl=en&q=Avengers%2BEndgame&gl=us', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
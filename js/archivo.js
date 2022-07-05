let calcularVacaciones = document.getElementById('calcularVacaciones')

calcularVacaciones.addEventListener('submit', calcExpenses)

function getValues() {
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

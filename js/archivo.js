let compraTotal = parseInt(prompt("Ingrese importe Total de la compra"));
let cuotas = 0;

while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
  cuotas = parseInt(prompt("Ingrese cantidad de cuotas (3 o 12)."));

  if (cuotas != 3 && cuotas != 6 && cuotas != 12) {
    alert("ERROR: ingrese cuotas: 3, 6 o 12");
  } else {
    alert("ingresó " + " " + cuotas + " " + "cuotas");
  }
}

let calculoCuotas = 0;

function calculo(compraTotal, cuotas) {
  let calculoCuotas = compraTotal / cuotas;
  return calculoCuotas;
}

let resultado = calculo(compraTotal, cuotas);
console.log(resultado);
alert(`${cuotas} cuotas de ${resultado}`);
// const pi = 3.1416
// let radio = 20

// function calcularRadioCirculo(pi, radio) {
//     console.log(pi + (radio ** 2))
// }
// console.log(calcularRadioCirculo)

/**vamos a crear 4 funciones
 * sumar dos numeros
 * multiplicar dos numeros
 * dividir dos numeros
 */

function sumaDosNumeros(param1, param2) {
  return param1 + param2;
}

function restarDosNumeros(param1, param2) {
  return param1 - param2;
}

function multiplicarDosNumeros(param1, param2) {
  return param1 * param2;
}

function dividirDosNumeros(param1, param2) {
  return param1 / param2;
}

function abrirCalculadora() {
  let num1 = Number(prompt("ingrese numero 1"));
  let num2 = Number(prompt("ingrese numero 2"));
  let operacion = prompt("Escoja operacion +, -, *, /");

  let resultado;

  if (operacion === "1") {
    resultado = sumaDosNumeros(num1, num2);
  } else if (operacion === "2") {
    resultado = restarDosNumeros(num1, num2);
  } else if (operacion === "3") {
    resultado = multiplicarDosNumeros(num1, num2);
  } else if (operacion === "4") {
    resultado = dividirDosNumeros(num1, num2);
  }

  alert("tu resultado es " + resultado);
}

// function elevarAlCuadrado(numero) {
//     return numero ** 2
// }

// console.log(elevarAlCuadrado(3))

// alert(calcularPesoEnLaLuna(65));




/** --------------------------------------calculadora------------------------------------------*/

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
  let operacion = prompt("Escoja operacion 1.+, 2.-, 3.*, 4./");

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

/** ----------------------------------------calculadora de peso ----------------------------------------*/

function calcularPesoEnLaLuna(peso) {
  let result = peso * 0.165;
  return result;
}
function calcularPesoEnMercurio(peso) {
  let result = peso * 0.378;
  return result;
}
function calcularPesoEnVenus(peso) {
  let result = peso * 0.9;
  return result;
}
function abrirCalculadoraDePeso() {
  let peso = parseFloat(prompt("escriba su peso: "));
  let astro = prompt(`
        Escoja astro:
        1. Luna 
        2. Mercurio
        3. Venus
        `);

        switch(astro) {
            case "1":
                alert(calcularPesoEnLaLuna(peso))
                break
            case "2":
                alert(calcularPesoEnMercurio(peso))
                break
            case "3":
                alert(calcularPesoEnVenus(peso))
                break
            default:
                alert("opcion invalida")
                break
        }
}


/** ----------------------------------------calculadora de geometria ----------------------------------------*/

function calcularAreaTriangulo() {
    let base = Number(prompt("Ingrese base:"))
    let altura = Number(prompt("Ingrese altura:"))
    alert("El area es " + base * altura / 2)
}
function calcularAreaCirculo() {
    const pi = 3.1416
    let radio = Number(prompt("Ingrese radio:"))
    alert("El radio es " + pi * radio ** 2)
}
function calcularAreaCuadrado() {
    let lado = Number(prompt("Ingrese medida de un lado:"))
    alert("El area del cuadrado es " + lado**2)
}
function calcularAreaRectangulo() {
    let base = Number(prompt("Ingrese base:"))
    let altura = Number(prompt("Ingrese altura:"))
    alert("El area del rectangulo es " + base * altura)

}
function abrirCalculadoraDeAreas() {
    let eleccion = prompt(`que calculadora quiere abrir: 
        1.Area triangulo  
        2.Area circulo  
        3.Area cuadrado  
        4.Area rectangulo`)

    if (eleccion === "1") {
      calcularAreaTriangulo()
    } else if (eleccion === "2") {
      calcularAreaCirculo()
    } else if (eleccion === "3") {
      calcularAreaCuadrado()
    } else if (eleccion === "4") {
      calcularAreaRectangulo()
    } else {
        alert("opcion invalida")
    }
}


/** ----------------------------------------calculadora de temperatura ----------------------------------------*/
function convertCelsiusToFahrenheit() {
  let celsius = parseFloat(prompt("Ingrese grados Celsius"))
  alert("Grados Farenheit: " + ((celsius * 1.8) + 32))
}

function convertKelvinToFahrenheit() {
  let kelvin = parseFloat(prompt("Ingrese grados Kelvin"))
  alert("Grados Farenheit: " + ((kelvin - 273.15) * 1.8 + 32))
}

function abrirConversorDeTemperatura() {
    let eleccion = prompt(`que conversion desea hacer: 
        1.De celsius a Farenheit  
        2.De Kelvin a Farenheit`)

    if (eleccion === "1") {
      convertCelsiusToFahrenheit()
    } else if (eleccion === "2") {
      convertKelvinToFahrenheit()
    } else {
        alert("opcion invalida")
    }
}

/** ----------------------------------------calculadora de conversion de medidas ----------------------------------------*/
function convertMetrosAPies() {
  let metros = Number(prompt("Ingrese Metros para convertir a pies: "))
  alert("Su medida en pies es: " + metros * 3.28084)
}

function convertKilometrosAMillas() {
  let kilometros = Number(prompt("Ingrese Kilometros para convertir a Millas: "))
  alert("Su medida en pies es: " + kilometros * 0.621371)
}

function abrirConversorDeMedidas() {
  let eleccion = prompt(`que conversion desea hacer: 
  1.De metros a pies  
  2.De Kilometros a millas`)

  if (eleccion === "1") {
    alert(convertMetrosAPies())
  } else if (eleccion === "2") {
    alert(convertKilometrosAMillas())
  } else {
    alert("opcion invalida")
  }
}

/** ------------------------------------------------------------------------------------------------*/


// let abrir = prompt(`Que calculadora deseas abrir:
//     1- Calculadora Normal
//     2- Calculadora de Peso en otros cuerpos celestes
//     3- Calculadora de Áreas de Figuras Geométricas
//     4- Calculadora de conversion de temperatura 
//     5- Calculadora de conversion de medidas`)

//     if (abrir === "1") {
//     abrirCalculadora()
// } else if (abrir === "2") {
//     abrirCalculadoraDePeso()
// } else if (abrir === "3") {
//     abrirCalculadoraDeAreas()
// } else if (abrir === "4") {
//   abrirConversorDeTemperatura()
// } else if (abrir === "5") {
//   abrirConversorDeMedidas()
// } else {
//   alert("invalid option")
// }

export {abrirCalculadora, abrirCalculadoraDeAreas, abrirCalculadoraDePeso, abrirConversorDeMedidas, abrirConversorDeTemperatura}
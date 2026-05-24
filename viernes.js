import {abrirCalculadora, abrirCalculadoraDeAreas, abrirCalculadoraDePeso, abrirConversorDeMedidas, abrirConversorDeTemperatura} from "./jueves";


let abrir = prompt(`Que calculadora deseas abrir:
    1- Calculadora Normal
    2- Calculadora de Peso en otros cuerpos celestes
    3- Calculadora de Áreas de Figuras Geométricas
    4- Calculadora de conversion de temperatura 
    5- Calculadora de conversion de medidas`)

    if (abrir === "1") {
    abrirCalculadora()
} else if (abrir === "2") {
    abrirCalculadoraDePeso()
} else if (abrir === "3") {
    abrirCalculadoraDeAreas()
} else if (abrir === "4") {
  abrirConversorDeTemperatura()
} else if (abrir === "5") {
  abrirConversorDeMedidas()
} else {
  alert("invalid option")
}
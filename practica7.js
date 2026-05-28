// function calcularAreaTriangulo(base, altura) {
//     let resultado = base * altura / 2
//     return resultado
// }

// for (let i = 0; i < 3; i++) {
//     let base = Number(prompt("Ingrese base:"))
//     let altura = Number(prompt("Ingrese altura:"))
//     if (base > 0 && altura > 0) {
//         let area = calcularAreaTriangulo(base, altura)
//         console.log("El area es " + area)
//     } else {
//         console.log("Opcion invalida")
//     }
// }

/*--------------------------------------------conversion de temperatura---------------------------------------------*/
// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = ((celsius * 1.8) + 32)
//     return fahrenheit
// }

// for (let i = 0; i < 5; i++) {
//     let celsius = Number(prompt("Ingrese Grados celsius para convertir a farenheit: "))
//     if (celsius >= 0 || celsius <= 0) {
//         let gradosFahrenheit = convertCelsiusToFahrenheit(celsius)
//         console.log("Grados farenheit: " + gradosFahrenheit)
//     } else {
//         console.log("Opcion invalida")
//     }
// }


/*--------------------------------------------3.Contar vocales en un texto ---------------------------------------------*/

// function contarVocales(texto) {
//     let contador = 0

//     for (let i = 0; i < texto.length; i++) {
//         let letra = texto[i]
//         if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//             contador++
//         }
//     }
//     return contador
// }

// for (let i = 0; i < 3; i++) {
//     let texto = prompt("Ingrese texto: ")
//     let result = contarVocales(texto)
//     console.log(result)
// }

/*------------------------------------------Ejercicio 4 – Pares e impares en un rango--------------------------------------*/
// function clasificarParesImpares(inicio, fin) {
//     for (let i = inicio; i <= fin; i++) {

//         if (i % 2 === 0) {
//             console.log(i + " numero par")
//         } else {
//             console.log(i + " numero impar")
//         }       
//     }
// }

// let inicio = parseInt(prompt("Ingrese numero inicial"))
// let fin = parseInt(prompt("Ingrese numero final"))
// clasificarParesImpares(inicio, fin)

/*-------------------------------------------Ejercicio 5 – Número mayor y suma-----------------------------------------*/
function mayorYSuma(num1, num2, num3, num4, num5) {
    let numeros = [num1, num2, num3, num4, num5]
    let suma = 0 
    let mayor = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    console.log("Resultado suma: " + suma)
    console.log("Numero mayor: " + mayor)

}

let num1 = parseInt(prompt("Ingrese el primer numero"))
let num2 = parseInt(prompt("Ingrese el segundo numero"))
let num3 = parseInt(prompt("Ingrese el tercer numero"))
let num4 = parseInt(prompt("Ingrese el cuarto numero"))
let num5 = parseInt(prompt("Ingrese el quinto numero"))

mayorYSuma(num1, num2, num3, num4, num5)
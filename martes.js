/*2. La alcancía digital (while)
Enunciado: Crea un programa que simule una alcancía. Al inicio, define una variable let ahorros = 0;.
El programa debe usar un bucle que le pregunte constantemente al usuario mediante un prompt()
cuánto dinero quiere depositar. El bucle debe detenerse únicamente cuando el usuario ingrese un número 
negativo o un 0. Al final, el programa debe mostrar un alert() con la cantidad total ahorrada. */

// let ahorros = 0
// let agregar = true

// while (agregar) {
//     let monto = Number(prompt("Ingresa el monto a ahorrar"))
//     if (monto > 0) {
//         // ahorros = ahorros + monto
//         ahorros += monto
//     } else {
//         agregar = false
//     }
// }

// alert(`tienes ${ahorros} en ahorros`)


/*3. El menú que no se rinde (do while)
Enunciado: Crea un menú interactivo utilizando un bucle do while. El programa debe mostrar un prompt() 
con las siguientes opciones: "1 - Ver perfil, 2 - Configuración, 3 - Salir".
Si el usuario presiona 1, muestra un alert() que diga "Abriendo perfil...".
Si presiona 2, muestra un alert() que diga "Abriendo configuración...".
Si ingresa cualquier otra cosa que no sea 3, el programa debe volver a mostrar el menú completo. 
El bucle solo terminará cuando el usuario escriba exactamente el número 3. */

// let eleccion

// do {
//     eleccion = prompt("Escoge una opcion: 1 - Ver perfil, 2 - Configuración, 3 - Salir")

//     if (eleccion === "1") {
//         alert("Ver perfil")
//     } else if (eleccion === "2") {
//         alert("Configuracion")
//     } else if (eleccion === "3") {
//         alert("salir")
//     } else {
//         alert("invalid option")
//     }

// } while (eleccion !== "3");




/*1. El contador del 1 al 10 (for)
Enunciado: Crea un programa que utilice un bucle for para imprimir en la consola los números 
del 1 al 10, uno por uno. */

// for (let i = 1; i <= 10; i++) {
//     console.log(i)    
    
// }

/*2. La tabla de un número (for)
Enunciado: Pídele al usuario un número mediante un prompt(). 
Usando un bucle for, muestra en la consola la tabla de multiplicar de ese número del 1 al 10 
(ejemplo: 5 x 1 = 5, 5 x 2 = 10...). */

// let numbero = Number(prompt("Ingrese numero"))

// if (numbero >= 0) {
//     for (let i = 1; i <= 10; i++) {
//     console.log(numbero + " x " + i + " = " + (numbero * i))
// }
// } else {
//     console.log("invalid option")
// }

/*3. Cuenta regresiva simple (while)
Enunciado: Crea una variable llamada contador con el valor 5. 
Utiliza un bucle while para que el programa imprima el valor de esa variable en la consola y luego la reste en 1 
(contador--). El bucle debe detenerse cuando llegue a 0.*/

// let contador = 5

// while (contador !== -1) {
//     console.log(contador)
//     contador --
// }

/*4. ¿Quieres seguir? (do while)
Enunciado: Crea un programa que le pregunte al usuario mediante un prompt():
"¿Quieres continuar? (escribe 'no' para salir)". El programa debe mostrar un alert() que diga 
"Hola" cada vez que el usuario escriba algo distinto a "no". El bucle debe detenerse cuando escriba "no". */

let continuar

do {
    continuar = prompt("Quieres continuar? escribe no para salir")
    if (continuar !== "no") {
        alert("Hola")
    } else {
        alert("chao")
    }
} while (continuar !== "no");

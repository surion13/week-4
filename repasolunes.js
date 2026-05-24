// let compra = Number(prompt("Ingresa el valor de la compra: "))
// let esVIP = prompt("Eres un cliente VIP: (S/N)").toLowerCase()

// if (compra > 100) {
//     if (compra > 150) {
//         alert("Tu envio sale gratis")
//     } else if (esVIP === "s") {
//         alert("Tuenvio sale gratis")
//     } else {
//         alert("Tu costo de envio es 15 USD")
//     }
// } else {
//     alert("Ingrese un monto valido")
// }


// 1.el validador de mayoria de edad

// let edad = Number(prompt("Ingrese edad: "))

// if (edad >= 18) {
//     alert("Eres mayor de edad")
// } else if (edad < 18) {
//     alert("Eres menor de edad")
// } else {
//     alert("ingrese un valor valido")
// }

/* 2. Sistema de aprobado o reprobado
Enunciado: Imagina que eres un profesor y quieres automatizar tus notas. 
El programa debe pedirle al alumno su calificación final (un número del 1 al 10)
usando un prompt(). Si la nota es de 5 o más, debes mostrar en la consola
(console.log) el mensaje: "Has aprobado el examen". 
Si la nota es menor que 5, la consola debe mostrar: "Lo siento, has reprobado.
¡A estudiar más!".*/

// let nota = parseInt(prompt("ingrese nota: "))

// if (nota >= 5) {
//     console.log("Has aprobado el examen")
// } else if (nota < 5) {
//     console.log("Lo siento has reprobado")
// } else {
//     console.log("ingrese un valor valido")
// }

/*3. La contraseña secreta
Enunciado: Crea un sistema de acceso básico. Guarda en una variable la contraseña correcta 
(por ejemplo: let claveCorrecta = "javascript123";). Luego, pídele al usuario que introduzca la contraseña
mediante un prompt(). Si la contraseña coincide con la guardada, muestra un alert() diciendo "Acceso concedido".
Si no coincide, muestra un alert() que diga "Acceso denegado, intruso". */

// let contraseña = "jesus"
// let putPassword = prompt("Ingrese contraseña: ")

// if (putPassword === contraseña) {
//     alert("Acceso concedido")
// } else {
//     alert("Acceso denegado intruso")
// }

/*4. Detector de números positivos o negativos
Enunciado: Desarrolla un programa que solicite un número cualquiera al usuario a través de un prompt(). 
Si el número ingresado es mayor o igual a cero, el programa debe imprimir en la consola (console.log): 
"El número ingresado es positivo". Si el número es menor a cero, debe imprimir: "El número ingresado es negativo".*/

// let numero = Number(prompt("Ingresa un numero: "))

// if (numero >= 0) {
//     console.log("Numero positivo")
// } else if (numero < 0 ) {
//     console.log("Numero negativo")
// } else {
//     console.log("Valor invalido")
// }



// 
// 
// 
// Nivel 2 intermedio 
// 
// 
// 

/*6. El semáforo inteligente
Enunciado: Crea un programa que simule el comportamiento de un semáforo. Pídele al usuario que introduzca un color
("rojo", "amarillo" o "verde") usando un prompt().
Si escribe "rojo", muestra un alert() que diga "¡Detente por completo!".
Si escribe "amarillo", muestra un alert() que diga "¡Precaución, baja la velocidad!".
Si escribe "verde", muestra un alert() que diga "¡Puedes avanzar!".
Si escribe cualquier otra cosa, muestra un alert() diciendo "Color no válido para un semáforo" */

// 

/*7. Calculadora de descuentos
Enunciado: Una tienda ofrece descuentos según el monto que gaste el cliente. Pídele al usuario que ingrese el 
total de su compra mediante un prompt().
Si el monto es mayor a 100, muestra en la consola: "Tienes un 10% de descuento en tu compra".
Si el monto está entre 50 y 100, muestra en la consola: "Tienes un 5% de descuento en tu compra".
Si el monto es menor a 50, muestra en la consola: "No aplicas para ningún descuento esta vez" */

// let monto = Number(prompt("Ingrese monto de su compra: "))

// if (monto > 100) {
//     console.log("Tienes un 10% de descuento en tu compra")
// } else if (monto >= 50 && monto <= 100) {
//     console.log("tienes un 5% de descuento")
// } else if (monto < 50) {
//     console.log("No aplicas para ningun descuento")
// }

/*8. Clasificador de etapas de la vida
Enunciado: Escribe un programa que determine en qué etapa de la vida se encuentra una persona.
Solicita la edad mediante un prompt().
Si la edad es menor a 12 años, imprime en la consola: "Eres un niño".
Si la edad está entre 12 y 17 años, imprime en la consola: "Eres un adolescente".
Si la edad es de 18 años o más, imprime en la consola: "Eres un adulto". */

// let edad = parseInt(prompt("Ingrese edad: "))

// if (edad < 12) {
//     console.log("eres un niño")
// } else if (edad >= 12 && edad <= 17) {
//     console.log("Eres un adolescente")
// } else if (edad >= 18) {
//     console.log("eres un adulto")
// }

/*9. Sistema de calificaciones americanas
Enunciado: Crea un conversor de notas numéricas a letras. Pídele al alumno que ingrese su nota del 1 al 10.
Si la nota es 9 o 10, muestra un alert() con la letra "A (Excelente)".
Si la nota es 7 u 8, muestra un alert() con la letra "B (Bueno)".
Si la nota es 5 o 6, muestra un alert() con la letra "C (Suficiente)".
Si la nota es menor a 5, muestra un alert() con la letra "F (Insuficiente)". */ 

// let nota = Number(prompt("Ingrese nota: "))


// if (nota >= 9 || nota <= 10) {
//     alert("A Excelente")
// } else if (nota >= 7 || nota <= 8) {
//     alert("B bueno")
// } else if (nota >= 5 || nota <= 6) {
//     alert("C suficiente")
// } else if (nota < 5) {
//     alert("F insuficiente")
// } else {
//     alert("valor invalido")
// }

/*10. El termómetro de actividades
Enunciado: Crea un programa que recomiende una actividad según la temperatura actual.
Pide la temperatura en grados mediante un prompt().
Si la temperatura es mayor a 30 grados, muestra un alert() que diga "Hace mucho calor,
¡es un buen día para  ir a la piscina!".
Si está entre 15 y 30 grados, el alert() debe decir "El clima está agradable, ideal para ir a caminar al parque".
Si es menor a 15 grados, el alert() debe decir "Hace frío, es mejor quedarse en casa viendo una película". */


// let temp = Number(prompt("Ingrese la temperatura en C: "))

// if (temp > 30) {
//     alert("Hace mucho calor es buen dia para piscinear")
// } else if (temp >= 15 &&  temp <= 30) {
//     alert("El clima esta piola para ir a caminar al parque")
// } else if (temp < 15) {
//     alert("hace frio mejor peliculear")
// }


// 
// 
// 
// Nivel 3: Avanzado (Condiciones múltiples o anidadas)
// 
// 
// 

/*11. Inicio de sesión con doble validación
Enunciado: Crea un sistema de login más realista. Primero, pide el nombre de usuario con un prompt(). 
Si el usuario ingresado es "admin", pasa a pedirle la contraseña con otro prompt(). 
Si la contraseña es "secreto123", muestra un alert() que diga "¡Bienvenido Administrador!". 
Si el usuario era correcto pero la contraseña no, muestra un alert() diciendo "Contraseña incorrecta". 
Si desde el inicio el usuario es diferente a "admin", muestra un alert() que diga "Usuario no registrado". */

// let userName = prompt("Ingrese nombre de usuario: ").toLowerCase()
// const contra = "secreto123"

// if (userName === "admin") {
//     let password = prompt("introduce contraseña")
//     if (password === contra) {
//         alert("Bienvenido admin")
//     } else {
//         alert("contraseña incorrecta")
//     } 
// } else {
//     alert("Usuario no registrado")
// }


/*12. El juego del número secreto
Enunciado: Guarda un número de tu elección en una variable al inicio del código (por ejemplo: const numeroSecreto = 7;). 
Pídele al usuario que intente adivinarlo mediante un prompt().
Si el usuario ingresa exactamente el número secreto, muestra un alert() diciendo "¡Felicidades! Has adivinado el número secreto".
Si el usuario ingresa un número más grande que el secreto, muestra un alert() que diga "Pista: El número secreto es menor".
Si el usuario ingresa un número más pequeño, muestra un alert() que diga "Pista: El número secreto es mayor". */

// const numrecreto = 7
// let guess = Number(prompt("Adivina el numero: "))

// if (guess === numrecreto) {
//     alert("Felicidades adivinaste")
// } else if (guess > numrecreto) {
//     alert("Pista el num secretoes menor")
// } else if (guess < numrecreto) {
//     alert("el num secreto es mayor")
// }

/*13. Clasificador de triángulos
Enunciado: Un triángulo puede ser equilátero, isósceles o escaleno. 
Pídele al usuario que ingrese la medida del "Lado A", del "Lado B" y del "Lado C" (necesitarás tres prompt() diferentes).
Si los tres lados son exactamente iguales, imprime en la consola: "Es un triángulo Equilátero".
Si los tres lados son diferentes entre sí, imprime en la consola: "Es un triángulo Escaleno".
Si no es ninguno de los anteriores (es decir, tiene dos lados iguales y uno diferente), imprime en la consola: "Es un triángulo Isósceles". */

/*14. Simulador de cajero automático
Enunciado: Crea una variable llamada saldo y asígnale un valor inicial (por ejemplo: let saldo = 500;).
Mediante un prompt(), pregúntale al usuario cuánto dinero desea retirar del cajero.
Si la cantidad que quiere retirar es mayor al dinero que tiene en su variable saldo, muestra un alert() que diga "Fondos insuficientes.
No puedes retirar esa cantidad".
Si la cantidad es menor o igual a su saldo, resta ese dinero del saldo total,
y muestra en la consola (console.log) el mensaje: "Retiro exitoso. Tu nuevo saldo es de: [aquí debe mostrarse la variable saldo actualizada]".*/

/*15. El filtro de becas universitarias
Enunciado: Una universidad otorga becas basándose en dos criterios: el promedio de calificaciones del alumno (del 1 al 10)
y el nivel de ingresos mensuales de su familia. Pide ambos datos usando dos prompt().
Si el alumno tiene un promedio de 9 o más, muestra un alert() que diga "¡Beca aprobada por excelencia académica!".
Si el promedio está entre 7 y 8.9, pero los ingresos familiares son muy bajos (por ejemplo, menores a 500 dólares), 
muestra un alert() diciendo "Beca aprobada por situación socioeconómica".
Para cualquier otra combinación o si no se cumplen estos requisitos mínimos, muestra un alert() que diga "Solicitud de beca rechazada". */






/**-------------------------------------------------------------------------------------- */
/**----------------------------------------------------------------------------------------- */
// Bucles while for do while
/**----------------------------------------------------------------------------------------- */
/**-------------------------------------------------------------------------------------- */

// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }


/*1. contador par o impar dinamico */

let numero = Number(prompt("Ungrese un numero: "))

for (let i = 0; i < numero ; i++) {
    // console.log(i + 1)
    // console.log((i + 1)% 2 )
    if ((i + 1) % 2 === 0) {
        console.log((i + 1) + "es par")
    } else {
        console.log((i + 1) + "es impar")
    }
}
function calcularAreaTriangulo(base, altura) {
    let resultado = base * altura / 2
    return resultado
}

for (let i = 0; i < 3; i++) {
    let base = Number(prompt("Ingrese base:"))
    let altura = Number(prompt("Ingrese altura:"))
    if (base > 0 && altura > 0) {
        let area = calcularAreaTriangulo(base, altura)
        console.log("El area es " + area)
    } else {
        console.log("Opcion invalida")
    }
}







//Al poner export antes de la declaración de la función, se convierte en un módulo
//Esto permite que la función sea importada en otros archivos
export function sumar (a, b) {
    return a + b
}

export function restar (a, b) {
    return a - b
}

export function multiplicar (a, b) {
    return a * b
}

export function dividir (a, b) {
    return a / b
}

//También puede exportarse de esta manera:
//export {sumar, restar, multiplicar, dividir}
//export default: permite exportar un único valor por archivo, facilitando la importación en otros archivos.


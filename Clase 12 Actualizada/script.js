/* Comentario Multilinea: ALT+SHIFT+A */
// Comentario de una sola linea: CTRL+K+C


// typeof() Nos devuelve el tipo de dato
/* Ejemplos:
console.log(typeof(true))
console.log(typeof(String(8)))
console.log(typeof(8)) 
*/

//Cuando transformamos a numero a un dato no transformable a numero nos da un 'Nan' (Not a number)
//Los strings numericos se pueden transformar a numero sin dar NaN
// '' Es un string vacio, al transformarlo a numero nos da 0
console.log(Number(''))


Number()
String()
Boolean() 
parseInt() // Convierte a entero

parseFloat() // Convierte a decimal
isNaN() // Verifica si es un número

/* TIPOS DE DATOS (5)
let nombre = "Juan"; // String (Siempre y cuando esté entre comillas)
let edad = 30; // Number (Entero o decimal) 
let esEstudiante = true; // Boolean (true o false)

let nulo = null; // Null (Sin valor) (Excepcion: Se puede transformar a 0 numerico)

let indefinido; // Undefined (No definido) 
*/

//console.log: registra mensajes en la consola
/* console.log(Number('8')) // Transforma el string '8' a número 8
console.log(Number('8.5')) // Transforma el string '8.5' a número 8.5
console.log(Number('8a')) // Transforma el string '8a' a NaN (Not a Number)
console.log(Number('8.5a')) // Transforma el string '8.5a' a NaN (Not a Number)
*/

//Operadores aritméticos NO SE PUEDEN OPERAR DATOS DE DIFERENTES TIPOS
//JS siempre da un resultado de tipo Number, excepto cuando se concatena un string

//Concatena: + (Si uno de los valores es un string, se concatena) 
//Siempre devuelve un string si uno de los valores es un string
//Ejemplo: console.log("Hola " + "Mundo") // Resultado: "Hola Mundo"
//Ejemplo2: console.log("Hola " + 5) // Resultado: "Hola 5"
//Ejemplo3: console.log('11' + '5') // Resultado: "115" (Concatenación de strings)
//Ejemplo4: console.log(0 + 'true') // Resultado: "0true" (Concatenación de string con número)
//Ejemplo5: console.log(true + String(20)) // Resultado: "true20" (Concatenación de booleano con string)


//NaN siempre que sea operado con (+, -, *, /, %) da como resultado NaN
//Ejemplo: console.log(NaN + 5) // Resultado: NaN 

//Suma: + si ambos son números
//Ejemplo: console.log(5 + 3) // Resultado: 8
//Ejemplo2: console.log(NaN + 0) // Resultado: NaN (Not a Number, porque no se puede sumar NaN con un número)

//(Suma de booleanos)  
//Ejemplo: console.log(true + false) // Resultado: 1 
//Ejemplo2: Number (true) + Number(false) = 1 + 0 = 1
//Ejemplo3: console.log(NaN + 0) // Resultado: NaN (Not a Number, porque NaN no es un número válido)
//Ejemplo4: console.log(NaN + '1') // Resultado: "NaN1" (Concatenación de NaN con string, da como resultado un string)

//Resta: -
//Ejemplo: console.log(5 - 3) // Resultado: 2
//Ejemplo2: console.log(8 - 'hola') // Resultado: NaN (No se puede restar un string no numérico)
    //8 - Number('hola') //8 - NaN (No se puede restar un string no numérico) = NaN
//Ejemplo3: console.log(null - (Number(true) + '')) // Resultado: -1 (null se convierte a 0, true se convierte a 1, entonces 0 - 1 = -1)


//Multiplicación: *
//Ejemplo: console.log(5 * 3) // Resultado: 15
//Ejemplo1: console.log(NaN - true * 20 + 'Pepe') // Resultado: "NaNPepe" (NaN - 20 da NaN, luego se concatena con 'Pepe')

//División: /
//Ejemplo: console.log(5 / 3) // Resultado: 1.6666666666666667

//Módulo: % (Resto de la división)
//Ejemplo: console.log(5 % 3) // Resultado: 2 (5 dividido por 3 da un resto de 2)

//Potencia: ** (Eleva un número a la potencia de otro)
//Ejemplo: console.log(2 ** 3) // Resultado: 8 (2 elevado a la 3 es 8)

//Incremento: ++ (Aumenta el valor en 1)
//Ejemplo: let x = 5; x++; console.log(x); // Resultado: 6 (x se incrementa en 1)

//Decremento: -- (Disminuye el valor en 1)
//Ejemplo: let y = 5; y--; console.log(y); // Resultado: 4 (y se decrementa en 1)

/*
console.error("Error!"); // Imprime un error en la consola
console.warn("Advertencia!"); // Imprime una advertencia en la consola
console.table([{ nombre: "Juan", edad: 30 }, { nombre: "Ana", edad: 25 }]); // Imprime una tabla en la consola
console.group("Grupo"); // Agrupa mensajes en la consola
console.groupEnd(); // Finaliza el grupo de mensajes en la consola
console.time("Temporizador"); // Inicia un temporizador
console.timeEnd("Temporizador"); // Finaliza el temporizador y muestra el tiempo transcurrido
console.assert(true, "Esto es verdadero"); // Verifica una condición y muestra un mensaje si es falsa
console.clear(); // Limpia la consola
*/

// VARIABLES
let variable = "valor"; // Declaración de variable
const constante = "valor"; // Declaración de constante (no se puede cambiar)
var variableGlobal = "valor"; // Declaración de variable global (no recomendado en ES6)

// TIPOS DE DATOS COMPLEJOS
let entero = 5; // Integer (Número entero)
let decimal = 3.14; // Float (Número decimal)
let booleano = true; // Boolean (true o false)
let cadena = "Hola, mundo"; // String (Cadena de texto)


let calificacion = 9.5; // Float (Número decimal)
let calificaciones = [10, 9, 8]; // Array (Lista de valores) 
let colores = ["rojo", "verde", "azul"]; // Array de Strings
let numeros = [1, 2, 3]; // Array de Números
let mezcla = [1, "dos", true]; // Array con mezcla de tipos
let objeto = { clave: "valor" }; // Object (Objeto con clave-valor)
let persona = { nombre: "Juan", edad: 30 }; // Object (Conjunto de pares clave-valor)
let fecha = new Date(); // Date (Fecha y hora)

// OPERADORES
let suma = 5 + 3; // Suma
let resta = 5 - 3; // Resta
let multiplicacion = 5 * 3; // Multiplicación
let division = 5 / 3; // División
let modulo = 5 % 3; // Módulo
let incremento = 5; // Incremento
let decremento = 5; // Decremento
let igual = (5 == 3); // Igualdad
let estrictamenteIgual = (5 === 3); // Igualdad estricta
let diferente = (5 != 3); // Diferencia
let estrictamenteDiferente = (5 !== 3); // Diferencia estricta
let mayorQue = (5 > 3); // Mayor que
let menorQue = (5 < 3); // Menor que
let mayorOIgualQue = (5 >= 3); // Mayor o igual que
let menorOIgualQue = (5 <= 3); // Menor o igual que
let yLogico = (true && false); // AND lógico
let oLogico = (true || false); // OR lógico
let noLogico = !true; // NOT lógico



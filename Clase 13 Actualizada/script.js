//JS es case sensitive, es sensible a mayúsculas y minúsculas

//VERDADERO O FALSO
truly = true;
falsely = false;
//Todo dato puede ser transformado a booleano
//¿Cómo se transforma un dato a booleano? (Boolean())
//Si un dato al ser transformado da false es considerado un dato falsely
//Si un dato al ser transformado da true es considerado un dato truly
//Booleanos: true, false
//Boolean('hola') //truly
//Boolean(1) //truly
//Boolean(-1) //truly
//Boolean('') //falsely
//Boolean(0) //falsely 
//Boolean(false) //falsely
//Boolean(null) //falsely
//Boolean(undefined) //falsely
//Boolean(NaN) //falsely

//COMPARADORES
//Sirven para comparar dos valores y devolver un booleano
//Operadores de comparación
// == Igual a (Mala práctica para comparar, no compara tipos de datos)
// != Es distinto de (Mala práctica para comparar, no compara tipos de datos)
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que 
// === Es estrictamente igual a (Buena práctica para comparar, compara tipos de datos)
// !== Es estrictamente diferente a (Buena práctica para comparar, compara tipos de datos)


console.log(1 != '1') //false (Mala práctica, compara solo el valor, no el tipo de dato)
console.log(1 !== '1') //true (Buena práctica, compara el valor y el tipo de dato)
//EXCEPCIONES: 
// console.log(null == undefined) //true
// console.log('' == 0) //true

//Excepción de JS: Ningún dato se puede comparar con NaN (Not a Number)
/*
console.log(NaN === NaN) //false
console.log(0 === NaN) //false
*/

//Forma de saber si un dato es NaN
//isNaN(dato) //Devuelve true si el dato es NaN, false si no lo es
//isNaN('hola') //true
//isNaN(1) //false
//isNaN(NaN) //true
//isNaN(undefined) //true
//isNaN(null) //false


/* OPERADORES LÓGICOS
// NOT (!) (No lógico)
// Transforma un booleano en su opuesto
// Ejemplo: !true = false, !false = true
// Ejemplo2: !80 !Boolean(80) !false = true

//Queremos que si un usuario no escribió nada ('') nos dé verdadero
// Ejemplo: !'' = true, !'hola' = false




// AND (&&) (Y lógico) Es un selector de datos
// Devuelve true si ambos datos son verdaderos
// Si el primer valor es truly, devuelve el segundo valor
// Si el primer valor es falsely, devuelve el primer valor
// Ejemplo: true && true = true
// Ejemplo2: true && false = false
// Ejemplo3: false && true = false
// Ejemplo4: false && false = false
// Ejemplo5: 1 && 2 = 2 (El primer valor es truly, devuelve el segundo valor)
// Ejemplo6: 0 && 2 = 0 (El primer valor es falsely, devuelve el primer valor)
// Ejemplo7: 'hola' && 'mundo' = 'mundo' (El primer valor es truly, devuelve el segundo valor)


//  OR (||) (O lógico)
// Devuelve true si al menos uno de los datos es verdadero
// Si el primer valor es truly, devuelve el primer valor
// Si el primer valor es falsely, devuelve el segundo valor
// Ejemplo: true || true = true
// Ejemplo2: true || false = true
// Ejemplo3: false || true = true
// Ejemplo4: false || false = false
// Ejemplo5: 1 || 2 = 1 (El primer valor es truly, devuelve el primer valor)
// Ejemplo6: 0 || 2 = 2 (El primer valor es falsely, devuelve el segundo valor)
// Ejemplo7: 'hola' || 'mundo' = 'hola' (El primer valor es truly, devuelve el primer valor)
// Ejemplo8: '' || 'mundo' = 'mundo' (El primer valor es falsely, devuelve el segundo valor)
*/


// VARIABLES
// Son espacios de memoria que guardan un dato
// Se declaran con la palabra reservada var, let o const
// VAR: Variable de ámbito global o de función, puede ser redeclarada y reasignada
var nombre = 'juan'; //Variable global, puede ser redeclarada y reasignada
console.log('Mi nombre es ' + nombre); //Imprime el valor de la variable nombre
// Se pueden declarar variables sin asignar un valor, pero no se recomienda (var edad; let edad; const edad;) 
// Se recomienda usar let o const en lugar de var para evitar problemas de ámbito y redeclaración
// Permite que se declare multiples veces una misma variable, pero no se recomienda
// Tiene hoisting, lo que significa que se puede usar antes de ser declarada, pero no se recomienda
// Ejemplo de hoisting https://developer.mozilla.org/es/docs/Glossary/Hoisting
console.log(variable);
var variable = 'hola';
// var es una mala práctica, ya que permite redeclarar variables y puede causar problemas de ámbito



// LET: Variable de ámbito de bloque, no puede ser redeclarada en el mismo ámbito, pero sí reasignada
// CONST: Constante de ámbito de bloque, no puede ser redeclarada ni reasignada
let variable
let variable2 = 'hola'
const constante = 'mundo'
// var variable3 = 'adiós' //Mala práctica, no se recomienda usar var
// let variable3 = 'adiós' //Buena práctica, se recomienda usar let
// const variable3 = 'adiós' //Buena práctica, se recomienda usar const
var variable4 = 'adiós' //Variable global, puede ser redeclarada y reasignada
let variable5 = 'adiós' //Variable de bloque, no puede ser redeclarada ni reasignada






// BLOQUES DE CÓDIGO
// Son secciones de código que se ejecutan bajo ciertas condiciones
// Se definen con llaves {}
// Ejemplo de bloque de código
if (true) {
    console.log('Este es un bloque de código');
}

// VARIABLES DE TIPO STRING
// Son cadenas de texto, se definen con comillas simples o dobles
let string1 = 'Hola, mundo'
let string2 = "Hola, mundo"
let string3 = `Hola, mundo` //Template literals, permite interpolación de variables y multilinea
// Concatenación de strings
let concatenacion = string1 + ' ' + string2; //Usando el operador +
let interpolacion = `${string1} ${string2}`; //Usando template literals


// CONDICIONALES
// Son estructuras que permiten ejecutar código bajo ciertas condiciones
// if (condición) { código a ejecutar si la condición es verdadera }
// else { código a ejecutar si la condición es falsa }
if (variable2 === 'hola') {
    console.log('La variable2 es igual a hola');
}
else {
    console.log('La variable2 no es igual a hola');
}


// FUNCIONES NATIVAS (ALERTA, PROMPT, CONFIRM)
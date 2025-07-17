//alert("Hola");
//let nombre = prompt("¿Cómo te llamas?");
//alert(nombre)
//console.log(nombre)

//las variables guardan datos que pueden cambiar durante la ejecución del programa
//alert('pepesito')


//let numero_1 = prompt("decime un número") //prompt devuelve un string, si quiero un número debo convertirlo
//alert('Este es el numero seleccionado: ' + numero_1)



//BUCLES
//FOR, WHILE, DO WHILE
//FOR: Es un bucle que se utiliza para repetir un bloque de código un número específico de veces.
//WHILE: Es un bucle que se utiliza para repetir un bloque de código mientras una condición sea verdadera.
//DO WHILE: Es un bucle que se utiliza para repetir un bloque de código al menos una vez y luego mientras una condición sea verdadera.


//Un bucle es una estructura de control que permite repetir un bloque de código varias veces
//Los bucles son útiles para realizar tareas repetitivas de manera eficiente

//Ejemplo de un bucle que imprime "hola" 5 veces
//FOR

/* console.log('hola')
console.log('hola')
console.log('hola')
console.log('hola')
console.log('hola') */

for(
    let iterador = 1;  //Inicializo el iterador en 1
    iterador <= 5; //Condición de parada, cuando iterador sea mayor a 5, se detiene el bucle
    iterador = iterador + 1 //Incremento el iterador en 1 en cada iteración, ritmo de avance del bucle
) {
    console.log('hola'); //Acción a repetir, en este caso imprimir "hola"
}


//Si quiero saludar 10 veces, tendría que escribir 10 console.log('hola')
//Esto no es escalable, si quiero cambiar el mensaje, tendría que cambiarlo en 10 lugares
//Los bucles nos permiten escalar este tipo de tareas


//STOP: CLASE 14 1 HORA

//Se realiza la carga de 10 valores enteros por teclado
//FOR
//Cuantas veces se repite: 10
//Que repetimos? La carga de valores enteros (prompt)
/* let valores = [];
for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Ingrese el valor entero #${i + 1}`), 10);
    valores.push(valor);
}
console.log('Valores ingresados:', valores); */


//Si quiero saludar 100 veces, tendría que escribir 100 console.log('hola')
//Esto no es escalable, si quiero cambiar el mensaje, tendría que cambiarlo en 100 lugares
//Los bucles nos permiten escalar este tipo de tareas

/* //Escalabilidad: 
for (let i = 0; i < 5; i++) {
    console.log('hola');
}
*/



























BORRADOR




//FOR, WHILE
///FOR: Es un bucle que se utiliza para repetir un bloque de código un número específico de veces.
///WHILE: Es un bucle que se utiliza para repetir un bloque de código mientras una condición sea verdadera.

//Saludame 5 veces
//Necesitamos una forma de repetir acciones
//FOR
//Cuantas veces repetir la acción? 5 veces
//Que acción repetir? console.log('Hola')
/*
for( 
    let iterador = 0; //Empiezo en la primera iteración
    iterador <= 5; //Condición de parada, cuando iterador sea mayor a 5, se detiene el bucle
    iterador = iterador + 1 //Incremento el iterador en 1 en cada iteración
) 
{
    console.log(iterador)
    console.log('Hola');
}

for (let i = 0; i < 5; i++) {
    console.log('Hola ' + nombre);
}

console.log('hola')
console.log('hola')
console.log('hola')
console.log('hola')
console.log('hola')



//WHILE

//Re-ingresar un numero mientras sea invalido
//let numero = '10'
//Me debe devolver verdadero si es un numero o no
//console.log(isNaN(numero))

let numero = prompt('Ingrese un número')
//Si es '' o null, o isNaN, no es un número válido

//Si es '' o null o isNan
if(numero === '' || numero === null || isNaN(numero)) { 
    console.log('Ese dato no es un número válido');
}
// FORMA SIMPLIFICADA if(!numero || isNaN(numero)) {
if(isNaN(numero)) {
    console.log('Ese dato no es un número');
} else {
    console.log('Ese dato es un número');
}
*/




//ARRAYS
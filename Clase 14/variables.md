//Las variables son contenedores de información, guardan datos que pueden ser utilizados más adelante en el código.
// Existen diferentes tipos de variables en JavaScript:
// 1. Variables de tipo cadena (string): se utilizan para almacenar texto.
let mensaje = "Hola, " + nombre + "! Bienvenido a JavaScript.";
// 2. Variables de tipo número (number): se utilizan para almacenar números enteros o decimales.
let edad = 25; // Ejemplo de variable numérica
// 3. Variables de tipo booleano (boolean): se utilizan para almacenar valores de verdadero o falso.
let esEstudiante = true; // Ejemplo de variable booleana
// 4. Variables de tipo objeto (object): se utilizan para almacenar colecciones de datos y funcionalidades.
let persona = {
    nombre: nombre,
    edad: edad,
    esEstudiante: esEstudiante
}; // Ejemplo de variable objeto
// 5. Variables de tipo arreglo (array): se utilizan para almacenar listas de elementos
let frutas = ["manzana", "banana", "naranja"]; // Ejemplo de variable arreglo
// 6. Variables de tipo nulo (null): se utilizan para indicar que una variable no tiene valor.
let variableNula = null; // Ejemplo de variable nula
// 7. Variables de tipo indefinido (undefined): se utilizan para indicar que una variable no ha sido asignada.
let variableIndefinida; // Ejemplo de variable indefinida
// 8. Variables de tipo símbolo (symbol): se utilizan para crear identificadores únicos.
let simbolo = Symbol("miSimbolo"); // Ejemplo de variable símbolo
// 9. Variables de tipo BigInt: se utilizan para almacenar números enteros grandes.
let numeroGrande = BigInt(123456789012345678901234567890); // Ejemplo de variable BigInt
// 10. Variables de tipo función (function): se utilizan para almacenar funciones.
function saludar() {
    alert("¡Hola, " + nombre + "!");
} // Ejemplo de variable función
// 11. Variables de tipo fecha (Date): se utilizan para trabajar con fechas y horas.
let fechaActual = new Date(); // Ejemplo de variable fecha
// 12. Variables de tipo expresión regular (RegExp): se utilizan para trabajar con patrones de texto.
let patron = /[a-zA-Z]+/; // Ejemplo de variable expresión regular
// 13. Variables de tipo mapa (Map): se utilizan para almacenar pares clave-valor.
let mapa = new Map();
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2"); // Ejemplo de variable mapa
// 14. Variables de tipo conjunto (Set): se utilizan para almacenar valores únicos.
let conjunto = new Set();
conjunto.add("valor1");
conjunto.add("valor2"); // Ejemplo de variable conjunto
// 15. Variables de tipo WeakMap: se utilizan para almacenar pares clave-valor con claves que pueden ser recolectadas por el recolector de basura.
let weakMap = new WeakMap();
let objetoClave = {};
weakMap.set(objetoClave, "valor"); // Ejemplo de variable WeakMap
// 16. Variables de tipo WeakSet: se utilizan para almacenar valores únicos con referencias débiles.
let weakSet = new WeakSet();
let objetoValor = {};
weakSet.add(objetoValor); // Ejemplo de variable WeakSet
// 17. Variables de tipo Promise: se utilizan para manejar operaciones asíncronas.
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operación completada");
    }, 2000);
}); // Ejemplo de variable Promise
// 18. Variables de tipo AsyncFunction: se utilizan para definir funciones asíncronas.
async function funcionAsincrona() {
    let resultado = await promesa;
    console.log(resultado);
} // Ejemplo de variable AsyncFunction
// 19. Variables de tipo Generador (Generator): se utilizan para crear funciones generadoras que pueden pausar y reanudar su ejecución.
function* generador() {
    yield "Primer valor";
    yield "Segundo valor";
} // Ejemplo de variable Generador
// 20. Variables de tipo Iterador (Iterator): se utilizan para recorrer colecciones de datos.
function iterador(array) {
    let indice = 0;
    return {
        next: function() {
            if (indice < array.length) {
                return { value: array[indice++], done: false };
            } else {
                return { done: true };
            }
        }
    };
} // Ejemplo de variable Iterador
// 21. Variables de tipo Proxy: se utilizan para crear objetos que interceptan operaciones en otros objetos.
let objetoOriginal = {
    mensaje: "Hola, mundo!"
};
let proxy = new Proxy(objetoOriginal, {
    get: function(objeto, propiedad) {
        if (propiedad in objeto) {
            return objeto[propiedad];
        } else {
            return "Propiedad no encontrada";
        }
    }
}); // Ejemplo de variable Proxy
// 22. Variables de tipo Reflect: se utilizan para realizar operaciones de reflexión en objetos.
let objetoReflect = {
    nombre: "JavaScript",
    version: "ES6"
};
let propiedades = Reflect.ownKeys(objetoReflect); // Ejemplo de variable Reflect
// 23. Variables de tipo Intl: se utilizan para trabajar con internacionalización y localización.
let numeroFormateado = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
}).format(123456.789); // Ejemplo de variable Intl
// 24. Variables de tipo WebAssembly: se utilizan para trabajar con código compilado en WebAssembly.
// (Este es un ejemplo conceptual, ya que WebAssembly no se define directamente en JavaScript)
// 25. Variables de tipo SharedArrayBuffer: se utilizan para compartir memoria entre hilos en aplicaciones multihilo.
let bufferCompartido = new SharedArrayBuffer(1024); // Ejemplo de variable SharedArrayBuffer
// 26. Variables de tipo Atomics: se utilizan para realizar operaciones atómicas en SharedArrayBuffer.
let atomicos = new Int32Array(bufferCompartido);
atomicos[0] = 42; // Ejemplo de variable Atomics
// 27. Variables de tipo ArrayBuffer: se utilizan para representar datos binarios de forma genérica.
let buffer = new ArrayBuffer(16); // Ejemplo de variable ArrayBuffer
// 28. Variables de tipo DataView: se utilizan para leer y escribir datos en un ArrayBuffer de forma flexible.
let vistaDatos = new DataView(buffer);
// Ejemplo de variable DataView
vistaDatos.setInt32(0, 123456789); // Escribir un número entero en el ArrayBuffer
let numeroLeido = vistaDatos.getInt32(0); // Leer el número entero del ArrayBuffer
console.log("Número leído del ArrayBuffer:", numeroLeido); // Mostrar el número leído en la consola


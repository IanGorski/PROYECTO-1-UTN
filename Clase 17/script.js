//Array de usuarios
//Usuario: Objeto, name, email, password, id
//Hago un contrato donde aseguro que un usuario en mi aplicación es un objeto con ciertas propiedades (name, email, pw, id)
let user = [
    {
        id: 1,
        name: 'Pepe',
        email: 'pepe@gmail.com',
        password: 'pepe_123'
    },
        {
        id: 2,
        name: 'Maria',
        email: 'maria@gmail.com',
        password: 'maria_123'
    },
        {
        id: 3,
        name: 'Juan',
        email: 'juan@gmail.com',
        password: 'juan_123'
    }
]


//Array de productos (Hacer 5)
//Cada producto debe tener: price, id, title, stock

let products = [
    { id: 1, title: 'Producto 1', price: 100, stock: 10 },
    { id: 2, title: 'Producto 2', price: 200, stock: 5 },
    { id: 3, title: 'Producto 3', price: 150, stock: 8 },
    { id: 4, title: 'Producto 4', price: 300, stock: 2 },
    { id: 5, title: 'Producto 5', price: 250, stock: 7 }
];

//Hagan una funcion que se llame buscarProductoPorId
//buscarProductoPorId(id) y va a retornar el producto buscado
/*
Como podría resolver esto?
*/

function buscarProductoPorId(id) {
    for (let product of products) {
        if (product.id === id) {
            return product;
        }
    }
}

console.log(buscarProductoPorId(1))

//Crear la funcion llamada buscarPorTitulo
function buscarPorTitulo(title) {
    for (let product of products) {
        if (product.title === title) {
            return product;
        }
    }
    return undefined;
}


//Crear una funcion que se llame buscarProductoPorPrecioYTitulo
//buscarProductoPorPrecioYTitulo(precio, titulo)

function buscarProductoPorPrecioYTitulo(precio, titulo) {
    for (let product of products) {
        if (product.price === precio && product.title === titulo) {
            return product;
        }
    }
}

//En todas las funciones que hicimos el unico bloque que cambia es la condicion, dicha condicion naturalmente siempre sera distinta
//Me gustaria tener una funcion llamada buscarProducto, va a recibir 1 parametro llamado condicion, dicho parametro sera una FUNCION

function productoTieneTituloChinchulines (){
    return producto.title === 'chinchulines'
}

function productoTienePrecioMil (producto){
    return producto.price === 1000
}

console.log(productoTieneTituloChinchulines(productos[0]))
console.log(productoTieneTituloChinchulines(productos[1]))
console.log(productoTieneTituloChinchulines(productos[2]))
console.log(productoTieneTituloChinchulines(productos[3]))
console.log(productoTieneTituloChinchulines(productos[4]))

console.log(productoTienePrecioMil(productos[0]))
console.log(productoTienePrecioMil(productos[1]))
console.log(productoTienePrecioMil(productos[2]))
console.log(productoTienePrecioMil(productos[3]))
console.log(productoTienePrecioMil(productos[4])) 

//Le decimos callback a las funciones recibidas por parametros
//Por que? porque son llamadas por detras

//El tipo de dato de condicionCallback es function
function buscarProducto (condicionCallback) {
    for(let producto of productos){
        //Confio en que la funcion condicionCallback me devolvera un booleano
        if(condicionCallback(producto)){
            return producto
        }
    }
}

buscarProducto(productoTienePrecioMil)

//Hacer una funcion que se llame solicitarDatoYMostrar
//Recibira el parametro como MostrarCallback, que sera una funcion, esa funcion sera la accion que como se mostrara el dato ingresado
//Que solicitara un dato por prompt y luego invocara y pasara el mensaje a la callback comoMostrar

function solicitarDatoYMostrar(comoMostrarCallback){
    let dato = prompt('Ingresa un dato')
    comoMostrarCallback(dato)
}

function mostrarPorHTML (dato){
    document.write('El dato ingresado es: ' + dato)
}

solicitarDatoYMostrar(mostrarPorHTML)

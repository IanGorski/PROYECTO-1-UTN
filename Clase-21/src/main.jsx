/*
Cualquier archivo de .jsx debe importar a React, de no ser así es propenso a errores
*/

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import PI, { sumar, dividir } from './math.js'

/* import, from, export es sintaxis de JS */
// Importar una función desde un archivo
let numero_1 = 10
let numero_2 = 20
console.log(sumar(numero_1, numero_2))
console.log(dividir(numero_1, numero_2))


//Es una funcion que permite enlazar mi aplicacion de React con mi index.html
// createRoot es una funcion que permite crear un root de React
// document.getElementById('root') es el elemento del DOM donde se va a render
// App es el componente principal de la aplicacion
// render es una funcion que permite renderizar el componente en el root
createRoot(document.getElementById('root')).render(
    <App />
)



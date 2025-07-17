//Cualquier archivo de .jsx debe importar React para poder usar JSX
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {restar, sumar} from './math.js' 

/* import, from, export es sintaxis de JS */
/* En JS hay 2 tipos de archivos: CommonJS y module, actualmente se usa module */


let numero_1 = 10
let numero_2 = 20
console.log(sumar(numero_1, numero_2))
console.log(restar(numero_1, numero_2))


//Es una funcion que permite enlazar mi aplicación de React con el DOM
//createRoot es una función que permite crear un root para la aplicación
createRoot(document.getElementById('root')).render(
    <App />
)

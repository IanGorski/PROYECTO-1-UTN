*Archivo JSX: No se puede leer en el navegador*
========================
Se convierte un archivo JSX a un archivo JavaScript que el navegador pueda entender.
Para que el navegador pueda entender un archivo JSX, es necesario transformarlo a JavaScript. Esto se logra utilizando herramientas como Babel o Vite, que permiten compilar el código JSX a un formato compatible con los navegadores.
En este caso, se utiliza Vite, que es un bundler moderno y rápido para aplicaciones web. Vite permite desarrollar aplicaciones con JSX de manera eficiente, transformando el código JSX en JavaScript que el navegador puede interpretar.
Para utilizar Vite, es necesario tener instalado Node.js y npm (Node Package Manager). Una vez que se tiene el entorno configurado, se puede crear un proyecto Vite y comenzar a escribir código JSX. Vite se encargará de compilar el código y generar los archivos necesarios para que el navegador pueda ejecutarlo correctamente.

*Archivo main.jsx*
========================
Import, from, export es sintaxis de JS.
En JS hay 2 tipos de archivos: CommonJS y module, actualmente se usa module. (Archivo index.html linea 11)
JS modular: permite importar y exportar funciones, objetos o valores entre diferentes archivos, facilitando la organización y reutilización del código.
    </StrictMode>,
     )
     
     // El código JSX se convierte a JavaScript que el navegador puede entender.
     // Vite se encarga de esta transformación automáticamente durante el proceso de desarrollo.

//Export default: Permite exportar un único valor por archivo, facilitando la importación en otros archivos.
//Export: Permite exportar múltiples valores desde un archivo, lo que permite una mayor flexibilidad al importar solo lo necesario en otros archivos.

*Archivo math.js*
//Al poner export antes de la declaración de la función, se convierte en un módulo
//Esto permite que la función sea importada en otros archivos 

//Pueden ser funciones, variables, objetos, arrays, etc.
//Organización del código (Modularización)
//patterns.dev
========================

*createRoot*: Es una función que permite enlazar mi aplicación de React con el DOM. createRoot es una función que permite crear un root para la aplicación.
Muestro mi aplicación de React dentro del elemento con id 'root' en el archivo index.html.
Document = index.html
========================
Cualquier archivo de .jsx debe importar React para poder usar JSX
El componente App es el componente principal de la aplicación
Las funciones que retornan HTML se llaman componentes, se las escribe con mayúscula al inicio. 
Se los puede instanciar como etiquetas HTML, por ejemplo: <App /> (Angulares)
El return debe retornar un único elemento, si se quiere retornar más de uno, se deben envolver en un fragmento o en un div.
========================

function App () {
  // Aquí puedes definir el estado, efectos, etc. si es necesario
  let mensaje = "Hola, soy un componente App";
  let nombre = "Ian";
  return (
    <div>
      <Navbar />
      <h1>{mensaje} {nombre}</h1>
      <ComponenteTonto />
      <ComponenteTonto />
      <ComponenteTonto />
      <ComponenteTonto />
    </div>
  );
}
export default App;

Dentro de la función, se crean dos variables locales: mensaje y nombre, que almacenan cadenas de texto. El componente retorna un bloque JSX que representa la estructura visual: incluye el componente <Navbar />, un encabezado <h1> que muestra el mensaje y el nombre usando interpolación de variables, y cuatro instancias del componente <ComponenteTonto />. Finalmente, la función se exporta como el componente principal de la aplicación con export default App. Esta estructura permite organizar la interfaz y reutilizar componentes en React de manera sencilla.

function alertar() {
  alert("SOY UNA ALERTA");
}
<button onClick={alertar}>Mostrar Alerta</button>



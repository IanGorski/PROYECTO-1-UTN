*Interpolación de código en React^*
Se refiere a la capacidad de insertar expresiones JavaScript dentro del JSX, que es la sintaxis utilizada por React para definir componentes. Esto permite que los desarrolladores integren dinámicamente valores y lógica en su UI.
Ejemplo:
```jsx
const name = "Mundo";
const element = <h1>Hola, {name}!</h1>;
```

*El componente App.jsx es el componente principal de la aplicación React*

*props* 
Son las propiedades que se pasan a los componentes en React
El componente ProductCard.jsx es un componente que representa una tarjeta de producto en la aplicación
Siempre estará accesible para un componente y siempre será un objeto
```jsx
function ProductCard({ producto }) {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <span>El precio de mi producto es ${producto.precio - (producto.precio * 0.21)} </span>
        </div>
    );

Si no hay props (no le pasamos ningún dato al componente) será un objeto vacío


'Desestructuración de objetos'
Es una sintaxis de JavaScript que permite extraer propiedades de un objeto y asignarlas a variables individuales. En el contexto de React, se utiliza comúnmente para acceder a las propiedades de los componentes de manera más concisa.
Ejemplo: const {nombre, precio} = producto;    

//MostrarDetalle es un componente que muestra nombre y precio del producto
//Llaves en los parametros indican que es un objeto
function MostrarDetalle() { 
    const ({nombre, precio}) = producto;
    return (
        <div>
            <h2>Detalles del producto</h2>
            <p>Nombre: {nombre}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}

*Mock de datos es una técnica utilizada para simular datos reales en el desarrollo y pruebas de aplicaciones. Permite a los desarrolladores trabajar con datos ficticios que imitan la estructura y el formato de los datos reales sin necesidad de acceder a una base de datos o API real.*
Ejemplo:
```jsx
const mockProducto = {
    name: "iPhone 14",
    price: 1200,
    id: 1
};
```

*LISTAS DE REACT*

Son arrays de elementos que se renderizan dinámicamente en la interfaz de usuario. Se utilizan para mostrar colecciones de datos, como productos, usuarios o cualquier otro tipo de información que se pueda iterar.
Ejemplo:
```jsx
const productos = [
    { id: 1, name: "iPhone 14", price: 1200 },
    { id: 2, name: "iPhone 13", price: 900 }
];
```
//map() es un método de los arrays que permite iterar sobre cada elemento de un array y aplicar una función a cada uno de ellos, devolviendo un nuevo array con los resultados.
```jsx
productos.map((producto) => (
    <ProductCard key={producto.id} producto={producto} />
));

//key es una propiedad especial que se utiliza en React para identificar de manera única cada elemento de una lista. Es importante para el rendimiento y la correcta actualización de los componentes.
//Se recomienda usar un identificador único, como un ID, para cada elemento de la lista
//En el ejemplo anterior, se utiliza producto.id como key para cada ProductCard.

const lista = [
  <div key="1">Y te vas al cielo</div>, 
  <div key="2">Soy un elemento</div>, 
  <button key="3">Comprar</button>
];

const lista2 = [
  <ProductCard key="1" id="1" name="Cuchara metalica" price={1000} />, 
  <ProductCard key="2" id="2" name="Cuchara plastica" price={500} />,
  <ProductCard key="3" id="3" name="Cuchara de oro" price={5000} />
];

return (
    <div>
      {lista}
      {lista2}
    </div>
  );
}

export default App;

Listas React no las escribimos nosotros a mano, sino que las obtenemos de una API o de un archivo JSON.
En el ejemplo anterior, se utiliza un array de objetos para representar productos y se mapea cada objeto a un componente ProductCard, pasando las propiedades correspondientes.

EJEMPLO: 
Tengo: ['hola', 'que tal', 'estás']
Quiero: [{saludo: 'hola'}, {saludo: 'que tal'}, {saludo: 'estás'}]
const array_original = ['hola', 'que tal', 'estás']
const resultado = []

for (let elemento of array_original) {
  resultado.push({ saludo: elemento })
}
console.log(resultado);

El ejemplo de la linea 113 a 119 es una forma de transformar un array de strings en un array de objetos, donde cada objeto tiene una propiedad "saludo" que contiene el string original. Esto se logra utilizando un bucle for y el método push() para agregar cada nuevo objeto al array resultado.

Podemos hacer un HTML con divs ya que estamos en JSX:

const array_original = [<div>hola</div>, <div>que tal</div>, <div>estás</div>]
const resultado = []

for (let elemento of array_original) {
  resultado.push(<div>{elemento}</div>)
}
console.log(resultado);

return (
    <div>
        {resultado}
    </div>
);

Mapear un array de objetos a un array de componentes es una práctica común en React para renderizar listas dinámicas. Utilizando el método `map()`, podemos transformar cada objeto del array en un componente React, pasando las propiedades necesarias a cada uno.
Callback de map es una función que se ejecuta para cada elemento del array, recibiendo el elemento actual como argumento. Esta función puede ser una función anónima o una función definida previamente.
Lo llamamos "callback" porque se pasa como argumento a la función `map()`, que la llamará para cada elemento del array.
El array resultante sera un array donde cada elemento es el resultado de aplicar la función callback a cada elemento del array original.
Map siempre retorna un array y la cantidad de elementos del array resultante será igual a la cantidad de elementos del array original.

Ejemplo:
  const productos = [
      { id: 1, name: "Cuchara metalica", price: 1000 },
      { id: 2, name: "Cuchara plastica", price: 500 },
      { id: 3, name: "Cuchara de oro", price: 5000 }
  ];

const resultado = productos.map(
    /*Función anónima*/ function(producto){
        console.log('hola' + producto.name);
        return producto.name + producto.price;
    }
)
console.log(resultado);

Lista de productos mapeada a componentes ProductCard:
const lista_productos = productos.map(
    function(producto){
        return (
            <ProductCard 
                name={producto.name}
                price={producto.price}
                id={producto.id} 
            />
        );
    }

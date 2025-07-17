import React from "react";  
import ProductCard from "./Components/ProductCard/ProductCard.jsx";

function App() {
//mock de datos
  const productos = [
      { id: 1, name: "Cuchara metalica", price: 1000 },
      { id: 2, name: "Cuchara plastica", price: 500 },
      { id: 3, name: "Cuchara de oro", price: 5000 }
  ];

//React Listas
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


/*  function MostrarDetalle({ producto }) {
    const { nombre, precio } = producto;
    return (
        <div>
            <h2>Detalles del producto</h2>
            <p>Nombre: {nombre}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}
*/
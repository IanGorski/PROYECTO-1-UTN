import React from 'react';
import ComponenteTonto from './Components/ComponenteTonto/ComponenteTonto.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

function App () {
  // Aquí puedes definir el estado, efectos, etc. si es necesario
  let mensaje = "Hola, soy un componente App";
  let nombre = "Ian";
  function alertar() {
    alert("SOY UNA ALERTA");
  }
  return (
    <div>
      <Navbar />
      <h1>{mensaje} {nombre}</h1>
      <button onClick={alertar}>Mostrar Alerta</button>
      <ComponenteTonto />
      <ComponenteTonto />
      <ComponenteTonto />
      <ComponenteTonto />
    </div>
  );
}
export default App;



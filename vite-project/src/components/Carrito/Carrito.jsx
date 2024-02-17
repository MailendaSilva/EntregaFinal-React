import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const vaciarCarritoTotal = () =>{
    vaciarCarrito();
  }

  const finalizarCompra = () => {
    // Al hacer clic en "FINALIZAR COMPRA", redirige a la página de contacto
    window.location.href = '/checkout';
  }

  return (
    <div className="card">
      <h1>Carrito de compras</h1>
      {carrito.map((prod) => (
         <div  key={prod.id} className="carrito-estilos">
        <h3>{prod.nombre}</h3>
        <img src={`${prod.imagen}`} alt={prod.nombre} height="200" width="200" />
        <p>Cantidad: {prod.contador}</p>
        <p>Precio unitario: $ {prod.precio}</p>
        <p>Precio total: $ {prod.precio * prod.contador}</p>
        </div>
      ))}

      <h2>Precio total: $ {precioTotal()}</h2>
      <button onClick={vaciarCarritoTotal} className="botones">VACIAR CARRITO</button>
      <button onClick={finalizarCompra} className="botones">FINALIZAR COMPRA</button>
    </div>
  );
};
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';


export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext);
  return (
    <div>
         <Link className="nav-link active" to="/carrito">🛒
         <span> {cantidadCarrito()}</span>
         </Link>
    </div>
  )
}

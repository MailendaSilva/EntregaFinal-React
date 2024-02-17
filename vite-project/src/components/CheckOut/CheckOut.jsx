import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./CheckOut.css"



const CheckOut = () => {
  const [pedidoId, setPedidoId] = useState('');
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.error('Error al agregar el pedido:', error);
      });
  };

  if (pedidoId) {
    return (
      <div>
        <h1 className = "titulos">Muchas gracias por tu compra, que lo disfrutes! 🍟🍔💖</h1>
        <p className = "titulos">Tu numero de orden es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className = "titulos">Ya casi finalizas tu compra!</h1>
      <form onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register('nombre')} />

        <input type="text" placeholder="Ingresá tu apellido" {...register('apellido')} />

        <input type="phone" placeholder="Ingresá tu teléfono" {...register('telefono')} />

        <input type="email" placeholder="Ingresá tu mail" {...register('mail')} />

        {/*VALIDACION MAIL*/}
        <input
          type="email"
          placeholder="Ingresá de nuevo tu mail"
          {...register('confirmMail', {
            validate: (value) => value === watch('mail') || 'Los correos electrónicos no coinciden',
          })}
        />
        {errors.confirmMail && <p>{errors.confirmMail.message}</p>}

        <button type="submit" className="botones">
          REALIZAR COMPRA
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
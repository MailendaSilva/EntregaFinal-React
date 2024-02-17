import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemListContainer/ItemList.css";
import { CartContext } from "../../Context/CartContext";


 const ItemDetail = ({item}) => {

  const {carrito, agregarCarrito} = useContext (CartContext);
  console.log(carrito)
  const [contador, setContador] = useState(1);

  const aumentar = () => {
    console.log("Veces que se hizo clic:", contador); 
    contador < item.stock && setContador(contador + 1);
  };
  
  const decrementar = () => {
    console.log("Veces que se hizo clic resta:", contador); 
    if (contador > 0){
    setContador(contador - 1);}
  };
 
  return (
    <div  className="card">
        <h2 className="titulos">{item.nombre}</h2>
        <img src={`${item.imagen}`} alt={item.nombre} height="200" width="200" />
        <p className="detalle">${item.precio}</p>
        <p className="detalle">{item.detalle}</p>
        <ItemCount contador={contador} aumentar={aumentar} decrementar = {decrementar} agregarCarrito={()=>{agregarCarrito (item,contador)}} />
    </div>
  )
}
export default ItemDetail;
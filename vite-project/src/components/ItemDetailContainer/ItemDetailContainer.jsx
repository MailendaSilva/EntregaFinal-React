import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import {doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';

 const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    //nos devuelve un objeto con los parametros que haya en url
    const { id } = useParams();

    useEffect(() => {
    
      const docRef = doc (db, "productos", id)
      getDoc (docRef)
      .then ((resp)=>{
        setItem  (
          {...resp.data (), id: resp.id}
        );
      })

    }, [id])
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}
export default ItemDetailContainer;
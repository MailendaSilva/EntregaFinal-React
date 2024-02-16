import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (!id) {
          throw new Error('ID no válido');
        }

        const docRef = doc(db, 'productos', id);
        const resp = await getDoc(docRef);

        if (resp.exists()) {
          setItem({
            ...resp.data(),
            id: resp.id,
          });
        } else {
          console.log('Documento no encontrado');
          setItem(null); 
        }
      } catch (error) {
        console.error('Error al obtener el documento:', error);
        setItem(null);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Item no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
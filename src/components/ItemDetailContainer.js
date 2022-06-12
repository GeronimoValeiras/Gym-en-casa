import React, { useState, useEffect } from 'react'
import { traerProducto } from './products'  //export con llaves porque es una const lo que traigo. Los default van sin llave
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((rej) => {
                console.log(rej)
            })
    }, [])
  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
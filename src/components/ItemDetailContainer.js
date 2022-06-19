import React, { useState, useEffect } from 'react'
import { traerProductoPorId } from './products'  //export con llaves porque es una const lo que traigo. Los default van sin llave
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        traerProductoPorId(parseInt(id))
            .then((res) => {
                setProduct(res);
            })
            .catch((rej) => {
                console.log(rej)
            })
    }, [product])
  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
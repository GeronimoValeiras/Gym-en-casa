import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ product }) => {
    return (
      <section>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <ItemCount initial={0} stock={product.stock} />
      </section>
    )
  }

export default ItemDetail
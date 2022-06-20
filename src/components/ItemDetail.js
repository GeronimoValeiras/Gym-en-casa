import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ product }) => {

  const onAdd = (cantidadProducto) => {
    console.log("desde item detail:" + cantidadProducto)
  }
    return (
      <section>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
          <button>Comprar</button>
      </section>
    )
  }

export default ItemDetail
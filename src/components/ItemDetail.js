import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({ product }) => {

  const [cantidadProducto, setCantidadProducto] = useState()

  const onAdd = (cantidadProducto) => {
    setCantidadProducto(cantidadProducto)
  }

  if (cantidadProducto > 0){
    return (
      <section>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <p>Agregaste {product.nombre}*{cantidadProducto} al carrito!</p>
          <Link to='/cart'><button>Proceder a la compra - Ir al carrito</button></Link>
      </section>
    )
  }else {
    return (
      <section>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
          <p>Unidades disponibles ({product.stock})</p>
      </section>
    )
  }

    
  }

export default ItemDetail
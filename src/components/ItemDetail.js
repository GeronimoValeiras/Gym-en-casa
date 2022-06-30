import React from 'react'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { contexto } from './CartContext'
import Checkout from './Checkout'


const ItemDetail = ({ product }) => {

  const { addItem, cart } = useContext(contexto)

  const [cantidadProducto, setCantidadProducto] = useState()

  const onAdd = (cantidadProducto) => {
    setCantidadProducto(cantidadProducto)
    addItem(product, cantidadProducto)
  }

  return (
    <section>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <section>
          {cantidadProducto > 0 ? (<><p>Agregaste {product.nombre}*{cantidadProducto} al carrito!</p><Checkout/></>) : (<><ItemCount initial={0} stock={product.stock} onAdd={onAdd} /><p>Unidades disponibles ({product.stock})</p></>)}
          </section>
    </section>
  )
  }

export default ItemDetail
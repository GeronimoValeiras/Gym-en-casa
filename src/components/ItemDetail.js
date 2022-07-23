import React from 'react'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { contexto } from './CartContext'
import Checkout from './Checkout'


const ItemDetail = ({ product }) => {

  const { addItem } = useContext(contexto)

  const [cantidadProducto, setCantidadProducto] = useState()

  const onAdd = (cantidadProducto) => {
    setCantidadProducto(cantidadProducto)
    addItem(product, cantidadProducto)
  }

  
  return (
    <section className='detailSection'>
          <img src={product.imagen} alt="" className='detailSection__image' />
          <section className='detailSection__aside'>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <h3>$ {product.precio}</h3>
          </section>
          <section className='detailSection__checkout'>
          {cantidadProducto > 0 ? (<><p>Agregaste {product.nombre}*{cantidadProducto} al carrito!</p><Checkout/></>) : (<><ItemCount initial={0} stock={product.stock} onAdd={onAdd} /><p>Unidades disponibles ({product.stock})</p></>)}
          </section>
    </section>
  )
  }

export default ItemDetail
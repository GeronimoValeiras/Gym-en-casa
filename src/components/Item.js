import React from 'react'
import ItemCount from './ItemCount'

function Item({id, nombre, precio, stock, descripcion, imagen}) {
  return (
    <section>
        <h3>{nombre}</h3>
        <h4>$ {precio}</h4>
        <img src={imagen} alt="" />
        <ItemCount initial={0} stock={stock} />
    </section>
  )
}

export default Item
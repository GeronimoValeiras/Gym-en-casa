import React from 'react'
import ItemCount from './ItemCount'

function Item({id, nombre, precio, stock, descripcion}) {
  return (
    <section>
        <h3>{nombre}</h3>
        <h4>$ {precio}</h4>
        <p>{descripcion}</p>
        <ItemCount initial={1} stock={stock} />
    </section>
  )
}

export default Item
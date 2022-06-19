import React from 'react'
import { Link } from 'react-router-dom'

function Item({id, nombre, precio, imagen}) {
  return (
    <section>
        <h3>{nombre}</h3>
        <h4>$ {precio}</h4>
        <img src={imagen} alt="" />
        <Link to={`/detail/${id}`}>
          <button>Ver detalle</button>
        </Link>
    </section>
  )
}

export default Item
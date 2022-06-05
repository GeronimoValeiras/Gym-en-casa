import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    
    const aumentarContador = () => {
        if (contador < 5) {
            setContador(contador + 1)
        }
    }

    const bajarContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

  return (
    <section>
        <p>Cantidad: {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={bajarContador}>-</button>
        <button>Agregar al carrito</button>
    </section>
  )
}

export default ItemCount
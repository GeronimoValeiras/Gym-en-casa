import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    
    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }else {
            alert ("No puede superar el stock disponible")
        }
    }

    const bajarContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const confirmarContador = () => {
        onAdd(contador)
    }

  return (
    <section>
        <p>Cantidad: {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={bajarContador}>-</button>
        <button onClick={confirmarContador}>Agregar al carrito</button>
    </section>
  )
}

export default ItemCount
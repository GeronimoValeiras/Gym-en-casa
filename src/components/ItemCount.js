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
    <section className='detailSection__checkout__counter'>
        <p className='detailSection__checkout__counter__cant'>Cantidad: {contador}</p>
        <button onClick={aumentarContador} className='detailSection__checkout__counter__plus'>+</button>
        <button onClick={bajarContador} className='detailSection__checkout__counter__less'>-</button>
        <button onClick={confirmarContador} className='detailSection__checkout__counter__ok'>Agregar al carrito</button>
    </section>
  )
}

export default ItemCount
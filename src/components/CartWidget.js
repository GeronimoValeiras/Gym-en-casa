import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'


const CartWidget = () => {

  const resultado = useContext(contexto)

  return (
    <>
        <Link to='/cart'><span class="material-symbols-outlined">shopping_cart</span> {resultado.addItemCartWidget}</Link>
    </>
  )
}

export default CartWidget
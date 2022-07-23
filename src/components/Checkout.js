import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <Link to='/cart'><button className='detailSection__checkout__toCart'>Proceder a la compra - Ir al carrito</button></Link>
  )
}

export default Checkout
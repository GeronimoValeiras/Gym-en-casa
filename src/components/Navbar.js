import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <navbar>
        <h1>GeC</h1>
            <a href="#" target='_blank'>Quiénes Somos</a>
            <a href="#" target='_blank'>Productos</a>
            <a href="#" target='_blank'>Contacto</a>
            <CartWidget />
    </navbar>
  )
}

export default Navbar
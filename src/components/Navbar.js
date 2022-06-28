import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <navbar>
        <h1>GeC</h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/category/kits'>Kits de Entrenamiento</Link>
              </li>
              <li>
                <Link to='/category/discos'>Discos</Link>
              </li>
              <li>
                <Link to='/category/barras'>Barras</Link>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
    </navbar>
  )
}

export default Navbar
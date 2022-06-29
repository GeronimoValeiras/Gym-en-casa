import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {contexto} from './CartContext'

const Navbar = () => {
  const { cart } = useContext(contexto)
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
                <Link to='/cart'><CartWidget /><p>{cart.quantity}</p></Link>
              </li>
            </ul>
    </navbar>
  )
}

export default Navbar
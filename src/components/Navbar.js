import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {contexto} from './CartContext'

const Navbar = () => {
  const { cart } = useContext(contexto)
  return (
    <navbar>
        <h1 className='tittle'>GeC</h1>
            <ul className='navbar'>
              <li className='navbar__items'>
                <Link to='/'>Home</Link>
              </li>
              <li className='navbar__items'>
                <Link to='/category/kits'>Kits de Entrenamiento</Link>
              </li>
              <li className='navbar__items'>
                <Link to='/category/discos'>Discos</Link>
              </li>
              <li className='navbar__items'>
                <Link to='/category/barras'>Barras</Link>
              </li>
              <li className='navbar__items'>
                <Link to='/cart'><CartWidget /><p>{cart.quantity}</p></Link>
              </li>
            </ul>
    </navbar>
  )
}

export default Navbar
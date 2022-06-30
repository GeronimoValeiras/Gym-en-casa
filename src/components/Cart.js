import React, { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const {cart, addItemCartWidget, clear, removeItem, addItem} = useContext(contexto)

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      {cart.map((product) => (
        <section key={product.id}>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {product.precio}</h4>
          <img src={product.imagen} alt="" />
          <button onClick={() => removeItem(product.id)}>Quitar del carrito</button>
        </section>
      ))}
      <section>
        <p>Cantidad de items en carro: {addItemCartWidget()}</p>
        <button onClick={clear}>Vaciar carrito</button>
      </section>
        <form>
          <input type='text' />
          <button onClick={handleClick}>Comprar</button>
        </form>
    </section>
  )
}

export default Cart
import React, { useContext, useState } from 'react'
import { contexto } from './CartContext'
import { productosDB } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Cart = () => {

  const {cart, addItemCartWidget, clear, removeItem, quantity, totalCartPrice, totalProductPrice} = useContext(contexto)

  const [data, setData] = useState({name:'', email:'', phone:''})

  const [order, setOrder] = useState('')

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const pedido = cart.map((product) => {
      return {
        nombre: product.nombre,
        cantidad: product.quantity
      }
    })
    const orderData = {
      buyer : {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
      pedido,
      date: serverTimestamp(),
      total: totalCartPrice(),
    }

    const orders = collection(productosDB, 'ordenes')
    addDoc(orders, orderData)
    .then((res) => {
      setOrder(res.id)
      clear();
    })

  }

  if(order !== ''){
    return <h1>Gracias por comprar en neustra tienda, tu código de compra es: {order}</h1>
  }

  return (
    <>
      {cart.lenght === 0 ? (
        <section>Tu carrito está vacío</section>
      ) : 
      (
    <section>
      {cart.map((product) => (
        <section key={product.id} className='cartSection'>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <h4>$ {totalProductPrice(product.precio, product.quantity)}</h4>
          <img src={product.imagen} alt="" />
          <button onClick={() => removeItem(product.id)}>Quitar del carrito</button>
        </section>
      ))}
      <section className='cartTotal'>
        <p className='cartTotal__items'>Cantidad de items en carro: {addItemCartWidget(quantity)}</p>
        <p className='carTotal__price'>Precio total: $ {totalCartPrice()}</p>
        <button onClick={clear}>Vaciar carrito</button>
      </section>
        <form onSubmit={handleSubmit} className='cartForm'>
          <input type='text' placeholder='Nombre' name='name' onChange={handleChange} value={data.name} required />
          <input type='text' placeholder='Email' name='email' onChange={handleChange} value={data.email} required />
          <input type='number' placeholder='Telefono' name='phone' onChange={handleChange} value={data.phone} required />
          <button>Comprar</button>
        </form>
    </section>
    )}
  </>
  )
}

export default Cart
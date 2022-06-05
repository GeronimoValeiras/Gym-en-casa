import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

  const onAdd = () => { }
  return (
    <>
    <section>
        <h2>{props.greeting}</h2>
        <h3>¡Un gimnasio en la comodidad de tu hogar!</h3>
        <section>
          <p>Kit de entrenamiento básico</p>
          <ItemCount stock={5} onAdd={onAdd} initial={1} />
        </section>
    </section>
    </>
  )
}

export default ItemListContainer
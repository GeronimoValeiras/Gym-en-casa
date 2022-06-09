import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ( {greeting}) => {


    return (
    <>
    <section>
        <h2>{greeting}</h2>
        <h3>¡Un gimnasio en la comodidad de tu hogar!</h3>
        <section>
          <ItemList />
        </section>
    </section>
    </>
  )  
}

export default ItemListContainer
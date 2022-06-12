import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react'
import { traerProductos } from './products'

function ItemList () {
    const [items, setItems] = useState([])

    useEffect(() => {
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((rej) => {
                console.log(rej)
            })
    }, [])

    if (items.length > 0) {
        return (
        items.map(p => 
            <Item id={p.id} nombre={p.nombre} key={p.id} precio={p.precio} stock={p.stock} descripcion={p.descripcion} imagen={p.imagen} />)
    )
    }else {
        return (
            <>
        <p>Cargando productos...</p>
        </>
        )
        
    }
    
}

export default ItemList
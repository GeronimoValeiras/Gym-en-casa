import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react'

function ItemList () {
    const [items, setItems] = useState([])

    useEffect (() => {
        const MockAsync = new Promise((res) => {
        setTimeout(() => {
        console.log("Cargando productos...")
        const productosDB = [
            {
                id: 1,
                nombre: 'Kit Entrenamiento Básico',
                precio: 1000,
                stock: 10,
                descripcion: 'Incluye 1 barra semi-olímpica, 20Kg en discos y 1 colchoneta'
            },
            {
                id: 2,
                nombre: 'Kit Entrenamiento Intermedio',
                precio: 2000,
                stock: 5,
                descripcion: 'Incluye 1 barra semi-olímpica, 40Kg en discos, 2 mancuernas armables, 1 colchoneta'
            },
            {
                id: 3,
                nombre: 'Kit Entrenamiento Avanzado',
                precio: 4000,
                stock: 2,
                descripcion: 'Incluye 1 barra olímpica, 80Kg en discos, 2 mancuernas armables, 1 colchoneta y 1 rueda abdominal'
            },
        ]
        res(productosDB)
        }, 2000)
    })

    MockAsync.then( productosDB => {
        setItems(productosDB)
    })
        
    }, [])

    if (items.length > 0) {
        return (
        items.map(p => 
            <Item id={p.id} nombre={p.nombre} key={p.id} precio={p.precio} stock={p.stock} descripcion={p.descripcion} />)
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
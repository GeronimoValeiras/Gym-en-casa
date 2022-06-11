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
                nombre: 'Kit 50kg Barra De Entrenamiento+10 Discos+mancuernas+bandas',
                precio: 13000,
                stock: 10,
                imagen: 'https://http2.mlstatic.com/D_NQ_NP_860127-MLA48578420920_122021-O.webp',
                descripcion: '1 barra 1.40 m, con 2 topes mariposa, 2 mancuernas de pvc a rosca, 2 discos de 10kg pvc, 4 discos 5 pvc, 4 discos 2.5 kg pvc, 1 banda latex intensidad liviana, 1 banda latex intensidad media'
            },
            {
                id: 2,
                nombre: 'Kit Entrenamiento Gris - Colcho Pesas Rueda Soga Y Mas',
                precio: 5000,
                stock: 5,
                imagen: 'https://http2.mlstatic.com/D_NQ_NP_975841-MLA50040152899_052022-O.webp',
                descripcion: '1 Colchoneta Medidas : 1.00mt x 50cm x 5cm (CON CIERRE), 1 Pesa Rusa x 3kg, 1 Soga de Salto 2.5mts C/ RULEMANES, 1 Par de mancuernas x 2kg c/u, 1 Banda circular de Latex, 1 Rueda Abdominal PREMIUM'
            },
            {
                id: 3,
                nombre: 'Set Kit De Entrenamiento Funcional N°1 Fitness 51 Piezas',
                precio: 10000,
                stock: 2,
                imagen: 'https://http2.mlstatic.com/D_NQ_NP_697579-MLA49785760081_042022-V.webp',
                descripcion: '2 Escalera de Coordinación 5 escalones (con varillas regulables y hebillas para unirse y transformarse en 1 escalera de 10), 4 Conos de 20cm Rígidos, 12 Conos Tortuga (colores varios según disponibilidad), 4 Varillas de Marcación y coordinación, 1 Tiraband Circular (colores varios), 1 Cuadrado de Coordinación, 4 Vallas Regulables y Combinables que incluyen: 8 Bases, 8 Uniones, 12 Bastones de 1mt',
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
const productosDB = [
    {
        id: 1,
        nombre: 'Kit 50kg Barra De Entrenamiento+10 Discos+mancuernas+bandas',
        precio: 13000,
        stock: 10,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_860127-MLA48578420920_122021-O.webp',
        descripcion: '1 barra 1.40 m, con 2 topes mariposa, 2 mancuernas de pvc a rosca, 2 discos de 10kg pvc, 4 discos 5 pvc, 4 discos 2.5 kg pvc, 1 banda latex intensidad liviana, 1 banda latex intensidad media',
        category: 'kits'
    },
    {
        id: 2,
        nombre: 'Kit Entrenamiento Gris - Colcho Pesas Rueda Soga Y Mas',
        precio: 5000,
        stock: 5,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_975841-MLA50040152899_052022-O.webp',
        descripcion: '1 Colchoneta Medidas : 1.00mt x 50cm x 5cm (CON CIERRE), 1 Pesa Rusa x 3kg, 1 Soga de Salto 2.5mts C/ RULEMANES, 1 Par de mancuernas x 2kg c/u, 1 Banda circular de Latex, 1 Rueda Abdominal PREMIUM',
        category: 'kits'
    },
    {
        id: 3,
        nombre: 'Set Kit De Entrenamiento Funcional N°1 Fitness 51 Piezas',
        precio: 10000,
        stock: 2,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_697579-MLA49785760081_042022-V.webp',
        descripcion: '2 Escalera de Coordinación 5 escalones (con varillas regulables y hebillas para unirse y transformarse en 1 escalera de 10), 4 Conos de 20cm Rígidos, 12 Conos Tortuga (colores varios según disponibilidad), 4 Varillas de Marcación y coordinación, 1 Tiraband Circular (colores varios), 1 Cuadrado de Coordinación, 4 Vallas Regulables y Combinables que incluyen: 8 Bases, 8 Uniones, 12 Bastones de 1mt',
        category: 'kits'
    },
    {
        id: 4,
        nombre: 'Disco Bumber 20kg',
        precio: 4000,
        stock: 4,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/disco-bumper-10-kg-centro-estampado%20%282%29.jpg',
        descripcion: 'Disco de caucho con centro de acero. Diámetro 50 mm. (olímpico)',
        category: 'discos'
    },
    {
        id: 5,
        nombre: 'Disco Bumber 10kg',
        precio: 2000,
        stock: 8,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/disco-bumper-10-kg-centro-estampado%20%282%29.jpg',
        descripcion: 'Disco de caucho con centro de acero. Diámetro 50 mm. (olímpico)',
        category: 'discos'
    },
    {
        id: 6,
        nombre: 'Disco Bumber 5kg',
        precio: 1000,
        stock: 12,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/disco-bumper-10-kg-centro-estampado%20%282%29.jpg',
        descripcion: 'Disco de caucho con centro de acero. Diámetro 50 mm. (olímpico)',
        category: 'discos'
    },
    {
        id: 7,
        nombre: 'Barra Olímpica de 2.20mts con rulemanes',
        precio: 30000,
        stock: 2,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/barra-olimpica-220-mts-con-topes-rulemanes-50-mm.jpg',
        descripcion: 'PESO 20 KG SOPORTA 300 KG. Para discos Olimpicos de 50 mm de diametro',
        category: 'barras'
    },
    {
        id: 8,
        nombre: 'Barra hueca de 1.8mts',
        precio: 3500,
        stock: 6,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/barra-hueca-de1.80-mts-diametro-28-mm-para-disco-de-30-mm-negra.jpg',
        descripcion: 'Barra metálica hueca pintada de 1,80 mts con topes. Para discos de 30mm de diámetro',
        category: 'barras'
    },
    {
        id: 9,
        nombre: 'Barra hexagonal olímpica',
        precio: 40000,
        stock: 2,
        imagen: 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/barra-trap-hexagonal-cromada-para-discos-olimpicos.jpg',
        descripcion: 'CON AGARRE  y SIN ROTORES (no son necesarios)',
        category: 'barras'
    },
]

export const traerProductos = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(productosDB)
        }, 2000)
    })
}

export const traerProductoPorId = (id) => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(productosDB.find(producto => producto.id === id))
        }, 500)
    })
}

export const traerProductosPorCategory = (category) => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(productosDB.filter(producto => producto.category === category))
        }, 500)
    })
}
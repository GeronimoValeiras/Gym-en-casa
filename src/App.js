//const App = () => 'Hola people exportando'
/* const App = () => {
    return <p>Hola people con export</p>
} No se puede agregar más cosas */
/* const App = () => {
    return <>
        <p>Hola</p>
        <p>people</p>
        <p>exportando</p>
    </>
} */
//Fragmento es una etiqueta vacía que no tiene nombre, se usa para rellenar y te permite meter varias etiquetas.

//export default variable
//export variable
//export default App 

//CLASE COMPONENTES

import Header from "./Header"
import Nav from "./Nav"

//Header "hola" con test termina siendo el nombre de la propiedad con la que se llama al parámetro. Por eso al objeto le agrego .test en aVerQueLlega (luego props).

const App = () => {
    return (
        <>
            <Header test="Hola" />
            <footer>
                <Nav inHeader={false} />
            </footer>
        </>
    )
}

export default App
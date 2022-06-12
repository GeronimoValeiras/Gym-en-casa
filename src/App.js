import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
const App = () => {
    return <>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a Gym en Casa!" />
        <ItemDetailContainer />
    </>
}

export default App 
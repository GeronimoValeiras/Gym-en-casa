import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MiProvider } from './components/CartContext'
const App = () => {
    return (
    <BrowserRouter>
        <MiProvider>
            <Navbar />
            <Routes>
                <Route path='/cart' element={<Cart />} />
                <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Gym en Casa, un gimnasio en la comodidad del hogar!" />} />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/category/:category' element={<ItemListContainer />} />
            </Routes>
        </MiProvider>    
    </BrowserRouter>
    )
}

export default App 
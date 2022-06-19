import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
    return <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Gym en Casa, un gimnasio en la comodidad del hogar!" />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
}

export default App 
const Nav = (props) =>{
    if (props.inHeader){
        return (
        <nav>
            <a href="">Productos</a>
            <a href="">Carrito</a>
            <a href="">miCuenta</a>
            <a href="">SoyHeader</a>
        </nav>
        )
    }else {
            return (
            <footer>
                <a href="">Productos</a>
                <a href="">Carrito</a>
                <a href="">miCuenta</a>
                <a href="">SoyFooter</a>
            </footer>
            )
        }
    }


export default Nav
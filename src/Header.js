import Nav from "./Nav"
//en console.log agrego .test para que lo tome como parámetro.

const Header = (props) => {
    console.log (props.test)

    const inHeader = true

    return (
        <header>
            <h1>Título</h1>
            <p>{props.test}</p>
            <Nav inHeader={true} />
        </header>
    )
}

export default Header
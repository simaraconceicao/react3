import { Link } from 'react-router-dom'
import '../Styles/Components/menu.css'

const Menu = () =>{

    return(
        <ul className="menu">
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link  className="link" to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link  className="link" to="/portfolio">Portfólio</Link>
            </li>
            <li>
                <Link className="link" to="/contato">Contato</Link>
            </li>

        </ul>
    )

}

export default Menu
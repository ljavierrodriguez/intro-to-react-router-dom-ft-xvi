import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    /* 
    Equivalencia:
    <NavLink></NavLink> => <a></a>

    to="" => href=""

    Ejemplo:

    Antes:
    <a className="" href="/">Home</a>

    Despues:
    <NavLink className="" to="/">Home</NavLink>
    
    */
    return (
        <>
            <h1 className="text-center"><i class="bi bi-8-circle-fill"></i></h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className={"nav-link"} to="/" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className={"nav-link"} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className={"nav-link"} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar;
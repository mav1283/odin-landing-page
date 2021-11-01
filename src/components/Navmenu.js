import { NavLink } from "react-router-dom";

function Navmenu(){
    return (
        <nav className="AppNav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navmenu;
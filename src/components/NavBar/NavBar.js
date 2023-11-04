import IconNav from "./IconNav/IconNav";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function NavBar(){

    const {totalQuantity} = useContext(CartContext);


return (
    <nav className="navbar" >
        <IconNav />
        <div className="navbar-menu">
            <div className="navbar-end">
                <NavLink to={'/category/Pcs'} className="button">Pcs</NavLink>
                <NavLink to={'/category/Monitores'} className="button">Monitores</NavLink>
                <NavLink to={'/category/Teclados'} className="button">Teclados</NavLink>
                <NavLink to={'/category/Estereos'} className="button">Estereos</NavLink>
                {
                    totalQuantity > 0 ? <CartWidget/> : <></>
                }
                
            </div>
        </div>
    </nav>
)
}


export default NavBar;
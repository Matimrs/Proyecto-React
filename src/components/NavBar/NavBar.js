import ButtonNav from "./ButtonNav/ButtonNav";
import IconNav from "./IconNav/IconNav";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
return (
    <nav className="navbar" >
        <IconNav />
        <div className="navbar-menu">
            <div className="navbar-end">
                <ButtonNav text="PCs"/>
                <ButtonNav text="Monitores"/>
                <ButtonNav text="Teclados"/>
                <ButtonNav text="Estereos"/>
                <CartWidget/>
            </div>
        </div>
    </nav>
)
}


export default NavBar;
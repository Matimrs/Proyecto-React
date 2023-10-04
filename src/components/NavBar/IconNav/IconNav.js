import icon from "./iconSuplent.svg";
import { Link } from "react-router-dom";

function IconNav(){
    return (
        <div className="navbar-brand">
            <Link to='/' className="navbar-item">
                <img width={30} src={icon} alt="icon-suplent" />
            </Link>
        </div>
    )
}

export default IconNav;
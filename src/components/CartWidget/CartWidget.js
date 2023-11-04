import { Link } from "react-router-dom";
import cart from "./cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget(){
const {totalQuantity} = useContext(CartContext);

    return(
        <div className="button">
        <Link to='/cart'>
            <img width="20px" src={cart} alt="cart"/>
            {totalQuantity}
        </Link>
        </div>
        
       
    )
}

export default CartWidget;
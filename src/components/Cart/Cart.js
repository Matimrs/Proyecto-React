import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ()=>{

    const {cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if(totalQuantity === 0){
        return(
            <div>
                <h2>El carrito se encuentra vacio</h2>
                <Link to='/'><button className="button is-link">Volver al Inicio</button></Link>
            </div>
        )
    }

    return(
        <div>
            {
                cart.map((e)=>{
                    return(
                        <CartItem key={e.id} {...e} />
                    )
                })
            }
            <h3>Total a pagar: ${total}</h3>
            <button className="button is-link" onClick={()=>{clearCart()}}>Vaciar Carrito</button>
            <Link to='/checkout'><button className="button">Comprar</button></Link>

        </div>
    )
}
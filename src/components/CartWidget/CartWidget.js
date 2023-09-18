import cart from "./cart.svg";

function CartWidget(){
    return(
        <div className="navbar-item">
            <img width="20px" src={cart} alt="cart"/>
            <h3>0</h3>
        </div>
    )
}

export default CartWidget;
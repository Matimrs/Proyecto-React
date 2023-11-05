import { useContext, useState } from "react"
import { Cart } from "../Cart/Cart"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import { Timestamp } from "firebase/firestore"

export const Checkout=()=>{
    
    const {cart, total, clearCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState('');

    const createOrder = async ({name, phone, email})=>{
            /*try{
                const order ={
                    buyer:{
                        name,
                        phone,
                        email
                    },
                    items: cart,
                    total: total,
                    date: Timestamp.fromDate(new Date())
                }
            }*/
    }

    if(orderId){
        return(
            <h2>El ID de su orden es: {orderId}</h2>
        )
    }

    return(
        <CheckoutForm onConfirm={createOrder}/>
    )
}
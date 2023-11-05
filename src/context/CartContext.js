import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children})=>{

    const[cart,setCart] = useState([]);

    function inCart(item){
        return (cart.some(e => e.id === item.id));
    }

    const addItem = (item, q)=>{
        if(!inCart(item)){
            setCart([...cart, {...item, q}]);
        }
        else alert("El producto ya se agregó");
    }

    const removeItem = (id)=>{
        const newCart = cart.filter(e => e.id !== id);
        setCart(newCart);
    }

    const clearCart = ()=>{
        setCart([]);
    }

    const total = cart.reduce((acc,e)=> acc + e.price, 0);

    const totalQuantity = cart.reduce((acc,e)=> acc + e.q ,0);

    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {
                children
            }
        </CartContext.Provider>
    )
}

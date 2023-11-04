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
            setCart(cart.push({...item,q}));
        }
        else alert("El producto ya se agregó");
    }

    const removeItem = (item)=>{
        const newCart = cart.filter(e => e.id !== item.id);
        setCart(newCart);
    }

    const clearCart = ()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, clearCart}}>
            {
                children
            }
        </CartContext.Provider>
    )
}

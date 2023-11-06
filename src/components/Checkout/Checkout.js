import { useContext, useState } from "react"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc } from "firebase/firestore"
import { db } from "../../config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { writeBatch } from "firebase/firestore"
import { documentId } from "firebase/firestore"

export const Checkout=()=>{
    
    const {cart, total, clearCart} = useContext(CartContext);

    const[loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState('');

    const createOrder = async ({name, phone, email})=>{

            setLoading(true);

            try{
                const order ={
                    buyer:{
                        name,
                        phone,
                        email
                    },
                    items: cart,
                    total: total,
                    date: Timestamp.fromDate(new Date())
                };
            
            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(i => i.id);

            const itemsRef = collection(db,"items");
            
            const itemsAdded = await getDocs(query(itemsRef,where(documentId(),'in',ids)))

            const { docs } = itemsAdded

            docs.forEach(doc =>{
                
                const data = doc.data();

                const stockDb = data.stock;

                const itemAdded = cart.find(i => i.id === doc.id);

                const itemQ = itemAdded?.q;

                if(stockDb >= itemQ){
                    batch.update(doc.ref,{stock: stockDb - itemQ})
                }else{
                    outOfStock.push({id: doc.id, ...data})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit();

                const orderRef = collection(db,"orders");

                const orderAdded = await addDoc(orderRef, order);

                setOrderId(orderAdded.id);
                
                clearCart();
            }else{
                console.log("Productos se encuentran fuera de stock")
            }
            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }
    }

    if(loading){
        return(<h2>Se esta generando su orden de compra...</h2>)
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
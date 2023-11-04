import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartItem = ({id,name,price,img,q})=>{

    const {removeItem} = useContext(CartContext);

return(
    <article className="itemDetail box">
        <header className="centrado">
            <h2 className="title is-4">{name}</h2>
        </header>
        <picture className="centrado pictureImagen">
            <img src={img} alt={name} className="image imagen2"/>
        </picture>
        <section className=" itemInfo centrado">
            <p className="subtitle is-6">Precio unitario: ${price}</p>
            <p className="subtitle is-6">Cantidad: {q}</p>
        </section>
        <footer>
            <button className="button is-link" onClick={()=>{removeItem(id)}}>Eliminar del carrito</button>
        </footer>
    </article>
)
}
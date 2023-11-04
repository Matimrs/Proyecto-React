import { Link } from "react-router-dom";
import Count from "../Count/Count";
import "./ItemDetail.css";
import { useState } from "react";

const ItemDetail = ({id,name,price,img,category,stock,description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity)=>{
        setQuantityAdded(quantity);
    }
    const handleOnCancel = ()=>{
        setQuantityAdded(0);
    }

return(
    <article className="itemDetail box">
        <header className="centrado">
            <h2 className="title is-4">{name}</h2>
        </header>
        <picture className="centrado pictureImagen">
            <img src={img} alt={name} className="image imagen2"/>
        </picture>
        <section className=" itemInfo centrado">
            <p className="subtitle is-6">Precio: ${price}</p>
            <p className="subtitle is-6">Stock: {stock}</p>
            <p className="subtitle is-6">Descripcion: {description}</p>
        </section>
        <footer className="centrado">
            {
                quantityAdded > 0 ?
                (<div>
                    <Link to='/cart'>
                        <button className="button is-link">Confirmar</button>
                    </Link>
                    <button className="button is-link" onClick={handleOnCancel}>Cancelar</button>
                </div>
                )
                :
                (<Count initial={1} stock={stock} onAdd={handleOnAdd} />)
            }
        </footer>
    </article>
)
}

export default ItemDetail;
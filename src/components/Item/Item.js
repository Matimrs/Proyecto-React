import { Link } from "react-router-dom";
import './Item.css';
const Item = ({id, name, price, img, stock, description}) =>{
    return (
        <article className="item box">
            <header className="centrado">
                <h2 className="title is-4">
                    {name}
                </h2>
            </header>
            <picture className="centrado pictureImagen">
                <img src={img} alt={name} className="imagen" />
            </picture>
            <section className="itemInfo centrado">
                <p className="subtitle is-6">Precio: ${price}</p>
                <p className="subtitle">Stock: {stock}</p>
            </section>
            <footer className="centrado">
                <Link to={`/item/${id}`} className="button is-link">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item;
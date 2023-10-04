import { Link } from "react-router-dom";

const Item = ({id, name, price, img, stock, description}) =>{
    return (
        <article className="card container is-fluid">
            <header className="card-header">
                <h2 className="ItemName">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="card-image"/>
            </picture>
            <section className="card-content">
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer className="card-footer">
                <Link to={`/item/${id}`} className="button is-link">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item;
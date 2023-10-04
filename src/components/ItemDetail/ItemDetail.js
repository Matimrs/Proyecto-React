import Count from "../Count/Count";
import "./ItemDetail.css";

const ItemDetail = ({id,name,price,img,category,stock,description}) => {
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
            <Count initial={1} stock={stock} onAdd={(q)=>{ console.log("Cantidad agregada" + q) }} />
        </footer>
    </article>
)
}

export default ItemDetail;
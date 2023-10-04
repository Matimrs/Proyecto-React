import Count from "../Count/Count"

const ItemDetail = ({id,name,price,img,category,stock,description}) => {
return(
    <article className="card container is-fluid text-centred">
        <header className="card-header">
            <h2>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className="card-image"/>
        </picture>
        <section className="card-content">
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            <p>Descripcion: {description}</p>
        </section>
        <footer className="card-footer">
            <Count initial={1} stock={stock} onAdd={(q)=>{ console.log("Cantidad agregada" + q) }} />
        </footer>
    </article>
)
}

export default ItemDetail;
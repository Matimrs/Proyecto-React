const Item = ({id, name, price, img, stock}) =>{
    return (
        <div className="CardItem">
            <div className="ItemHeader">
                <h2 className="ItemName">
                    {name}
                </h2>
            </div>
            <picture>
                <img src={img} alt={name} className="ItemImage"/>
            </picture>
            <div className="ItemInfo">
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
            </div>
            <div className="ItemFooter">
                <button className="ItemDetails">Ver detalles</button>
            </div>

        </div>
    )
}

export default Item;
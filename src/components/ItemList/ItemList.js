import Item from "../Item/Item";

const ItemList = ({products})=>{
    
    return(
        <div className="file container">
            {products.map(e => {
                return (
                    <Item key={e.id} {...e}/>
                )
            })}
        </div>
    );
}

export default ItemList;
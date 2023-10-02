import Item from "../Item/Item";

const ItemList = ({products})=>{
    
    return(
        <div>
            {products.map(e => {
                return (
                    <Item key={e.id} {...e}/>
                )
            })}
        </div>
    );
}

export default ItemList;
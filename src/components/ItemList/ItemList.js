import Item from "../Item/Item";
import './ItemList.css';
const ItemList = ({products})=>{
    
    return(
        <div className="itemList">
            {products.map(e => {
                return (
                    <Item key={e.id} {...e}/>
                )
            })}
        </div>
    );
}

export default ItemList;
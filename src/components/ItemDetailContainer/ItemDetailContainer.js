import {useEffect , useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductById} from "../../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

   const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)                 /*Cambiar el id segun el indicado*/
        .then(response => { setProduct(response) })
        .catch(error => { console.error(error) });
    },[itemId])

    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
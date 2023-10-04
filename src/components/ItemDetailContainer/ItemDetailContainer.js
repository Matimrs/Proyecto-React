import {useEffect , useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductById} from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

   const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)                 /*Cambiar el id segun el indicado*/
        .then(response => { setProduct(response) })
        .catch(error => { console.error(error) });
    },[itemId])

    return(
        <div className=''>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
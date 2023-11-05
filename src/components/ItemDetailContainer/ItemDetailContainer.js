import {useEffect , useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    //const [loading, setLoading] = useState(true);

    const { itemId } = useParams()

    useEffect(()=>{
        //setLoading(true);

        const docRef = doc(db,"items", itemId);

        getDoc(docRef)
            .then(res => {
                const itemFiltered = {
                    id: res.id, 
                    ...res.data()
                }
                    setProduct(itemFiltered);
            })
            .catch(error =>{
                console.error(error);
            })
            .finally(()=>{
                //setLoading(false);
            })

    },[itemId])

    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
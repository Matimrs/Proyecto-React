import { useEffect, useState } from 'react' 
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { db } from '../../config/firebase';
import { collection, getDocs, where , query } from 'firebase/firestore';

const ItemListContainer= ({text})=>{

const [items, setItems]= useState([]);

//const [loading, setLoading] = useState(true);

const {categoryId} = useParams()

useEffect(()=>{
    
    //setLoading(true);

    const collectionRef =  categoryId ? query(collection(db,"items"), where('category', '==' ,categoryId)) 
    : 
    collection(db,"items")

    getDocs(collectionRef)
        .then(res => {
            const itemsFiltered = res.docs.map((doc)=>({
                    ...doc.data(),
                    id: doc.id
                }))
                setItems(itemsFiltered);
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(()=>{
            //setLoading(false);
        })

}, [categoryId])


return(
    <div className="hero">
        <h3 className="subtitle">{text}</h3>
        <ItemList products={items}/>
    </div>
        
)
}

export default ItemListContainer;
import { useEffect, useState } from 'react' 
import ItemList from '../ItemList/ItemList';
import {getProducts, getProductsByCategory} from '../../asyncMock';
import { useParams } from "react-router-dom";

const ItemListContainer= ({text})=>{

const [products, setProducts]= useState([]);

const {categoryId} = useParams()

useEffect(()=>{

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
    .then(response => {setProducts(response)})
    .catch(error => {console.error(error)})
}, [categoryId])


return(
    <div className="hero">
        <h3 className="subtitle">{text}</h3>
        <ItemList products={products}/>
    </div>
        
)
}

export default ItemListContainer;
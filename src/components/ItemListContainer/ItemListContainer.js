import {useEffect, useState} from 'react' 
import ItemList from '../ItemList/ItemList';
import getProducts from '../../asyncMock';
function ItemListContainer({text}){

const [products, setProducts]= useState([]);

useEffect(()=>{
    getProducts()
    .then(response => {setProducts(response)})
    .catch(error => {console.error(error)})
}, [])


return(
    <div className="hero">
        <h3 className="subtitle">{text}</h3>
        <ItemList products={products}/>
    </div>
        
)
}

export default ItemListContainer;
import { useState } from "react";
import "./Count.css"

const Count = ({initial, stock , onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(count + 1);
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

return(
        <div className="content">
            <div className="columns">
                <div className="column"><button onClick={increment} className="button is-link">+</button></div>
                <div className="column"><p className="subtitle is-5">{count}</p></div>
                <div className="column"><button onClick={decrement} className="button is-link">-</button></div> 
            </div>
            <div className="">
                <button onClick={()=>{onAdd(count)}} disabled = {!stock} className="button is-link">Agregar al carrito</button>
            </div>
        </div>
)
}

export default Count;
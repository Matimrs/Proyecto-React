import { useState } from "react";


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
        <div className="container">
            <div>
                <button onClick={increment} className="button">+</button>
                <p>{count}</p>
                <button onClick={decrement} className="button">-</button>
            </div>
            <div>
                <button onClick={()=>{onAdd(count)}} disabled = {!stock} className="button">Agregar al carrito</button>
            </div>
        </div>
)
}

export default Count;
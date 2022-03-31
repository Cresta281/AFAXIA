import './ItemCount.css';
import {useState} from 'react'

const ItemCount = () => {
    const [number,setNumber] = useState(0)

    const decrement = () =>{
        setNumber(number - 1)
    }

    const increment = () =>{
        setNumber(number + 1)
    }

    return (
        <div className="Item">
            <img src="" className="ItemImg" />
            <div className="ItemCounter">
                <button onClick={number === 0 ? null : {decrement}}>-</button>
                <p>{number}</p>
                <button onClick={increment}>+</button>
            </div>
            {number > 0 ? <button> Agregar al carrito</button> : <h1>Inserte la cantidad de items que va a comprar por favor</h1>}
        </div>
    ) 
}


export default ItemCount 
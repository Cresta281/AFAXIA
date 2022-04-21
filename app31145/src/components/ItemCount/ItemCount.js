import './ItemCount.css';
import {useState} from 'react'


const ItemCount = ({initial,onAdd}) => {
    const [number,setNumber] = useState(0)

    const decrement = () =>{
        number === 0 ?  setNumber(number - 0) : setNumber(number - 1)
    }

    const increment = () =>{
        setNumber(number + 1)
    }
    

    return (
        <div className="Item">
            <img src="" className="ItemImg" />
            <div className="ItemCounter">
                <button onClick={decrement}>-</button>
                <p>{number}</p>
                <button onClick={increment}>+</button>
            </div>
            {number > 0 ? <button onClick={() => onAdd(number)}> Agregar al carrito </button> : <h1 className="alterText">Inserte la cantidad de items que va a comprar por favor</h1>}
        </div>
    ) 
}


export default ItemCount 
import {useContext} from 'react';
import CartContext from '../../context/CartContext'

const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)

    if (cart.length === 0){
        return(
            <h1>Aún no tienes elementos seleccionados en el carrito</h1>
        )
    }

    return(
        <>
        <h1>Su carrito</h1>
        <ul> 
            {cart.map(prod => <li key={prod.id}>{prod.name} cantidad: {prod.quantity} subtotal: {prod.quantity * prod.price}<button onClick={() => removeItem(prod.id)}>X</button></li>)}
        </ul>
        </>
    )
} 

export default Cart
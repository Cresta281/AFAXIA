import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    
    return (
        <div className="CartDiv">
            <div className="Cart">
                <i className="fa-solid fa-cart-shopping"> { getQuantity() }</i>
            </div>
        </div>
    )
}

export default CartWidget  
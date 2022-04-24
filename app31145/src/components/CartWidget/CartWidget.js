import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './CartWidget.css'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    
    return (
        <div className="CartDiv">
            <div className="Cart">
                <i className="fa-solid fa-cart-shopping" onClick={<Link to='/cart'/>}> { getQuantity() }</i>
            </div>
        </div>
    )
}

export default CartWidget  
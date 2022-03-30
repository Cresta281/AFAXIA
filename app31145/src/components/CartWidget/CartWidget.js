
import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className="CartDiv">
            <div className="Cart">
                <i class="fa-solid fa-cart-shopping">{props.CartNumber}</i>
            </div>
        </div>
    )
}

export default CartWidget  
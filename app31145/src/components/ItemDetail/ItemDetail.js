import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
const ItemDetail = ({id,nombre,precio,categoria,img,descripcion}) => {

    const { addItem, isInCart} = useContext(CartContext)

    const handleAdd = (number) => {
        const productObj = {
            id, nombre, precio, cantidad: number
        }
        addItem(productObj)
    }

    return (
       <section className="CardItem">
           <header className="Header">
               <h2 className="ItemHeader">
                   {nombre}
               </h2>
           </header>
           <picture>
               <img src={img} alt={nombre} className="ItemImg" />
           </picture>
           <section>
               <p className="Info">
                   categoria: {categoria}
               </p>
               <p className="Info">
                   precio: ${precio}
               </p>
               <p className="Info">
                    {descripcion}
               </p>
               {isInCart ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount onAdd={handleAdd}/>}
           </section>
       </section>
    )
}

export default ItemDetail 
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = ({setCart,cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb,'productos',productId)).then(response => {
            const producto = {id: response.id, ...response.data()}
            setProduct(producto)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? <ItemDetail  {...product}  setCart={setCart} cart={cart} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer
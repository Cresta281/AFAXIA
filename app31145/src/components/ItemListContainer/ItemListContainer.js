import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('categorias', '==', categoryId))
            : collection(firestoreDb, 'products')
       getDocs(collectionRef).then(response => {
            const productos = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productos)
       })
    }, [categoryId])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
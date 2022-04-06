import {useState,useEffect} from 'react'
import {conseguirProductos} from '../../asynmock'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = (props) => {
    
    const [productos,setProductos] = useState([])
    
    useEffect(()=> {
        conseguirProductos().then(prods => {
            setProductos(prods)
        })
    })
    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemList productos= {productos} />
        </>
    )
}

export default ItemListContainer 
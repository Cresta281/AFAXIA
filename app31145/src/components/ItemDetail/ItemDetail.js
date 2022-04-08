import {useEffect, useState} from 'react'

const ItemDetail = () => {
    const [products, setProducts] = useState ([])
    const [isShown, setShow] = useState(false)
    useEffect (() => {
        fetch ('https://api.mercadolibre.com/sites/MLA/search?q=arbol-bonsai').then(response => {
            return response.json()
        }).then(res => setProducts(res.results))
    })
    return (
        <div>
            <h1>Visualizador de Arboles Bonsai</h1>
            <ul>
                {products.map(p => {
                    return (
                        <li key={p.id}>
                            <p onMouseEnter={()=> { 
                                setShow(true)

                            }} onMouseLeave={()=>{
                                setShow(false)
                            }}>{p.title}</p>
                             {isShown ? ()=> {
                                    return(
                                        <div>
                                            <p>{p.thumbnail}</p>
                                            <p>{p.price}</p>
                                        </div>
                                    )
                                } : null}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ItemDetail 
import './Item.css';

import { Link } from 'react-router-dom'

const Item = ({id, nombre, img, precio}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section className="SectionInfo">
                <p className="Info">
                    Precio: ${precio}
                </p>
                <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                </footer>
            </section>           
        </article>
    )
}
export default Item 
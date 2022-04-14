import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,categoria,img,descripcion}) => {


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
           </section>
       </section>
    )
}

export default ItemDetail 
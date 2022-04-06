import './Item.css';

const Item = ({name, img}) => {
    return(
        <section className='sectionItem'>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{name}</h3>
            <button className='buttonItem'>Ver detalle</button>
        </section>
    )
}

export default Item 
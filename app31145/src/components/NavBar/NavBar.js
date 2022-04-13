import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { conseguirCategorias } from '../../asynmock'



const NavBar = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        conseguirCategorias().then(categorias => {
            setCategorias(categorias)
        })
    },[])
    return(
       <>
        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Afaxia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <Link className="NavLink" to='/'>Home</Link>
                            <Link className="NavLink" to='/list'>Products</Link>
                            <CartWidget CartNumber="0"/>
                    </ul>
                    </div>
                </div>
            </nav>
       </>
    )
}

export default NavBar
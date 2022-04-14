import './Home.css'
import imagenHome from '../../images/background_home.jpg'
function Home (){
    return(
        <>
            <h1>Bienvenido a Afaxia, la botanica que tu hogar necesita</h1>
            <div className="ImgContainer">
                <img src={imagenHome}/>
            </div>
        </>

    )
}

export default Home 
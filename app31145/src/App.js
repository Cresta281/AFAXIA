import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import useState from 'react'

function App() {
  const [show,setShow] = useState(true)
 
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenido a mi primer proyecto usando React!'}/>
        <button onClick={() => setShow(!show)}>{(show ? 'Desmontar carrito' : 'Montar carrito')}</button>
        { show ? <ItemCount /> : null}
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home'
import {CartContextProvider} from './context/CartContext'
import Cart from './components/Cart/Cart';
import {NotificationProvider} from './notification/notification'


function App() {
 
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;

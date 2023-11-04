import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';


function App(){
    return (
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
    }

export default App;
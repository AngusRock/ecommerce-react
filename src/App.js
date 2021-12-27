import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContextProvider  from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/ecommerce-react' element={<ItemListContainer title="Coffee Site" greeting="¡Bienvenidos!"/>} />
          <Route path='/ecommerce-react/category/:categoryId' element={<ItemListContainer title="Coffee Site" greeting="¡Bienvenidos!"/>} />
          <Route path='/ecommerce-react/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/ecommerce-react/cart' element={<Cart />} />
        </Routes>
        <Footer/>        
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

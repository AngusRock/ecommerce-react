import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer title="Coffee Site" greeting="¡Bienvenidos!"/>} />
        <Route path='/category/:catName' element={<ItemListContainer title="Coffee Site" greeting="¡Bienvenidos!"/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>        
    </BrowserRouter>
  );
}

export default App;

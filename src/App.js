import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Greetings from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar />
    <Greetings title="E-Commerce Site" greeting="¡Bienvenidos! Por el momento el sitio se encuentra en construcción"/>
    </>
  );
}

export default App;

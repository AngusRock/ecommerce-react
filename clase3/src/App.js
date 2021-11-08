import logo from './logo.svg';
import './App.css';

let nombre = 'Juan';
const styles = {
  parrafo : {
    fontFamily: "sans-serif",
    color : "green"
  }
};

function App() {
  return (
    <>    
      <h1 style={{color : "red"}}>Hola Coders!</h1>
      <p className="parrafo2">Parrafo 2</p>
      <p style={styles.parrafo}>Nombre: {nombre}</p>
      <button type="button" className="btn btn-primary">Primary</button>
    </>
  );
}

export default App;

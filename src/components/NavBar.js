import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (        
        <nav className="bg-dark">
        <div className="navbar navbar-expand-lg navbar-dark navbar-bg navbar-dimensions">
          <a className="navbar-brand" href="index.html">Test Brand Sites</a>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to='/' style={{textDecoration: "none"}}><p className="nav-link active">Inicio</p></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Login</a>
              </li>
              <CartWidget />
            </ul>
          </div>
          </div>
        </nav>        
    );
}

export default NavBar;

  

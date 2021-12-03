import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-dark">
        <div className="navbar navbar-expand-lg navbar-dark navbar-bg navbar-dimensions">
        <Link to='/' style={{textDecoration: "none"}}><span className="navbar-brand">Coffee Site</span></Link>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{marginLeft: '40%'}}>
              <li className="nav-item">
              <Link to='/category/cafes' style={{textDecoration: "none"}}><span className="nav-link active">Cafés</span></Link>
              </li>
              <li className="nav-item">
              <Link to='/category/maquinas' style={{textDecoration: "none"}}><span className="nav-link active">Máquinas</span></Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to='/' style={{textDecoration: "none"}}><span className="nav-link active">Inicio</span></Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">Login</span>
              </li>
              <CartWidget />
            </ul>
          </div>
          </div>
        </nav>
    );
}

export default NavBar;



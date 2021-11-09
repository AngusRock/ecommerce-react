import './NavBar.css';

function NavBar() {
    return (
        <>
        <nav className="navbar-style pb-4 bg-dark">
        <div className="navbar navbar-expand-lg navbar-dark navbar-bg navbar-dimensions">
          <a className="navbar-brand" href="index.html">Test Brand Sites</a>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Login</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        </>
    );
}

export default NavBar;

  

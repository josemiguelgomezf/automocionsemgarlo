import './Header.css';
import logo from './logo.png';

function Header() {
    return (
    <div id="header">
        <div id="header-pack-logo">
            <img src={logo} id="header-logo" alt="logo" />
            <h2 id="header-title">Taller Hnos. SEM Garlo</h2>
        </div>
        <div id="header-menu">
            <a href="carrusel">Home</a>
            <a href="aboutus">About Us</a>
            <a href="carrusel">Services</a>
            <a href="carrusel">Contact</a>
            <button>¡Presupuesto!</button>
            <button>¡Descuentos!</button>
            <img src="https://cdn-icons-png.flaticon.com/512/3059/3059561.png" className="header-icon" alt="call" />
            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-noir.png" className="header-icon" alt="whatsapp" />
        </div>
    </div>
    );
  }

  export default Header;

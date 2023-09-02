import './Header.css';
import logo from './logo.png';

function Header() {
    return (
      <div>
        <img src={logo} className="header-logo" alt="logo" />
        <p>Automocion SEM Garlo</p>
      </div>
    );
  }

  export default Header;
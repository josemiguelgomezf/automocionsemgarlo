import './Header.css';
import logo from './logo.png';

function Header() {
    return (
        <div>
            <img src={logo} className="header-logo" alt="logo" />
            <p>Stay Strong</p>
        </div>
    );
  }

  export default Header;

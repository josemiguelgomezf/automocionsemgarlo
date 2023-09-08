import './Header.css';
import logo from './logo.png';

function Header() {
    return (
    <div id="header">
        <div id="header-pack-logo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/595/983/non_2x/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"id="header-logo" alt="logo" />
            <p id="header-title">Stay Strong</p>
        </div>
        <div id="header-menu">
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">Contact</a></p>
            <button>Click Me!</button>
            <button>Click Me!</button>
            <img src="https://cdn-icons-png.flaticon.com/512/3059/3059561.png" className="header-icon" alt="call" />
            <img src="https://assets.stickpng.com/thumbs/5a4e2ef62da5ad73df7efe6e.png" className="header-icon" alt="whatsapp" />
        </div>
    </div>
    );
  }

  export default Header;

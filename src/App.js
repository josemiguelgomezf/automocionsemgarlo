import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.js';
import Reviews from './Reviews.js';
import Header from './Header.js';
import Carrusel from './Carrusel.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrusel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <Reviews />
      </header>
    </div>
  );
}

export default App;

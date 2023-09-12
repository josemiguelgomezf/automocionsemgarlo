import './App.css';
import Reviews from './Reviews.js';
import Header from './Header.js';
import Carrusel from './Carrusel.js';
import AboutUs from './AboutUs.js';
import Services from './Services.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrusel />
      <AboutUs />
      <Services />
      <Reviews />
    </div>
  );
}

export default App;

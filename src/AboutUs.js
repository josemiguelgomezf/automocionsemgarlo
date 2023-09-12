import './AboutUs.css';
import logo from './logo.png';

function AboutUs() {

    return (
    <div id="aboutus">
        <img id="aboutus-img" src="https://www.carroceriasaviles.es/cache~1-0-1-a-4-101a4f4dd317bbbb7f9d9b507c8490e850c5df60/big-foto-188961.jpg" className="aboutus-img" alt='logo'></img>
        <div id="aboutus-content"> 
            <p id="aboutus-title">About Us</p>
            <p id="aboutus-text">Soy Samuel Torres, profesor, entrenador personal y especialista en movimiento y 
            entrenamiento bodyweight. Me apasiona todo lo relacionado con el cuerpo humano, sus capacidades físicas, 
            su evolución, su adaptación, y su impresionante manera de alcanzar ciertos niveles de movimiento, a los 
            que la mayoría de personas no saben que pueden llegar.Vais a entrenar, mucho, vais a disfrutar, mucho, y 
            además os voy a acompañar en un proceso de aprendizaje durante todos y cada uno de los cursos 
            que iré aportando en esta web, añadiendo mis herramientas clave (no puedo desvelarlas, son MI SECRETO) y 
            aportando mi conocimiento acumulado de todos mis años de formación, experiencia, biomecánica, rendimiento,
             y una buena didáctica, base fundamental de un buen aprendizaje, y poder sacar de este modo, 
             VUESTRA MEJOR VERSIÓN.
            </p>
        </div>
    </div>
    );
}

export default AboutUs;

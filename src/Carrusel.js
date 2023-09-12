import './Carrusel.css';
import { useState } from 'react';

const sliders = [{
    alt: 'Slider 1 - Ejemplo 1',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9phXubeyYLmkNvBgJwYWBoWyKEjE2g8Nfw&usqp=CAU',
    visible: true
  },
  {
    alt: 'Slider 2 - Ejemplo 2',
    imageUrl: 'https://www.atlantico.net/asset/thumbnail,1280,720,center,center/media/atlantico/images/2023/09/08/2023090822011545332.jpg',
    visible: true
}];

function Carrusel() {
    const [count, setCount] = useState(0);

    function nextImg() {
        if (count==1){
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }

    function prevImg() {
        if (count==0){
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }   

    function Imagenes() {
        let slider=sliders[count];
        return (
        <div id="carrusel-slider">
            <img id="carrusel-img" src={slider.imageUrl} className="carrusel-img" alt={slider.alt}></img>
            <p id="carrusel-alt">{slider.alt}</p>
        </div>
        );
    }
    
    return (
    <div id="carrusel">
        <button id="carrusel-next" onClick={prevImg}>PREVIOUS</button>
        <Imagenes/>
        <button id="carrusel-before" onClick={nextImg}>NEXT</button>
    </div>
    );
}

export default Carrusel;

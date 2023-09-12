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
        <svg id="carrusel-after" onClick={prevImg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
        <Imagenes/>
        <svg id="carrusel-before" onClick={nextImg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
    </div>
    );
}

export default Carrusel;

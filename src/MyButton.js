import './MyButton.css';
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        alert('You clicked me!');
      }
    return (
      <button onClick={handleClick}>
        I'm a button, clicked {count} times.
      </button>
    );
  }

  export default MyButton;
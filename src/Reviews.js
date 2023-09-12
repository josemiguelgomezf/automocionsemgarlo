import './Reviews.css';

const users = [{
    alt: 'Hedy Lamarr',
    comment: '"Muy buen taller, servicio profesional y serio. Muy buen taller, servicio profesional y serio."',
    mark: '5',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  },
  {
    alt: 'Hedy Lamarr',
    comment: '"Me arreglaron el coche en tiempo récord, increíble. Me arreglaron el coche en tiempo récord, increíble."',
    mark: '5',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  }];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
let user=users[getRandomInt(2)];

function Reviews() {
  return (
  <div id="reviews">
    <div id="reviews-content">
      <img id="reviews-img" src={user.imageUrl} alt={'Photo of ' + user.alt}/>
        <div id="reviews-content-text">
          <p id="reviews-alt">{user.alt}</p>
          <p id="reviews-comment">{user.comment}</p>
          <p id="reviews-mark">{user.mark}</p>
        </div>
    </div>
  </div>
  );
}

  export default Reviews;
import './Reviews.css';

const users = [{
    alt: 'Hedy Lamarr',
    comment: '"Muy buen taller, servicio profesional y serio. Muy buen taller, servicio profesional y serio."',
    mark: 4,
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  },
  {
    alt: 'Hedy Lamarr',
    comment: '"Me arreglaron el coche en tiempo récord, increíble. Me arreglaron el coche en tiempo récord, increíble."',
    mark: 5,
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
      <div id="reviews-content-img">
        <img id="reviews-img" src={user.imageUrl} alt={'Photo of ' + user.alt}/>
        <p id="reviews-alt">{user.alt}</p>
      </div>
      <div id="reviews-content-text">
        <p id="reviews-comment">{user.comment}</p>
        <h1 id="reviews-stars">{"✰".repeat(user.mark)}</h1>
      </div>
    </div>
  </div>
  );
}

  export default Reviews;
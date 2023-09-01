const users = [{
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    isClient: true
  },
  {
    name: 'Hedy Lamarr2',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    isClient: false
  }];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
let user=users[getRandomInt(2)];

function Reviews() {
    return (
      <>
        <h1
            style={{
                color: user.isClient ? 'magenta' : 'darkgreen'
              }}
        >{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }

  export default Reviews;
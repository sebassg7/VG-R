const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {

    let canvasSize;

    // canvasSize = window.innerHeight * 0.75;
   
    if (window.innerHeight > window.innerWidth) {
      canvasSize = window.innerWidth*0.8;
    } else {
      canvasSize = window.innerHeight*0.7;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
console.log(canvasSize);

  // game.fillRect(0,50,100,100);
  // game.clearRect(50,50,50,50);
  // game.clearRect()
  // game.clearRect(0,0,50,50);

  // game.font = '25px Verdana'
  // game.fillStyle = 'purple';
  // game.textAlign = 'center';
  // game.fillText('Platzi', 25, 25);
};
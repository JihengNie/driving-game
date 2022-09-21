var $carHolder = document.querySelector('.car-holder');
var $car = document.querySelector('.car');
var carLocation = {
  x: 0,
  y: 0,
  xOffset: 0,
  yOffset: 0
};
var stopCar = false;
// var intervalID = setInterval(movingStright, 16);
var intervalID;

window.addEventListener('keydown', changingDirection);

function changingDirection(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'car up';
    carLocation.yOffset = -2;
    carLocation.xOffset = 0;
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car left';
    carLocation.xOffset = -2;
    carLocation.yOffset = 0;
  } else if (event.key === 'ArrowDown') {
    $car.className = 'car down';
    carLocation.yOffset = 2;
    carLocation.xOffset = 0;
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car right';
    carLocation.xOffset = 2;
    carLocation.yOffset = 0;
  } else if (event.key === ' ') {
    if (stopCar) {
      clearInterval(intervalID);
    } else {
      intervalID = setInterval(movingStright, 16);
    }
    stopCar = !stopCar;
  }
  if (carLocation.x === window.innerWidth || carLocation.y === window.innerHeight) {
    clearInterval(intervalID);
  }
}

function movingStright() {
  if (carLocation.x === 0 && carLocation.y === 0) {
    carLocation.xOffset = 2;
  }
  if (carLocation.x === window.innerWidth || carLocation.y === window.innerHeight) {
    clearInterval(intervalID);
  }
  carLocation.x = carLocation.x + carLocation.xOffset;
  carLocation.y = carLocation.y + carLocation.yOffset;
  $carHolder.style.transform = 'translate(' + carLocation.x + 'px,' + carLocation.y + 'px)';

}

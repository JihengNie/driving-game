var $carHolder = document.querySelector('.car-holder');
var $car = document.querySelector('.car');
var carLocation = {
  x: 0,
  y: 0
};
var stopCar = false;
var intervalID = setInterval(movingStright, 16);

window.addEventListener('keydown', changingDirection);

function changingDirection(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'car up';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car left';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'car down';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car right';
  } else if (event.key === ' ') {
    stopCar = !stopCar;
    if (stopCar) {
      clearInterval(intervalID);
    } else {
      intervalID = setInterval(movingStright, 16);
    }
  }
  if (carLocation.x === 1000) {
    clearInterval(intervalID);
  }
}

function movingStright() {
  if (carLocation.x === 1000) {
    clearInterval(intervalID);
  }
  carLocation.x = carLocation.x + 2;
  $carHolder.style.transform = 'translate(' + carLocation.x + 'px,' + carLocation.y + 'px)';

}

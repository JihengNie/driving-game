var $carHolder = document.querySelector('.car-holder');
var $car = document.querySelector('.car');
var carLocation = {
  x: 0,
  y: 0
};
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
  }

}

function movingStright() {
  $carHolder.style.transform = 'translate(' + carLocation.x + 'px,' + carLocation.y + 'px)';
  carLocation.x = carLocation.x + 2;
  if (carLocation.x === 1000) {
    clearInterval(intervalID);
  }
}

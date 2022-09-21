var $carHolder = document.querySelector('.car-holder');

window.addEventListener('keydown', changingDirection);

function changingDirection(event) {
  if (event.key === 'ArrowUp') {
    $carHolder.className = 'car-holder up';
  } else if (event.key === 'ArrowLeft') {
    $carHolder.className = 'car-holder left';
  } else if (event.key === 'ArrowDown') {
    $carHolder.className = 'car-holder down';
  } else if (event.key === 'ArrowRight') {
    $carHolder.className = 'car-holder right';
  }

}

var $carHolder = document.querySelector('.car-holder');

window.addEventListener('keydown', changingDirection);

function changingDirection(event) {
  if (event.key === 'ArrowLeft') {
    $carHolder.style.transform = 'rotate(180deg)';
  } else if (event.key === 'ArrowUp') {
    $carHolder.style.transform = 'rotate(-90deg)';
  } else if (event.key === 'ArrowDown') {
    $carHolder.style.transform = 'rotate(90deg)';
  } else if (event.key === 'ArrowRight') {
    $carHolder.style.transform = 'rotate(0deg)';
  }

}

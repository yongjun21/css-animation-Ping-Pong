var ball = document.querySelector('#ball');

var listener = function (event) {
  var randomSpeed = Math.round(1000 + 300 * Math.random());
  ball.style.transitionDuration = randomSpeed + 'ms';
  ball.classList.toggle('playerSide');
};

ball.addEventListener('transitionend', listener);
window.setTimeout(function () {
  ball.classList.toggle('playerSide');
  ball.style.visibility = 'visible';
}, 400);

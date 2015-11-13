var ball = document.querySelector('#ball');
var playerTurn = true;
var tbLength = window.matchMedia(
  '(min-width: 1200px)').matches ? '1200px' : '700px';

var listener = function (event) {
  var randomSpeed = Math.round(1000 + 300 * Math.random());
  ball.style.transitionDuration = randomSpeed + 'ms';
  if (playerTurn) ball.style.left = '0';
  else ball.style.left = tbLength;
  playerTurn = !playerTurn;
};

ball.addEventListener('transitionend', listener);
window.setTimeout(function () {
  ball.style.left = tbLength;
  ball.style.visibility = 'visible';
}, 400);

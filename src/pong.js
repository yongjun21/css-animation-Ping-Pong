var ball = document.querySelector('#ball');
var playerTurn = true;

var listener = function (event) {
  var randomSpeed = Math.round(1000 + 300 * Math.random());
  ball.style.transitionDuration = randomSpeed + 'ms';
  if (playerTurn) ball.style.left = '0';
  else ball.style.left = '1200px';
  playerTurn = !playerTurn;
};

ball.addEventListener('transitionend', listener);
window.setTimeout(function () {
  ball.style.left = '1200px';
  ball.style.visibility = 'visible';
}, 400);

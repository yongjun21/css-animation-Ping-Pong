## CSS Ping Pong [![Build Status](https://travis-ci.org/yongjun21/css-animation-Ping-Pong.svg?branch=master)](https://travis-ci.org/yongjun21/css-animation-Ping-Pong) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

This [toy application](http://css-ping-pong.surge.sh) was made to simulate to the old school [Pong](https://en.wikipedia.org/wiki/Pong) game. It was created using simple **CSS transition/animation** supplemented by a few lines of JavaScript code. No complicated math was involved in recreating the seemingly random bouncing effect.

The trick here is to separate out motion in the x-direction from motion in the y-direction. Recalling high school physics, assuming motion through air is frictionless, translation in x can be taken to be linear. The parabolic path we observe is to due to deceleration and acceleration on the y-axis. Assuming again frictionless motion, this can be replicated by a simple up/down animation loop. Instead of manually working out the deceleration and acceleration, we take advantage of the ease in/ease out **timing function** in CSS animation.

Now back to motion on the x-axis. To add some ~~spice~~ randomness to the ball bouncing, we constantly adjust the x-velocity so it gives the illusion of one moment the ball is bouncing short, the other moment the ball is bouncing far.

Here's how it works:
- First the left position of the ball is set to the opposite end of the table.
- This triggers our CSS transition so the ball starts traveling across the table
- We placed a **transistionend** listener so that once the ball reaches the other end,
- we assign it a different return speed (transition duration) and
- trigger new transition in the return direction.
- The cycle repeats every time with a slightly different x-velocity.

The combination of looping CSS animation (y-direction) and CSS transition (x-direction) produce an interesting visual effect like a real Ping Pong game.

***Feel free to fork from my repo if you think this is good instruction material for teaching CSS transition & animation.***

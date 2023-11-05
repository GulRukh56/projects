"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
console.log('\n 1st version of code');
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('congratulation! you earned 5 points for shouting the alien');
}
else {
    console.log('congratulation! you earned a 10 points for shouting the alien');
}
//version 2(runs the else block)
console.log('\n 2nd version of code');
alien_color = 'blue';
if (alien_color === 'green') {
    console.log('congratulation! you earned 5 points for shouting the alien');
}
else {
    console.log('congratulations!  you earned a 10 points for shouting the alien');
}

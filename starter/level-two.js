/*
 * DOTS: Level Two

Level 2 has 3 moving balls that the user can click on to increment their score. 
Implement a single click handler to listen for when a user clicks on one of the balls and increment their until they reach 100.

 *
 */

let score = 0
const allBalls = document.querySelectorAll('.js-ball');
const levelWinner = document.querySelector('.level-winner');
const scoreDisplay = document.querySelector('.js-score');

console.log(allBalls);


for (let i = 0; i < allBalls.length; i++) {
  allBalls[i].addEventListener('click', function() {
    // Increment the score by 10
    score += 10;
    // Update Displayed Score
    scoreDisplay.innerText = score;
    // Console log Event Executed
    console.log('Ball clicked. Score incremented by 10.');

    // Check to see if the Player's Score is >= 100
    if (score >= 100) {
        // Show the Level-Winner Message by Setting Opacity to 1
        levelWinner.style.opacity = 1;
        console.log('Score is Equal to 100 Pts, You have Completed Level Two');
    }
});
}

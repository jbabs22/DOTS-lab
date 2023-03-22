/*
 * DOTS: Level One

For level 1, you'll need to add a single event listener to the `.js-ball` element. 
When the user clicks on the ball, it should increment their score by 10 points. 
When the user reaches 100 points, they've beat the level and can move on!
 *
 */


// VARIABLES
let score = 0;
const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');


// FUNCTIONALITY
ball.addEventListener('click', function() {
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
        console.log('Score is Equal to 100 Pts, You have Completed Level One');
    }
});


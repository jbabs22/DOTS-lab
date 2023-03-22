/*
 * DOTS: Level Three

Level 3 also has 3 moving balls but of different sizes! 
Each ball is therefore worth a different amount of points. 
The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. 
You can access the data attribute of an element from the event object by looking at the event target's dataset property. 
When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.

 *
 */


let score = 0
const balls = document.querySelectorAll('.js-ball');
const levelWinner = document.querySelector('.level-winner');
const scoreDisplay = document.querySelector('.js-score');

console.log(balls);

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        const increment = parseInt(ball.getAttribute('data-increment'));
        // Increment the score by 10
        score += increment;
        // Update Displayed Score
        scoreDisplay.innerText = score;
        // Check to see if the Player's Score is >= 100
        if (score >= 100) {
        // Show the Level-Winner Message by Setting Opacity to 1
           levelWinner.style.opacity = 1;
           console.log('Score is Equal to 100 Pts, You have Completed Level Two');
    }
        // console.log(ball.dataset);
        // console.log(ball.getAttribute('data-increment'));
        console.log(`Score: ${score}`)
    });
});

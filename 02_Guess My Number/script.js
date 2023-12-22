'use strict';

//+++++++++++++++++++++++++++++++++++++++++++++
//          RANDOM NUMBER GENERATION
//+++++++++++++++++++++++++++++++++++++++++++++

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`the random secretNumber is ${secretNumber}`);

let score = 20;
let highScore = 0;

// +++++++++++++++++++++++++++++++++++++++++++++
//               GAME LOGIC
// +++++++++++++++++++++++++++++++++++++++++++++

// Capture the Guess number from client
// The captured Number is interpreted as STRING
// Convert the STRING in NUMBER

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!';


        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 NOAH HAT GEWONNEN!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


        //When guess too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high !'
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 GAME OVER!'
            document.querySelector('.score').textContent = 0
        }

        //When guess too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low !'
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 GAME OVER!'
            document.querySelector('.score').textContent = 0
        }
    }
});


// +++++++++++++++++++++++++++++++++++++++++++++
//               PLAY AGAIN BUTTON
// +++++++++++++++++++++++++++++++++++++++++++++

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`the new ....random secretNumber is ${secretNumber}`);
    document.querySelector('.number').style.width = '15rem';
});
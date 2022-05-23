let scores, roundScore, activePlayer, prevDiceRoll, gamePlaying,winner;
init();
document.querySelector('.rollbutn').addEventListener('click', function () {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    if (dice1 !== 1) {
        roundScore += dice1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
        prevDiceRoll = dice1;
    }
});

//-----------------------------------------------------------------------------------
document.querySelector('.holdbutn').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >=30 ) {
        document.querySelector('#winner-' + activePlayer).textContent = 'Winner!';
        start();
        stop();
        
    }
    else {
        nextPlayer();
    }
    }
});
//------------------------------------------------------------------------------
document.querySelector('.newgamebutn').addEventListener('click', init);
    function init() {
        gamePlaying = true;
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.getElementById('winner-0').textContent = '';
        document.getElementById('winner-1').textContent = '';
    }
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }
// winner animation
// start
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};
//  Stop
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
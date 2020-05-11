const message = document.querySelector('.message');
// let score = [0, 0];
let playerScore = 0;
let computerScore = 0;
const coinArray = ['Heads', 'Tails'];
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', tossCoin);
}

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  message.innerHTML = " Computer selected " + computerGuess + "<br>";
  let output;
  if (playerGuess === computerGuess) {
    output = " Player Wins";
    playerScore++;
    // score[0]++;
  } else {
    output = " Computer Wins";
    computerScore++;
    // score[1]++;
  }
  // message.innerHTML += output + "<br>Player " + score[0] + " Computer " + score[1];
  message.innerHTML += output + "<br>Player " + playerScore + " Computer " + computerScore;
}

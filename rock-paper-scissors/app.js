const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
let winner = [0, 0];
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  let result = checkWinner(playerSelection, computerSelection);

  if (result === "Player") {
    result += " wins!";
    winner[0]++;
  } else if (result == "Computer") {
    result += " wins!";
    winner[1]++;
  } else {
    result += " results in a tied matched";
  }
  score.innerHTML = "<small>Player 1</small>[" + winner[0] + "] <small>Computer</small>[" + winner[1] + "]";
  messenger(playerSelection + " vs " + computerSelection +
    "<br><b>" + result + "</b>");
}

function messenger(mes) {
  message.innerHTML = mes;
}


function checkWinner(pl, co) {
  if (pl === co) {
    return "Draw";
  }
  if (pl === "Rock") {
    if (co === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (pl === "Paper") {
    if (co === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Scissors") {
    if (co === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}

const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
const colorDefs = document.querySelector('.color-bg');
let gamePlay = false;
let score = 0;

button.addEventListener('click', function () {

  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = "";
    maker();
    colorDefs.style.display = "block";
    button.innerText = "Check Combo";
    message.innerHTML = "Guess the Combo";
  } else {
    let winCondition = 0;
    console.log('checker');
    score++;
    message.innerHTML = 'Guesses ' + score;
    const numbers = document.querySelectorAll('.num');

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "#fff";
        console.log('match');
        winCondition++;
      } else {
        let color = (numbers[i].value < numbers[i].correct ? "blue" : "red");
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "000";
        console.log('no match');
      }

      if (winCondition == numbers.length) {
        gameEND();
      }

    }
  }
});


function gameEND() {
  message.innerHTML = 'You solved the combo in ' + score + " guesses";
  gamePlay = false;
  button.innerText = "Restart Game";
}



function maker() {

  for (let i = 0; i < 4; i++) {
    let inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'number');
    inputEl.max = 9;
    inputEl.min = 0;
    inputEl.size = 1;
    inputEl.style.width = '50px';
    inputEl.classList.add('num');

    inputEl.order = i;
    inputEl.correct = Math.floor(Math.random() * 10);
    inputEl.value = 0;
    console.log(inputEl);
    gameArea.appendChild(inputEl);

  }
}

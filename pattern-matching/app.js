const gameColors = ['red', 'blue', 'green', 'yellow'];
const message = document.querySelector('.message');
const gameArea = document.querySelector('.gameArea');
const button = document.querySelector('button');

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 2;

window.addEventListener('load', setUp);
button.addEventListener('click', function () {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.disabled = true;
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
  messenger('Match Pattern');
  button.style.display = 'none';
}

function runSequence(num) {
  let squares = document.querySelectorAll('.box');
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  gameClicks.push(gameColors[randomNum]);
  squares[randomNum].style.opacity = '1';
  setTimeout(function () {
    squares[randomNum].style.opacity = '0.5';
    setTimeout(function () {
      runSequence(num);
    }, 100)
  }, 5000);
}


function setUp() {
  for (let i = 0; i < gameColors.length; i++) {
    let div = eleFactory('div');
    div.style.backgroundColor = gameColors[i];
    div.classList.add('box');
    div.style.opacity = '0.5';
    div.myColor = gameColors[i];
    console.log('div myColor', div.myColor);
    div.addEventListener('click', checkAnswer);
    gameArea.appendChild(div);
  }
}

function eleFactory(elType) {
  let ele = document.createElement(elType);
  return ele;
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    console.log('user clicks', userClicks);
    el.style.opacity = "1";
    setTimeout(function () {
      el.style.opacity = '0.5';
    }, 500);
    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
}

function messenger(mes) {
  message.innerText = mes;
}

function endGame() {
  console.log('game over');
  button.disabled = false;
  button.style.display = 'block';
  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    messenger('Correct New Level = ' + playNum);
  } else {
    messenger('Incorrect');
  }
}

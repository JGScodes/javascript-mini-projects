const message = document.querySelector('.message');
const score = document.querySelector('.score');
const button = document.querySelectorAll('button');
const gameplay = document.querySelector('.gameplay');
let win = false;

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ['hearts', 'diams', 'clubs', 'spades'];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', playGame);
}

function toggleButtons() {
  button[0].classList.toggle('hideButton');
  button[1].classList.toggle('hideButton');
  button[2].classList.toggle('hideButton');
}

function playGame(e) {
  let temp = e.target.innerText;
  let myCard = drawCard();
  console.log('first myCard: ' + myCard.value)
  if (temp === 'Start') {
    // console.log('you clicked start');
    message.innerHTML = 'Higher or Lower';
    gameplay.innerHTML = '';
    makeCard(myCard);
    toggleButtons();
    return;
  }

  if (myCard.value == curCardValue) {
    win = 'draw';
    message.innerText = 'Draw';
  } else {
    if ((temp == 'Higher' && (myCard.value > curCardValue)) || (temp == 'Lower' && (myCard.value < curCardValue))) {
      scoreValue++;
      score.innerHTML = scoreValue;
      message.innerHTML = 'Correct. Next?';
    } else {
      message.innerHTML = 'Wrong. Game Over.';
      toggleButtons();
    }
  }

  makeCard(myCard);
}

function drawCard() {
  if (deck.length > 0) {
    let randIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randIndex, 1)[0];
    // console.log(card);
    return card;
  } else {
    makeDeck();
    return drawCard();
  }
}

function makeDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      card.value = (j + 1);
      // console.log(card);
      deck.push(card);
    }
  }
}

function makeCard(card) {
  let html1 = card.rank + '<br>&' + card.suit + ';';
  let html2 = card.rank + '&' + card.suit + ';';
  let curCards = document.querySelectorAll('.card');

  let div = document.createElement('div');
  div.setAttribute('class', 'card');
  div.style.left = (curCards.length * 25) + 'px';
  curCardValue = card.value;
  console.log('First curCardValue: ' + curCardValue);
  if (card.suit === 'hearts' || card.suit === 'diams') {
    div.classList.add('red');
  }

  let span1 = document.createElement('span');
  span1.setAttribute('class', 'tiny');
  span1.innerHTML = html2;
  div.appendChild(span1);

  let span2 = document.createElement('span');
  span2.setAttribute('class', 'big');
  span2.innerHTML = html1;
  div.appendChild(span2);

  gameplay.appendChild(div);
}

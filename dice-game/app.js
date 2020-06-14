const rollBtn = document.querySelector('button');
let rollText1 = document.querySelector('.roll-text-1');
let rollText2 = document.querySelector('.roll-text-2');
const diceImg1 = document.querySelector('.dice-img-1');
const diceImg2 = document.querySelector('.dice-img-2');


rollBtn.addEventListener('click', rollBothDice);

function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
}

function rollDice2() {
  return Math.ceil((Math.random() * 6));
}

function rollBothDice() {
  rollText1 = rollDice();
  rollText2 = rollDice2();
  console.log(rollText2);
  if (rollText1, rollText2) {
    diceImg1.style.backgroundImage = `url('dice-images/${rollText1}.png')`;
    diceImg2.style.backgroundImage = `url('dice-images/${rollText2}.png')`;
  }
}

const message = document.querySelector('.message');
let guessInput = document.querySelector('input');
const button = document.querySelector('button');
let inPlay = false;
let scramble = '';
let scrambled = '';
let score = 0;
const myArray = ['javascript', 'website', 'html', 'document', 'course'];
button.addEventListener('click', function () {

  if (!inPlay) {
    inPlay = true;
    score = 0;
    button.innerText = 'Guess';
    guessInput.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    message.innerText = scrambled + ' ' + scramble;
  } else {
    let tempGuess = guessInput.value;
    score++;
    console.log(tempGuess);
    if (tempGuess === scramble) {
      console.log('correct');
      inPlay = false;
      message.innerText = 'Correct, it was ' + scramble + ' it took ' + score + ' guesses';
      button.innerText = 'Start';
      guessInput.classList.toggle('hidden');
      guessInput.value = '';
    } else {
      console.log('guess again');
      message.innerText = 'Wrong ' + scrambled;
      guessInput.value = '';
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

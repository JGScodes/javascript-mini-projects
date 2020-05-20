const button = document.querySelector('button');
const bark = new Audio('sound/bark.mp3');
button.addEventListener('click', function () {
  let duration = bark.duration;
  let muted = bark.muted;
  bark.play();
  console.log(muted);
})

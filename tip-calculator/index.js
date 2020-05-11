// const message = document.querySelector('.message');
// const billAmount = document.querySelector('.bill-amount');
// const formContainer = document.querySelector('.form-container');

// function calculate(event) {
//   event.preventDefault();
//   return message.innerHTML = `You should tip $${(billAmount.value * 0.18).toFixed(2)} on $${billAmount.value}`;
// }

// formContainer.addEventListener('submit', calculate);

const button = document.querySelector("button");
const output = document.querySelector('.output');
button.addEventListener('click', function () {
  const cost = document.querySelector('input');
  let tip = (cost.value * 0.18).toFixed(2);
  // let temp = '<h1>You should tip $' + tip + ' on $' + cost.value + '</h1>';
  let temp = `<h1>You should tip $${tip} on $${cost.value}`;
  output.innerHTML = temp;
})

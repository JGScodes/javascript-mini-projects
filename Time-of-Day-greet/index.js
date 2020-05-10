const button = document.querySelector('button');
const output = document.querySelector('.output');
const date = new Date();
let hour = date.getHours();
const evening = hour > 17;
const afternoon = hour > 12;
const morning = hour > 0;
button.addEventListener('click', showOutput);
// output.setAttribute('style', 'color: red; width: 200px; height: 100px; text-align: center;');
output.style.cssText = "color: red; width: 200px; height: 100px; text-align: center;"

function showOutput() {
  let message;

  if (evening) {
    message = "Good Evening";
    output.style.backgroundColor = "navy";
  } else if (afternoon) {
    message = "Good Afternoon";
    output.style.backgroundColor = "orange";
  } else if (morning) {
    message = "Good Morning";
    output.style.backgroundColor = "skyblue";
  } else {
    message = "Error";
    output.style.backgroundColor = "red";

  }
  output.innerHTML = "<h1>" + message + "</h1>"
}



// const container = document.querySelector('.container');
// const date = new Date();
// const hour = date.getHours();
// const morning = hour > 1 && hour < 12;
// const afternoon = hour > 12 && hour < 18;
// const button = document.querySelector('button');

// button.addEventListener('click', showWeather);

// function showWeather() {
//   if (morning) {
//     console.log('good morning');
//     container.innerHTML = '<h1>Good Morning!</h1>';
//     container.style.classList.add("skyblue");
//   } else if (afternoon) {
//     container.innerHTML = '<h1>Good Afternoon!</h1>';
//     container.classList.add('orange');
//   } else {
//     container.innerHTML = '<h1>Good Evening!</h1>';
//     container.classList.add('navy');
//   }

// }

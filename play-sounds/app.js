const myArray = ["lion", "cougar", "bark"];
document.addEventListener("DOMContentLoaded", init);

function init() {
  myArray.forEach(function (item) {
    let div = document.createElement("div");
    div.setAttribute("class", "animal " + item);
    div.innerText = item.toUpperCase();
    div.addEventListener("click", function () {
      playIt(item);
    })
    document.body.appendChild(div);
  })
}

// refactored the addStyle and makeSound functions into the playIt function
function playIt(name) {
  let activeEle = document.querySelector("." + name);
  let sound1 = new Audio("sound/" + name + ".mp3");
  sound1.play();
  activeEle.classList.add("active");
  setTimeout(function () {
    activeEle.classList.remove("active");
  }, 1000)
}



// OLD CODE
// function makeSound(name) {
//   // console.table(name);
//   switch (name) {
//     case 'lion': {
//       let sound1 = new Audio('sound/lion.mp3');
//       sound1.play();
//       break;
//     }

//     case 'cougar': {
//       let sound2 = new Audio('sound/cougar.mp3');
//       sound2.play();
//       break;
//     }

//     case 'dog': {
//       let sound3 = new Audio('sound/bark.mp3');
//       sound3.play();
//       break;
//     }
//   }
// }

// for (let i = 0; i < animals.length; i++) {
//   animals[i].addEventListener('click', function () {
//     let animal = this.innerHTML;
//     let lowerAnimal = animal.toLowerCase();
//     makeSound(lowerAnimal);
//     addStyle(lowerAnimal);
//     playIt(lowerAnimal);
//   });
// }


// function addStyle(name) {
//   let activeEle = document.querySelector('.' + name);
//   activeEle.classList.add('active');
//   setTimeout(function () {
//     activeEle.classList.remove('active');
//   }, 1000);
//   console.log(activeEle);
// }

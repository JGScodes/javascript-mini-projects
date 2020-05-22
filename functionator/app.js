let myBlock;
let myFunctionList;
let funcList = [];
document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready");
  myBlock = document.createElement("div");
  myBlock.textContent = "Rasengan";
  myBlock.style.width = '100px';
  myBlock.style.height = '100px';
  myBlock.style.backgroundColor = 'red';
  myBlock.style.color = 'white';
  myBlock.style.lineHeight = '100px';
  myBlock.style.textAlign = 'center';
  myBlock.style.position = 'absolute';
  myBlock.style.top = '100px';
  myBlock.style.left = '150px';
  document.body.appendChild(myBlock);
  myFunctionList = document.createElement('div');
  document.body.appendChild(myFunctionList);
});

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  let keyC = e.keyCode;

  if (keyC === 37) {
    addFunc('left');
  } else if (keyC === 39) {
    addFunc('right');
  } else if (keyC === 38) {
    addFunc('up');
  } else if (keyC === 40) {
    addFunc('down');
  } else if (keyC === 67) {
    myBlock.style.backgroundColor = randomColor();
  } else if (keyC === 13 || keyC === 32) {
    mover();
  }
  console.log(e.keyCode);
});

function mover() {
  if (funcList.length > 0) {
    let cur = myBlock.getBoundingClientRect();
    let el = funcList.shift();
    console.log(typeof el + ' el');
    let item = el.textContent.replace('+', '');
    myFunctionList.removeChild(el);
    myBlock.innerHTML = 'Move:' + item;
    if (item === 'left') {
      myBlock.style.left = cur.left - cur.width + 'px';
    }
    if (item === 'right') {
      myBlock.style.left = cur.left + cur.width + 'px';
    }
    if (item === 'up') {
      myBlock.style.top = cur.top + cur.height + 'px';
    }
    if (item === 'down') {
      myBlock.style.top = cur.left - cur.width + 'px';
    }
    setTimeout(mover, 300);
  }
}

function addFunc(val) {
  let span = document.createElement('span');
  span.textContent = '+' + val;
  span.style.padding = '10px';
  span.style.border = '1px solid #ddd';
  span.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
  });
  span.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  });
  myFunctionList.appendChild(span);
  funcList.push(span);
  console.log(funcList);
}

function randomColor() {
  return '#' + Math.random().toString(16).substr(-6);
}

function goLeft() {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + "px";
}

function goRight() {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + "px";
}

function goDown() {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + "px";
}

function goUp() {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + "px";
}

// window.addEventListener("keydown", function (e) {
//   let key = e.key;
//   console.log(e.key + ' = ' + e.keyCode);
// })

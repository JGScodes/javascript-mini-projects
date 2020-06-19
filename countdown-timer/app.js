const endDate = document.querySelector('input[name="endDate"]');
let timeInterval;
const clock = document.querySelector('.clock');
let timeStop = true;
const savedValue = localStorage.getItem('countdown') || false;

if (savedValue) {
  startClock(savedValue);
  let inputValue = new Date(savedValue);
  console.log(inputValue);
  endDate.valueAsDate = inputValue;
}


endDate.addEventListener('change', function (e) {
  e.preventDefault();
  clearInterval(timeInterval);
  const temp = new Date(endDate.value);
  localStorage.setItem('countdown', temp);
  startClock(temp);
  timeStop = true;
});

function startClock(date) {

  function updateCounter() {
    let tl = timeLeft(date);

    if (tl.total <= 0) {
      timeStop = false;
    }

    console.log(tl.days);
    for (let prop in tl) {
      console.log(prop, tl[prop]);
      let el = document.querySelector("." + prop);
      if (el) {
        console.log(el);
        el.innerText = tl[prop];
      }
    }
  }

  updateCounter();
  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}


function timeLeft(date) {
  let currentDate = new Date();
  // console.log(Date.parse(date));
  // console.log(currentDate);
  // console.log(Date.parse(currentDate));
  let time = Date.parse(date) - Date.parse(currentDate);
  // console.log(time);

  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    "total": time,
    "days": days,
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds
  };
}

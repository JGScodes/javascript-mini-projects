const accordion = document.querySelectorAll('.panel');

accordion.forEach(function (ele) {
  ele.addEventListener('click', toggleEle);
});

function toggleEle(event) {
  console.log(event.target.parentElement);
  accordion.forEach(function (ele) {
    if (event.target.parentElement === ele) {
      ele.classList.toggle('active');
    } else {
      ele.classList.remove('active');
    }
  });
}

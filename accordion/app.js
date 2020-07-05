const accordion = document.querySelectorAll('.panel');

// Give a click event listener to each item in the accordian collection
accordion.forEach(function (ele) {
  ele.addEventListener('click', toggleEle);
});

function toggleEle(event) {
  console.log(event.target.parentElement);
  accordion.forEach(function (ele) {
    // Check and see if the element clicked is the parent of one of the items in the accordian collection
    if (event.target.parentElement === ele) {
      ele.classList.toggle('active');
    } else {
      ele.classList.remove('active');
    }
  });
}

// aos

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});

// smoth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let endDateElm = "20 October 2022 12:00 am";
let countDownItem = Array.from(document.querySelectorAll('.count_down'));

function dhms(dateDiff) {
  let day = Math.floor(dateDiff / 3600 / 24)
  let hour = Math.floor(dateDiff / 3600) % 24
  let min = Math.floor(dateDiff / 60) % 60
  let sec = Math.floor(dateDiff % 60)
  countDownItem[0].textContent = day
  countDownItem[1].textContent = hour
  countDownItem[2].textContent = min
  countDownItem[3].textContent = sec
}
function countDown() {
  let endDate = new Date(endDateElm);
  let newDate = new Date();
  let dateDiff = (endDate - newDate) / 1000
  if (dateDiff > 0) {
    dhms(dateDiff)
  }
  else {
    let newDate = new Date();
    endDate.setDate(newDate.getDate() + 5);
    let dateDiff = (endDate - newDate) / 1000
    dhms(dateDiff);
  }
}

let stop = setInterval(() => {
  countDown();
}, 1000);

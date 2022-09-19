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

// countdown
let countDownItem = Array.from(document.querySelectorAll('.count_down'))
setInterval(function time() {
  var d = new Date();
  var days = 5 - d.getDay();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + '').length == 1) {
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + '').length == 1) {
    sec = '0' + sec;
  }
  countDownItem[0].textContent = days
  countDownItem[1].textContent = hours
  countDownItem[2].textContent = min
  countDownItem[3].textContent = sec
}, 1000);

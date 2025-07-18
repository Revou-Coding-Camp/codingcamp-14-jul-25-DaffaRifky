document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const menu = document.getElementById('navbar-default');

  button.addEventListener('click', function () {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const popupButtons = document.querySelectorAll('.popup-btn');
  const popupWrap = document.querySelector('.popup-wrap');
  const popupBox = document.querySelector('.popup-box');
  const popupClose = document.querySelector('.popup-close');

  popupButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      fadeIn(popupWrap, 300);
    });
  });

  if (popupClose) {
    popupClose.addEventListener('click', function (e) {
      e.preventDefault();
      fadeOut(popupWrap, 300);
    });
  }

  // Helper functions to mimic jQuery fadeIn and fadeOut
  function fadeIn(el, duration) {
    el.style.opacity = 0;
    el.style.display = 'block';

    let last = +new Date();
    const tick = function () {
      el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
      last = +new Date();

      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }

  function fadeOut(el, duration) {
    el.style.opacity = 1;

    let last = +new Date();
    const tick = function () {
      el.style.opacity = +el.style.opacity - (new Date() - last) / duration;
      last = +new Date();

      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        el.style.display = 'none';
      }
    };
    tick();
  }
});

function updateTime() {
  const now = new Date();
  const timeStr = now.toString(); // Full detailed date and time
  document.getElementById("currentTime").innerHTML = `Current time: ${timeStr}`;
}
setInterval(updateTime, 1000);
updateTime(); // Initial call

// form
let inputName = document.getElementById('inputName'); let name = document.getElementById('yname');

let inputDate = document.getElementById('inputDate');
let date = document.getElementById('date');

let maleInput = document.getElementById('inputMale');
let femaleInput = document.getElementById('inputFemale');
let gender = document.getElementById('gender');

let textInput = document.getElementById('inputText');
let text = document.getElementById('text');

function submit() {

if (inputName.value === '' || inputDate.value === '' || (!inputMale.checked && !inputFemale.checked )) {
  document.querySelectorAll('input').forEach(e => e.reportValidity())
} else {

  yname.innerHTML = inputName.value;
  date.innerHTML = inputDate.value;

  if (inputMale.checked === true) {
    gender.innerHTML = maleInput.value;
  } else if (inputFemale.checked === true) {
    gender.innerHTML = femaleInput.value;
  }

  text.innerHTML = inputText.value;
}
}

let displayNameInput = document.getElementById('displayNameInput');
let displayName = document.getElementById('displayName');

displayNameInput.addEventListener('input', function () {
  displayName.innerHTML = displayNameInput.value || 'Guest';
  if (displayNameInput.value.length > 10) {
    document.getElementById('full').innerHTML = 'Oops... sorry but name is too long to be diplayed!';
  }
});

    const carousel = document.getElementById('carousel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const totalSlides = carousel.children.length;
    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    next.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
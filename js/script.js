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
      fadeIn(popupWrap, 500);
    });
  });

  if (popupClose) {
    popupClose.addEventListener('click', function (e) {
      e.preventDefault();
      fadeOut(popupWrap, 500);
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
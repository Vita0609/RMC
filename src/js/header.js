const elBtnOpenMenu = document.querySelector('.js-open-menu');
const elMenuContainer = document.querySelector('.js-menu-container');
const elBtnScrollUp = document.querySelector('.btn-scroll_up');

elBtnOpenMenu.addEventListener('click', () => {
  if (elBtnScrollUp.classList.contains('btn-scroll_up-active')) {
    elBtnScrollUp.classList.remove('btn-scroll_up-active');
  }

  document.body.style.overflow = 'hidden';
  elMenuContainer.classList.add('is-open');
  setTimeout(() => {
    elMenuContainer.style.transform = 'translateX(0%)';
  }, 100);
});

elMenuContainer.addEventListener('click', e => {
  const elItemList = e.target.closest('.mob-menu-item');
  const elBtnClose = e.target.closest('.mob-menu-btn');
  if (!elItemList || !elBtnClose) {
    document.body.style.overflow = 'auto';
    elMenuContainer.style.transform = 'translateX(100%)';
    setTimeout(() => {
      elMenuContainer.classList.remove('is-open');
    }, 600);
    trackScroll();
  }
});

window.addEventListener('scroll', trackScroll);
elBtnScrollUp.addEventListener('click', goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    elBtnScrollUp.classList.add('btn-scroll_up-active');
  } else {
    elBtnScrollUp.classList.remove('btn-scroll_up-active');
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}

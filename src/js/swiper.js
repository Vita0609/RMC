const elSlides = document.querySelectorAll('.services-item');
const elImages = document.querySelectorAll('.services-item-img');

if (window.innerWidth < 768) {
  elSlides.forEach(el => el.classList.add('services-item-mob'));
  elImages.forEach(el => el.classList.add('services-item-mob'));
}

const callSwiper = () => {
  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 15,
      },
      768: {
        initialSlide: 0,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
};
setTimeout(callSwiper, 500);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    elSlides.forEach(el => el.classList.add('services-item-mob'));
    elImages.forEach(el => el.classList.add('services-item-mob'));
  } else if (elSlides[0].classList.contains('services-item-mob')) {
    elSlides.forEach(el => el.classList.remove('services-item-mob'));
    elImages.forEach(el => el.classList.remove('services-item-mob'));
  }
});

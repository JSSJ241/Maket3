if(window.innerWidth <= 768){
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    slidesPerGroup: 1,
    allowTouchMove: true,
    simulateTouch: true,
    slidesPerView: 1.5,
    spaceBetween: 15,

  mousewheel: {
    releaseOnEdges: true,
  },   

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
} else {
  delete Swiper
}

if(window.innerWidth <= 1120){
  const hideButton = document.getElementById('hideButton');
  const toggleButton = document.getElementById('toggleButton');
  const hiddenElements = document.querySelectorAll('.hidden');


    toggleButton.addEventListener('click', () => {
      hiddenElements.forEach(element => {
        element.classList.toggle('hidden');
      });
    });
};

if(window.innerWidth <= 7680){
  const hideButton = document.getElementById('hideButton');
  const toggleButton = document.getElementById('toggleButton');
  const hiddenElements = document.querySelectorAll('.hiddenmd');


    toggleButton.addEventListener('click', () => {
      hiddenElements.forEach(element => {
        element.classList.toggle('hiddenmd');
      });


      if (toggleButton.textContent.includes('Показать все')) {
        toggleButton.innerHTML = '<img src="./img/expand1.png">Скрыть';
      } else {
        toggleButton.innerHTML = '<img src="./img/expand.png">Показать все';
      }
    });
};
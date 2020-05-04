// ----- Init ----- //

(() => {
  // var
  let sliderEl = '#slider-hero',
    sliderSelector = document.querySelector(sliderEl),
    sliderLink = sliderSelector.querySelector('#hero slider__item.is-selected'),
    sliderArrowPrev = document.querySelector('#hero .slider__arrow--prev'),
    sliderArrowNext = document.querySelector('#hero .slider__arrow--next'),
    sliderPageActive = document.querySelector('#hero .slider__page-active'),
    sliderPageCount = document.querySelector('#hero .slider__page-count'),
    sliderViewport = document.querySelector('#hero .flickity-viewport'),
    w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth,
    sliderNav = document.querySelector('#hero .slider__nav'),
    sliderText = document.querySelectorAll('#hero .block__text'),
    throttled = false;

  // init
  let flktyHero = new Flickity((sliderEl), {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    lazyLoad: 1,
    groupCells: true,
    wrapAround: true,
    // imagesLoaded: true,
    on: {
      ready() {
        setTimeout(() => {
          sliderPageCount.innerHTML = flktyHero.cells.length;
          sliderPageActive.innerHTML = flktyHero.selectedIndex + 1;
        }, 1);
      },
      change() {
        sliderPageActive.innerHTML = flktyHero.selectedIndex + 1;
      },
      dragStart() {
        sliderLink.style.pointerEvents = 'none';
      },
      dragEnd() {
        sliderLink.style.pointerEvents = '';
      }
    }
  });

  // custom nav
  sliderArrowPrev.addEventListener('click', () => flktyHero.previous());
  sliderArrowNext.addEventListener('click', () => flktyHero.next());

  // resize slider text
  function resizeSliderText() {
    for (let el of sliderText) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        el.style.right = sliderNav.clientWidth + 'px';
        el.style.bottom = '';
      } else {
        el.style.right = '';
        el.style.bottom = sliderNav.clientHeight + 'px';
      }
    }
  }
  resizeSliderText();

  // resize
  let cachedWidth = w;
  window.addEventListener('resize', () => {
    if (!throttled) {
      resizeSliderText();
      let newWidth = w;
      if (newWidth !== cachedWidth) {
        sliderViewport.style.height = '';
        flktyHero.resize();
        cachedWidth = newWidth;
      }
      throttled = true;
      setTimeout(() => throttled = false, 250);
    }
  });


  // Fix page vertical scrolling (mobile)
  let
    tapArea = document.querySelectorAll('.flickity-enabled'),
    startX = 0;
  for (let item of tapArea) {
    item.ontouchstart = e => startX = e.touches[0].clientX;
    item.ontouchmove = e => {
      if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
        e.preventDefault();
      }
    };
  }
})()






// ----- Custom nav disable //

// function disableArrows() {
//   let flktyHeroPrev = document.querySelector('#slider-hero .flickity-prev-next-button.previous');
//   let flktyHeroNext = document.querySelector('#slider-hero .flickity-prev-next-button.next');
//   sliderArrowPrev.classList.remove('disabled');
//   sliderArrowNext.classList.remove('disabled');
//   if (flktyHeroPrev.disabled) {
//     sliderArrowPrev.classList.add('disabled');
//   }
//   if (flktyHeroNext.disabled) {
//     sliderArrowNext.classList.add('disabled');
//   }

//   if (flktyHeroPrev.disabled && flktyHeroNext.disabled) {
//     sliderArrowPrev.classList.add('disabled');
//     sliderArrowNext.classList.add('disabled');
//   }
// }

// disableArrows()
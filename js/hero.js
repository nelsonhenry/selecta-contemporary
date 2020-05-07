(() => {
  let
    hero = document.querySelector('#hero'),
    sliderEl = '#slider-hero',
    sliderSelector = document.querySelector(sliderEl),
    sliderArrowPrev = document.querySelector('#hero .slider__arrow--prev'),
    sliderArrowNext = document.querySelector('#hero .slider__arrow--next'),
    sliderPageActive = document.querySelector('#hero .slider__page-active'),
    sliderPageCount = document.querySelector('#hero .slider__page-count'),
    sliderViewport = document.querySelector('#hero .flickity-viewport'),
    sliderLink = document.querySelectorAll('#hero .block__link'),
    sliderNav = document.querySelector('#hero .slider__nav'),
    sliderText = document.querySelectorAll('#hero .block__text'),
    w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth,
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    throttled = false,
    cachedWidth = w;

  // init
  let flktyHero = new Flickity((sliderEl), {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    lazyLoad: 1,
    groupCells: true,
    wrapAround: true,
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
        for (el of sliderLink)
          el.style.pointerEvents = 'none';
      },
      dragEnd() {
        for (el of sliderLink)
          el.style.pointerEvents = '';
      }
    }
  });

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

  // hero min-height
  function heroMinhHeight() {
    hero.style.minHeight = h + 'px';
  }

  heroMinhHeight();
  resizeSliderText();

  // custom nav
  sliderArrowPrev.addEventListener('click', () => flktyHero.previous());
  sliderArrowNext.addEventListener('click', () => flktyHero.next());

  // resize
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
      setTimeout(() => throttled = false, 40);
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
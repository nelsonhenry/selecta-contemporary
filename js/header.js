(() => {

  let
    header = document.querySelector('#header'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;


  // add/rm class hero (scroll)
  function headerHero() {
    document.body.classList.contains('home') && window.pageYOffset < h ?
      header.classList.add('header--hero') :
      header.classList.remove('header--hero');
  }

  // add class hero
  if (document.body.classList.contains('home') && window.pageYOffset < h)
    header.classList.add('header--hero');

  // scroll (throttle)
  let tick = false;
  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (!tick)
      setTimeout(() => {
        if (document.body.classList.contains('home'))
          headerHero();
        tick = false;
      }, 100)
    tick = true;
  }, false);

  let scrollPos = 0;
  const nav = document.querySelector('.site-nav');

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      header.style.top = '0';
    } else {
      header.style.top = -(header.offsetHeight) + 'px';
    }
    scrollPos = windowY;
  }

  // function debounce(func, wait = 100, immediate = true) {
  //   let timeout;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     let later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     let callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  window.addEventListener('scroll', checkPosition);

})();
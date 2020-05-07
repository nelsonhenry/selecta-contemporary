(() => {

  let
    header = document.querySelector('#header'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    hHeader = h - header.offsetHeight / 2,
    cachedScroll = 0;

  // add/rm class hero (scroll)
  function headerHero() {
    document.body.classList.contains('home') &&
      window.pageYOffset > hHeader ?
      header.classList.remove('header--hero') :
      header.classList.add('header--hero');
  }

  // add class hero
  if (
    document.body.classList.contains('home') &&
    window.pageYOffset < hHeader)
    header.classList.add('header--hero');

  // scroll (throttle)
  let lastScrollPosition = 0,
    tick = false;

  window.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY;
    if (!tick)
      setTimeout(() => {
        if (document.body.classList.contains('home'))
          headerHero();
        tick = false;
      }, 100)
    tick = true;
  });
})()
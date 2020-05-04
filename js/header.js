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

  // // add/rm class active (scroll)
  // function headerActive() {
  //   let scroll = window.pageYOffset;

  //   scroll < cachedScroll && scroll > hHeader ?
  //     header.classList.add('header--active') :
  //     header.classList.remove('header--active');

  //   cachedScroll = scroll;
  // }

  // ************************************************** //

  // add class hero
  if (
    document.body.classList.contains('home') &&
    window.pageYOffset < hHeader)
    header.classList.add('header--hero');

  // scroll
  // window.addEventListener('scroll', () => didScroll = true);
  // setInterval(() => {
  //   if (didScroll) {
  //     didScroll = false;
  //     if (document.body.classList.contains('home'))
  //       headerHero();
  //     // headerActive();
  //   }
  // }, 250);

  // scroll (throttle)
  let lastScrollPosition = 0,
    tick = false; // Track whether call is currently in process

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

  // // mouseover
  // header.addEventListener('mouseover', () => {
  //   if (window.pageYOffset > hHeader)
  //     header.classList.add('header--active');
  // });

  // // mouseout
  // header.addEventListener('mouseout', () => header.classList.remove('header--active'))

})()
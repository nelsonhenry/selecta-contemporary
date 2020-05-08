(() => {

  let
    header = document.querySelector('#header'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    hHeader = h - header.offsetHeight / 2;


  // add/rm class hero (scroll)
  let headerHero = throttle(() => {
    document.body.classList.contains('home') && window.pageYOffset > hHeader ?
      header.classList.remove('header--hero') :
      header.classList.add('header--hero');
  }, 100);


  function headerFollow() {
    let
      elHeight = 0,
      elTop = 0,
      scroll = 0,
      prevScroll = 0,
      diffScroll = 0;

    header.style.top = 0;

    window.addEventListener('scroll', () => {
      elHeight = header.offsetHeight;
      scroll = window.pageYOffset;
      diffScroll = prevScroll - scroll;
      elTop = parseInt(header.style.top) + diffScroll;

      if (scroll <= 0) {
        header.style.top = 0;
      } else if (diffScroll > 0) {
        header.style.top = elTop > 0 ? 0 : elTop + 'px';
      } else {
        header.style.top = Math.abs(elTop) > elHeight ? -elHeight + 'px' : elTop + 'px';
      }
      prevScroll = scroll;
    });
  }

  headerFollow();

  // add class hero
  if (document.body.classList.contains('home') && window.pageYOffset < h)
    header.classList.add('header--hero');

  <<
  << << < HEAD
  window.addEventListener("scroll", headerHero);

  // // scroll (throttle)
  // let lastScrollPosition = 0,
  //   tick = false;
  ===
  === =

  // scroll (throttle)
  let lastScrollPosition = 0,
    tick = false; >>>
  >>> > master

  // window.addEventListener('scroll', () => {
  //   lastScrollPosition = window.scrollY;
  //   if (!tick)
  //     setTimeout(() => {
  //       if (document.body.classList.contains('home'))
  //         headerHero();
  //       tick = false;
  //     }, 100)
  //   tick = true;
  // });
})()
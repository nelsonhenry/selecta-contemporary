(() => {

  let
    header = document.querySelector('#header'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    headerH = header.offsetHeight;


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

})();
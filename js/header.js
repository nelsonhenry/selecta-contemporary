(() => {
  let
    header = document.querySelector('#header'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    hHeader = h - header.offsetHeight / 2,
    cachedScroll = 0,
    didScroll;

  console.log(hero);

  if (document.querySelector('#hero') && window.pageYOffset > hHeader)
    header.classList.add('header--hero');

  function headerHero() {
    document.querySelector('#hero') && window.pageYOffset > hHeader ?
      header.classList.remove('header--hero') :
      header.classList.add('header--hero');
  }

  function headerActive() {
    let scroll = window.pageYOffset;
    scroll < cachedScroll && scroll > hHeader ?
      header.classList.add('header--active') :
      header.classList.remove('header--active');
    cachedScroll = scroll;
  }

  // scroll event
  window.addEventListener('scroll', () => didScroll = true);
  setInterval(() => {
    if (didScroll) {
      didScroll = false;
      headerHero();
      headerActive();
    }
  }, 250);

  header.addEventListener('mouseover', () => {
    if (window.pageYOffset > hHeader)
      header.classList.add('header--active');
  });
  header.addEventListener('mouseout', () => header.classList.remove('header--active'))

})()
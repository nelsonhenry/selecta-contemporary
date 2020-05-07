(() => {

  let
    header = document.querySelector('#header'),
    main = document.querySelector('#main'),
    searchbox = document.querySelector('#searchbox'),
    articleGallery = document.querySelector('#article-gallery'),
    figureImgs = document.querySelectorAll('.article__featured-image'),
    h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  // didScroll;

  function articleDark() {
    if (
      window.pageYOffset > articleGallery.getBoundingClientRect().top &&
      articleGallery.getBoundingClientRect().bottom > h / 1.5
    ) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  // function showFigcaption() {
  //   for (let el of figureImgs) {
  //     el.addEventListener('click', function () {
  //       this.lastElementChild.classList.toggle('visible');
  //     })
  //   }
  // }

  // showFigcaption();

  if (document.body.classList.contains('detail--dark'))
    articleDark();

  // scroll
  // window.addEventListener('scroll', () => didScroll = true);
  // setInterval(() => {
  //   if (didScroll) {
  //     didScroll = false;
  //     if (document.body.classList.contains('detail--dark'))
  //       articleDark();
  //   }
  // }, 100);

  // scroll (throttle)
  // let lastScrollPosition = 0,
  //   tick = false; // Track whether call is currently in process

  // window.addEventListener('scroll', () => {
  //   lastScrollPosition = window.scrollY;
  //   if (!tick)
  //     setTimeout(() => {
  //       if (document.body.classList.contains('detail--dark'))
  //         articleDark();
  //       tick = false;
  //     }, 100)
  //   tick = true;
  // });
})()
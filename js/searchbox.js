(() => {
  let
    body = document.querySelector('body'),
    searchbox = document.querySelector('#searchbox'),
    btnOpenSearch = document.querySelector('#btn--open-search'),
    btnMenuOpenSearch = document.querySelector('#btn--menu-open-search'),
    btnCloseSearch = document.querySelector('#btn--close-search'),
    searchboxInput = document.querySelector('.searchbox__input input');

  function openSearch() {
    body.style.overflow = 'hidden';
    header.style.opacity = 0;
    searchbox.classList.add('searchbox--open');
    searchboxInput.focus();
  }

  function closeSearch() {
    body.style.overflow = '';
    header.style.opacity = '';
    searchbox.classList.remove('searchbox--open');
  }

  btnOpenSearch.addEventListener('click', () => openSearch());
  btnMenuOpenSearch.addEventListener('click', () => openSearch());
  btnCloseSearch.addEventListener('click', () => closeSearch());
  document.addEventListener('keydown', ev => {
    ev = ev || window.event;
    if (ev.keyCode == 27) closeSearch();
  });
  // document.onkeydown = ev => {
  //   ev = ev || window.event;
  //   if (ev.keyCode == 27) closeSearch();
  // };
})()
(() => {
  let
    menu = document.querySelector('#menu'),
    closeMenuZone = document.querySelector('#close-menu-zone'),
    btnOpenMenu = document.querySelector('#btn--open-menu'),
    btnCloseMenu = document.querySelector('#btn--close-menu'),
    header = document.querySelector('#header'),
    canvas = document.querySelector('#canvas'),
    navLinks = document.querySelectorAll('#menu .nav__link'),
    menuWidth = menu.offsetWidth,
    w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  menu.style.left = '100%';

  function openMenu() {
    canvas.style.left = -menuWidth + 'px';
    menu.style.left = (w - menuWidth) + 'px';
    document.body.style.overflow = 'hidden';
    canvas.style.pointerEvents = 'none';
    closeMenuZone.style.pointerEvents = 'all';
    header.style.opacity = 0;
    menu.classList.add('menu--open');
  }

  function closeMenu() {
    canvas.style.left = 0;
    menu.style.left = w + 'px';
    document.body.style.overflow = '';
    canvas.style.pointerEvents = '';
    closeMenuZone.style.pointerEvents = '';
    header.style.opacity = '';
    menu.classList.remove('menu--open');
  }

  function resizeMenu() {
    menu.style.left = w + 'px';
  }

  btnOpenMenu.addEventListener('click', () => openMenu());
  btnCloseMenu.addEventListener('click', () => closeMenu());
  for (let el of navLinks) el.addEventListener('click', () => closeMenu());
  closeMenuZone.addEventListener('click', () => {
    if (menu.classList.contains('menu--open')) closeMenu();
  })

  window.addEventListener('resize', function () {
    w = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    menuWidth = menu.offsetWidth;
    console.log(menuWidth);
    menu.classList.contains('menu--open') ?
      closeMenu() :
      resizeMenu()
  });

  document.addEventListener('keydown', ev => {
    ev = ev || window.event;
    if (ev.keyCode == 27 && menu.classList.contains('menu--open')) closeMenu();
  })
})();
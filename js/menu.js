(() => {
  let
    body = document.querySelector('body'),
    menu = document.querySelector('#menu'),
    closeMenuZone = document.querySelector('#close-menu-zone'),
    btnOpenMenu = document.querySelector('#btn--open-menu'),
    btnCloseMenu = document.querySelector('#btn--close-menu'),
    header = document.querySelector('#header'),
    canvas = document.querySelector('#canvas'),
    navLinks = document.querySelectorAll('#menu .nav__link'),
    menuWidth = menu.offsetWidth;

  function resizeMenu() {
    menu.style.right = -menuWidth + 'px';
  }

  function openMenu() {
    body.style.overflow = 'hidden';
    canvas.style.right = menuWidth + 'px';
    canvas.style.pointerEvents = 'none';
    closeMenuZone.style.pointerEvents = 'all';
    header.style.opacity = 0;
    menu.style.right = 0;
    menu.classList.add('menu--open');
  }

  function closeMenu() {
    body.style.overflow = '';
    canvas.style.right = 0;
    canvas.style.pointerEvents = '';
    closeMenuZone.style.pointerEvents = '';
    header.style.opacity = '';
    menu.style.right = -menuWidth + 'px';
    menu.classList.remove('menu--open');
  }

  resizeMenu();

  btnOpenMenu.addEventListener('click', () => openMenu());
  btnCloseMenu.addEventListener('click', () => closeMenu());
  for (let el of navLinks) el.addEventListener('click', () => closeMenu());
  closeMenuZone.addEventListener('click', () => {
    if (menu.classList.contains('menu--open')) closeMenu();
  })

  window.addEventListener('resize', function () {
    menuWidth = menu.offsetWidth;
    menu.classList.contains('menu--open') ?
      closeMenu() :
      resizeMenu()
  });

  document.addEventListener('keydown', ev => {
    ev = ev || window.event;
    if (ev.keyCode == 27 && menu.classList.contains('menu--open')) closeMenu();
  })
})();
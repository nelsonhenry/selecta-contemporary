(() => {
  let msnry = new Masonry('.grid', {
    itemSelector: '.grid__item',
    gutter: '.grid__gutter',
    columnWidth: '.grid__sizer',
    horizontalOrder: true,
    percentPosition: true
    // imagesLoaded: true
  });

  // imagesLoaded(msnry, () => msnry.layout());
  document.addEventListener('lazyloaded', () => msnry.layout());
})()
(() => {
  let grid = document.querySelector('.grid')
  imagesLoaded(grid, function () {
    let msnry = new Masonry('.grid', {
      itemSelector: '.grid__item',
      gutter: '.grid__gutter',
      columnWidth: '.grid__sizer',
      // horizontalOrder: true,
      percentPosition: true
    });
    document.addEventListener('lazyloaded', () => msnry.layout());
  })
})()
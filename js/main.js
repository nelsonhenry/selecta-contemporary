let $grid = $('.grid').masonry({
  itemSelector: '.grid__item',
  gutter: '.grid__gutter',
  grid__itemumnWidth: '.grid__sizer',
  horizontalOrder: true,
  percentPosition: true
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.masonry('layout');
});
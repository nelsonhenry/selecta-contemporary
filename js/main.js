$(document).ready(function () {
  $.adaptiveBackground.run();
});

let header = document.querySelector('#header');

$('[data-fancybox="article-gallery"]').fancybox({
  animationEffect: "zoom",
  animationDuration: 250,
  transitionEffect: "slide",
  transitionDuration: 250,
  loop: true,
  idleTime: false,
  wheel: false,
  preventCaptionOverlap: false,
  infobar: false,
  arrows: false,
  smallBtn: false,
  toolbar: false,
  protect: true,
  thumbs: false,
  caption: function (instance, item) {
    return $(this).find('figcaption').html();
  },
  // onComplete() {
  //   header.style.opacity = 0
  // },
  // "onClosed": function () {
  //   header.style.opacity = ''
  // },
  baseTpl: `
  <div class="fancybox-container" role="dialog" tabindex="-1">
    <div class="fancybox-bg"></div>
    <div class="fancybox-inner">
      <div class="lightbox__header">
        <div class="lightbox__nav">
          <button class="lightbox__btn lightbox__btn--prev" data-fancybox-prev title="prev"><</button>
          &nbsp;
          <span data-fancybox-index></span>
          &nbsp;/&nbsp;
          <span data-fancybox-count></span>
          &nbsp;
          <button class="lightbox__btn lightbox__btn--next" data-fancybox-next title="next">></button>
        </div>
        <div class="lightbox__nav">
          <button class="lightbox__btn lightbox__btn--captions">Infos</button>
          &nbsp;/&nbsp;
          <button class="lightbox__btn lightbox__btn--close" data-fancybox-close>Close</button>
        </div>
      </div>
      <div class="fancybox-stage"></div>
      <div class="fancybox-caption">
        <div class=""fancybox-caption__body"></div>
      </div>
    </div>
  </div>`
});




// todo: disable swiping on desktop (bug magicmouse)
// if (!$.fancybox.isMobile) {
//   console.log($.fancybox);
// }


// $('.fancybox-button--captions').click(function () {
//   console.log('test');
//   // $('.fancybox-slide').css('padding-bottom', '0 !important');
// })

$(document).on('click', '.lightbox__btn--captions', function () {
  $('.fancybox-caption').toggle();
  // console.log('test');
  // $('.fancybox-slide').css('padding-bottom', 0);
  // $('.fancybox-slide').css('background', 'red');
  // $.fancybox.getInstance().preventCaptionOverlap = false
  // $.fancybox.getInstance().opts.preventCaptionOverlap = false;
  // console.log($.fancybox.getInstance().opts.preventCaptionOverlap);
  // $.fancybox.getInstance().update();
});
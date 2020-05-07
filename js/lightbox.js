(() => {
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom",
    zoomOpacity: false,
    animationDuration: 250,
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
    caption(instance, item) {
      return $(this).find('figcaption').html();
    },
    onActivate() {
      let captions = document.querySelectorAll('.fancybox-caption');
      for (el of captions) {
        el.classList.add('hidden');
      }
    },
    baseTpl: `
    <div class="fancybox-container" role="dialog" tabindex="-1">
      <div class="fancybox-bg"></div>
      <div class="fancybox-inner">
        <div class="lightbox__header">
          <div class="lightbox__nav">
            <button data-fancybox-prev title="prev"><</button>
            &nbsp;
            <span data-fancybox-index></span>
            &nbsp;/&nbsp;
            <span data-fancybox-count></span>
            &nbsp;
            <button data-fancybox-next title="next">></button>
          </div>
          <div class="lightbox__nav">
            <button class="btn-icon" id="btn--lightbox-infos">
              <span class="btn-icon__text">Infos</span>
              <span class="btn-icon__icon">&#9432;</span>
            </button>
            &nbsp;/&nbsp;
            <button class="btn-icon" id="btn--lightbox-close" data-fancybox-close>
              <span class="btn-icon__text">Close</span>
              <span class="btn-icon__icon">✕</span>
            </button>
          </div>
        </div>
        <div class="fancybox-stage"></div>
        <div class="fancybox-caption">
          <div class=""fancybox-caption__body"></div>
        </div>
      </div>
    </div>`
  });

  $(document).on('click', '#btn--lightbox-infos', function () {
    $('.fancybox-caption').toggleClass('hidden')
  });
})()
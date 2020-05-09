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
            <button class="btn-icon btn-icon--left" data-fancybox-prev title="prev">&lt;</button>
            &nbsp;
            <span data-fancybox-index></span>
            &nbsp;/&nbsp;
            <span data-fancybox-count></span>
            &nbsp;
            <button class="btn-icon  btn-icon--right" data-fancybox-next title="next">&gt;</button>
          </div>
          <div class="lightbox__nav">
            <button class="btn-icon btn-icon--left" id="btn--lightbox-infos">
              <span class="btn-icon__text">Infos</span>
              <svg class="btn-icon__icon btn-icon__icon--svg">
                <circle cx="9" cy="9" r="8.5"></circle>
                <circle cx="9" cy="5" r="0.375"></circle>
                <line x1="9" y1="8" x2="9" y2="14"></line>
              </svg>
            </button>
            &nbsp;/&nbsp;
            <button class="btn-icon btn-icon--right" id="btn--lightbox-close" data-fancybox-close>
              <span class="btn-icon__text">Close</span>
              <svg class="btn-icon__icon btn-icon__icon--svg">
                <line x1="2" y1="2" x2="16" y2="16"></line>
                <line x1="16" y1="2" x2="2" y2="16"></line>
              </svg>
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
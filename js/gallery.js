(() => {
  let imgs = document.querySelectorAll('.grid__item img');
  for (let img of imgs) {
    img.addEventListener('mouseenter', function () {
      let
        vibrant = new Vibrant(img),
        c;
      // console.log(vibrant);

      if (typeof vibrant.VibrantSwatch !== 'undefined') {
        c = vibrant.VibrantSwatch.rgb
      } else if (typeof vibrant.MutedSwatch !== 'undefined') {
        c = vibrant.MutedSwatch.rgb
      } else if (typeof vibrant.DarkVibrantSwatch !== 'undefined') {
        c = vibrant.DarkVibrantSwatch.rgb
      } else if (typeof vibrant.DarkMutedSwatch !== 'undefined') {
        c = vibrant.DarkMutedSwatch.rgb
      } else if (typeof vibrant.LightVibrantSwatch !== 'undefined') {
        c = vibrant.LightVibrantSwatch.rgb
      } else if (typeof vibrant.LightMutedSwatch !== 'undefined') {
        c = vibrant.LightMutedSwatch
      }

      img.style.mixBlendMode = 'screen';
      img.style.filter = 'grayscale(1)';
      img.parentElement.style.backgroundColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      // img.parentElement.nextElementSibling.style.color = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
    });
    img.addEventListener('mouseleave', () => {
      img.style = '';
      img.parentElement.style = '';
      // img.parentElement.nextElementSibling.style = '';
    })
  }
})()
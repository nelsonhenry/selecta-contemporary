document.addEventListener("DOMContentLoaded", () => document.body.classList.add('loaded'));
window.addEventListener('beforeunload', () => document.body.classList.remove('loaded'));


// (() => {
//   const colorThief = new ColorThief();
//   const imgs = document.querySelectorAll('.grid__item.color-thief img');
//   const main = document.querySelector('.main');

//   // Make sure image is finished loading
//   imgs.forEach(img => {
//     img.addEventListener('mouseenter', function () {
//       console.log('hover');
//       let c = colorThief.getColor(img);
//       let yiq = ((c[0] * 299) + (c[1] * 587) + (c[2] * 114)) / 1000;
//       (yiq >= 128) ?
//       main.style.color = 'black':
//         main.style.color = 'white';
//       main.style.background = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
//     });
//     img.addEventListener('mouseleave', () => {
//       main.style.background = '';
//       main.style.color = '';
//     })
//   })
// })()
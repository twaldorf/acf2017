document.addEventListener('scroll', function(event) {
  var header = document.querySelector('#header');
  var holder = document.querySelector('#holder');
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    header.classList.add('fix-top');
    header.classList.add('slider-up');
    holder.classList.toggle('hidden');
  } if (window.scrollY > 501) {
    header.classList.add('slider-down');
    header.classList.remove('slider-up');
  } else {
    header.classList.remove('fix-top');
    header.classList.remove('slider-up');
    header.classList.remove('slider-down');
    holder.classList.toggle('hidden');
  }
})

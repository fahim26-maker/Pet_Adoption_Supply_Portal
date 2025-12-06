document.addEventListener('DOMContentLoaded', () => {

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slideCount;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Optional: autoplay every 6 seconds
setInterval(() => {
  index = (index + 1) % slideCount;
  updateSlider();
}, 6000);
});
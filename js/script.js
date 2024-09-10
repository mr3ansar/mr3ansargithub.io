const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  // Loop the index to create infinite scrolling effect
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  // Update the transform to show the correct slide
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Get the carousel container and slide elements
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');

// Get the images and calculate the slide width
const carouselImages = carouselSlide.querySelectorAll('img');
const slideWidth = carouselImages[0].clientWidth;

// Set the slide index and initial position
let slideIndex = 0;
let slidePosition = 0;

// Create the previous and next button elements
const prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.classList.add('carousel-button', 'carousel-prev');
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('carousel-button', 'carousel-next');

// Add the button elements to the carousel container
carouselContainer.appendChild(prevButton);
carouselContainer.appendChild(nextButton);

// Add click event listeners to the button elements
prevButton.addEventListener('click', () => {
  slideIndex--;
  slidePosition += slideWidth;
  if (slideIndex < 0) {
    slideIndex = carouselImages.length - 1;
    slidePosition = -slideWidth * (carouselImages.length - 1);
  }
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  slidePosition -= slideWidth;
  if (slideIndex >= carouselImages.length) {
    slideIndex = 0;
    slidePosition = 0;
  }
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
});


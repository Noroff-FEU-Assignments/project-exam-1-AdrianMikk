const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);


const slideWidth = slide[0].getBoundingClientRect().width;
// console.log(slideWidth);

// Arrange the slides next to each other 
// slides[0].style.left =  slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

// When I click left, the slides move to the left



// When I click left, the slides move to the right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    // move to the next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide"); 
})
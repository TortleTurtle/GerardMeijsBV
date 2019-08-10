//slider
const slides = document.getElementsByClassName("slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let timer;
let slideIndex = 1;

//event listeners
nextBtn.addEventListener('click', () => nextSlide());
prevBtn.addEventListener('click', () => prevSlide());

function nextSlide() {
  console.log("next slide");
  clearTimeout(timer);

  slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }

  showSlides();
}

function prevSlide() {
  console.log("previous slide");
  clearTimeout(timer);
  slideIndex--;
  if (slideIndex < 1){
    slideIndex = slides.length;
  }
  console.log(slideIndex);
  showSlides();
}

function showSlides() {
  console.log("slide index: " + slideIndex)
    //set all slides to hidden.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    //set 1 slide to visible.
    slides[slideIndex-1].style.display = "block";
 
    //timer for next slide.
    timer = setTimeout(() => nextSlide(), 5000);
}

showSlides();
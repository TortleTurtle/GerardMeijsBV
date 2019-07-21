//carousel
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//carousel counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";

//carousel listeners & timers
nextBtn.addEventListener('click', ()=>nextImage());
prevBtn.addEventListener('click', ()=>prevImage());
let carouselTimer = setTimeout(() => nextImage(), 5000);
carouselSlide.addEventListener('transitionend', ()=>loopCarousel());

function nextImage() {
    if (counter >= carouselImages.length - 1) {
        clearTimeout(carouselTimer);
        carouselTimer = setTimeout(() => nextImage(), 5000);
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    clearTimeout(carouselTimer);
    carouselTimer = setTimeout(() => nextImage(), 5000);
}

function prevImage() {
    if (counter <= 0) {
        clearTimeout(carouselTimer);
        carouselTimer = setTimeout(() => nextImage(), 5000);
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    clearTimeout(carouselTimer);
    carouselTimer = setTimeout(() => nextImage(), 5000);
}

function loopCarousel() {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    }
}
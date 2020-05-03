//preloader
const preloader = () => {
  const loaderanimation = document.querySelector(".preloader");

  window.addEventListener("load", () => {
    loaderanimation.classList.add("preloader-finish");
  });
}

//slider
const loadSlider = () => {

  const slides = document.getElementsByClassName("slides");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let timer;
  let slideIndex = 1;

  //event listeners
  nextBtn.addEventListener('click', () => nextSlide());
  prevBtn.addEventListener('click', () => prevSlide());

  function nextSlide() {
    clearTimeout(timer);
    slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
    showSlides();
  }

  function prevSlide() {
    clearTimeout(timer);
    slideIndex--;
    if (slideIndex < 1){
      slideIndex = slides.length;
    }
    showSlides();
  }

  function showSlides() {
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
}

//mobile navigation
const mobileNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navItems = document.querySelectorAll(".navItem");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //fade in for links
    navItems.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `fade 0.5 ease forwards ${index * 1 + 2}s`;
      }
    });

    //animate burger
    if (burger.style.transform){
      burger.style.transform = '';
    }
    else {
      burger.style.transform = "rotate(90deg)";
    }

  });
 }

const descriptionImages = (page) => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const imageHolder = document.querySelector(".fullImage");
  const fullImage = document.querySelector(".fullImage img");
  const closeBtn = document.querySelector(".fullImage i:first-child");

  function showFullImage(i) {
    fullImage.src = `images/${page}/${page}_${i + 1}.png`;
    imageHolder.classList.toggle("fullImage-active");
  }

  //eventlisteners
  closeBtn.addEventListener("click", () => {
    imageHolder.classList.toggle("fullImage-active");
    fullImage.src = "";
  });

  for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    thumbnail.addEventListener("click", () => showFullImage(i));
  }


}

const app = () => {
	preloader();
  mobileNav();
  //check if there is a slider on the page.
  if (document.getElementsByClassName("slider").length > 0) {
   	loadSlider();
  }
  if (document.getElementById("verhuurItems")) {
    descriptionImages("Verhuur");
  }
  if (document.getElementById("verkoopItems")) {
    descriptionImages("Verkoop");
  }
}

app();
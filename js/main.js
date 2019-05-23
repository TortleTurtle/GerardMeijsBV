//image slider on homepage.
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//Sticky header
/*let header = document.getElementById('navbar');
let headerOffset =  header.offsetTop;

window.onscroll = function () {
    stickyHeader();
};

function stickyHeader() {
    if (window.pageYOffset > headerOffset) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}*/

//hide navbar when scrolling.
/*let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", hideNavbar());
function hideNavbar() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}*/

//event listener for nav bar to change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.topnav');
    if (window.scrollY > 900) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
    } else {
        header.style.backgroundColor = 'transparent';
    }
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

//function to deal with 
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}
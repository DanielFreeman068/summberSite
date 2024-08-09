//event listener for nav bar to change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.topnav');
    if (window.scrollY > 900) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
window.addEventListener('scroll', function() {
    const boody = document.querySelector('body');
    if (window.scrollY > 1900) { 
        boody.style.backgroundColor = 'black'; 
    } else {
        boody.style.backgroundColor = '#333';
    }
});

//slideshow
//access images
let slideImages = document.getElementsByClassName('slideshowIMG');
//access next and prev
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
//access indicators
let dots = document.querySelectorAll('dot');

var counter = 0;

//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    } else {
        counter ++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
};
//prev button code
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    } else {
        counter --;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
};
//auto sliding
function autoSliding(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
    }
}
autoSliding();
//stops auto slide while mouse hover
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})
//resume slider
container.addEventListener("mouseout", autoSliding);
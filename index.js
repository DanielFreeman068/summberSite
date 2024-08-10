$(document).ready(function(){
    //event listener for nav bar to change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.topnav');
        if (window.scrollY > 900) { 
            header.style.backgroundColor = '#474344'; 
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
        //event listener for subheading to start on scroll
    window.addEventListener('scroll', function() {
        const sub = document.querySelector('.subHead');
        if (window.scrollY > 800) { 
            sub.style.animation = 'type 2s steps(40, end)'; 
            sub.style.display = 'block';
        } else {
            sub.style.animationPlayState = 'paused';
        }
    });
    //slideshow
    //access images
    let slideImages = document.getElementsByClassName('slideshowIMG');
    //access next and prev
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    //access indicators
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
    //jquery for descriptions popping up under pictures
    $("#one").mouseenter(function(){
        $("#uno").addClass('magic');
        $("#dis").addClass('magic2');
    });
    $("#one").mouseleave(function(){
        $("#uno").removeClass('magic');
        $("#dis").removeClass('magic2');
    });
    $("#two").mouseenter(function(){
        $("#dos").addClass('magic');
        $("#dis").addClass('magic2');
    });
    $("#two").mouseleave(function(){
        $("#dos").removeClass('magic');
        $("#dis").removeClass('magic2');
    });
    $("#three").mouseenter(function(){
        $("#tres").addClass('magic');
        $("#dis").addClass('magic2');
    });
    $("#three").mouseleave(function(){
        $("#tres").removeClass('magic');
        $("#dis").removeClass('magic2');
    });
    $("#four").mouseenter(function(){
        $("#quatro").addClass('magic');
        $("#dis").addClass('magic2');
    });
    $("#four").mouseleave(function(){
        $("#quatro").removeClass('magic');
        $("#dis").removeClass('magic2');
    });
    $("#five").mouseenter(function(){
        $("#cinco").addClass('magic');
        $("#dis").addClass('magic2');
    });
    $("#five").mouseleave(function(){
        $("#cinco").removeClass('magic');
        $("#dis").removeClass('magic2');
    });
    $("#six").mouseenter(function() {
        $("#seis").addClass('magic');
        $("#dis").addClass('magic2');
    })
    $("#six").mouseleave(function(){
        $("#seis").removeClass('magic');
        $("#dis").removeClass('magic2');
    })
    //jquery for book
    $("#book").mouseenter(function(){
        $("#bookOpen").slideDown(1000);
    })
});
//alerts when form is submitted
let post = function() {
    alert('Your feedback has been recorded!');
    return false;
}

//function to toggle book from opening and closing
function openBook() {
    const book = document.querySelector('.bookContent');
    if (book) {
        // Toggle between 'none' and 'block'
        if (book.style.display === 'block') {
            book.style.display = 'none';
        } else {
            book.style.display = 'block';
            const sub = document.querySelector('.sig');
            if (book.style.display === 'block') { 
                sub.style.animation = 'type 2s steps(40, end)'; 
                sub.style.display = 'block';
            } else {
                sub.style.animationPlayState = 'paused';
            }
        }
    }
}
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
        if (window.scrollY > 1100) { 
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
        $("#uno").slideDown(1000); // Slide down when mouse enters
    });
    $("#one").mouseleave(function(){
        $("#uno").slideUp(1000); // Slide up when mouse leaves
    });
    $("#two").mouseenter(function(){
        $("#dos").slideDown(1000);
    });
    $("#two").mouseleave(function(){
        $("#dos").slideUp(1000);
    });
    $("#three").mouseenter(function(){
        $("#tres").slideDown(1000);
    });
    $("#three").mouseleave(function(){
        $("#tres").slideUp(1000);
    });
    $("#four").mouseenter(function(){
        $("#quatro").slideDown(1000);
    });
    $("#four").mouseleave(function(){
        $("#quatro").slideUp(1000);
    });
    $("#five").mouseenter(function(){
        $("#cinco").slideDown(1000);
    });
    $("#five").mouseleave(function(){
        $("#cinco").slideUp(1000);
    });
    $("#six").mouseenter(function() {
        $("#seis").slideDown(1000);
    })
    $("#six").mouseleave(function(){
        $("#seis").slideUp(1000);
    })
});

let post = function() {
    alert('Your feedback has been recorded!');
    return false;
}
//event listener for nav bar to change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.topnav');
    if (window.scrollY > 900) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

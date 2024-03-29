var menubutton = document.querySelector('.onkar');
var leftNav = document.querySelector('.left-nav');


menubutton.addEventListener("click", function() {
    leftNav.classList.toggle('dropdown');
})
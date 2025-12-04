var openMenu = document.querySelector("#menu-icon");
var closeMenu = document.querySelector("#close-menu")

var tl = gsap.timeline({paused:true});


tl.to("#menu", {
    x: 0,
})


tl.pause();


openMenu.addEventListener("click", function(){
    tl.play();
})


closeMenu.addEventListener("click", function() {
    tl.reverse();
})
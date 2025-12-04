
gsap.from("#first-sect", {
    opacity: 0,
    duration: 0.5,
})


gsap.from(".stagger", {
    opacity: 0,
    duration: 0.5,
    y: 100,
    delay: 0.2,
    stagger: 0.3
})


const tl2 = gsap.timeline();

tl2.fromTo("#chapter-menu", {
    x: 200,
    opacity: 0
},
    { 
        x: 0,
        opacity: 1,
        duration: 0.3
    });

  

tl2.fromTo(".chapter-number", {
    x: 100,
    opacity: 0,
    
},
    {
        x: 0,
        opacity: 1,
        duration: 0.1,
        stagger: 0.1
    });


    var vc = document.querySelector("#chapter-menu");

    var vcPai = vc.parentNode;

    console.log(vcPai);

    
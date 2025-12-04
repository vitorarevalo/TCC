window.onload = function() {
    // Rola a página para as coordenadas (x, y) = (0, 0)
    window.scrollTo(0, 0); 
};



gsap.from("main", {
    opacity: 0,
    duration: 1,
})

gsap.from(".stagger", {
    y: 30,
    stagger: 0.1,
    opacity: 0,
})


gsap.from(".yatagarasu", {
    x: -1000,
    opacity: 0,
    duration: 1,
})

gsap.from(".jinmu", {
    x: 1000,
    opacity: 0,
    duration: 1,
})



gsap.from(".amaterasu", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".amaterasu",
      scroller: "body", 
      
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".amaterasu-txt", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".amaterasu-txt",
      scroller: "body", 
      
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".tesouro-txt", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".tesouro-txt",
      scroller: "body", 
      
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".yatagarasu2", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".yatagarasu2",
      scroller: "body", 
      
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from("#ninigi2-txt", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: "#ninigi2-txt",
      scroller: "body", 
      
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})
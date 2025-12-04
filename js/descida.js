gsap.from("main", {
    opacity: 0,
    duration: 1,
})

gsap.from(".stagger", {
    y: 30,
    stagger: 0.1,
    opacity: 0,
})


gsap.from(".ninigi", {
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
      trigger: ".amaterasu",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})



gsap.from(".tesouro-txt", {
  y: 100,
  opacity: 0,
    scrollTrigger: {
      trigger: ".tesouro-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".joia", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".joia",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".espelho", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".espelho",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".espada", {
  y: 100,
  opacity: 0,
    scrollTrigger: {
      trigger: ".espada",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".ninigi2", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".ninigi2",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".ninigi2-txt", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".ninigi2-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})
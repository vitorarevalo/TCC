gsap.from("main", {
    opacity: 0,
    duration: 1,
})

gsap.from(".stagger", {
    y: 30,
    stagger: 0.1,
    opacity: 0,
})

gsap.from(".yamata-no-orochi", {
    x: 1000,
    opacity: 0,
    duration: 1,
})


gsap.from(".kushinada", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".kushinada",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".kushinada-txt", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".kushinada-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".susanoo-kushinada-txt", {
  y: -100,
  opacity: 0,
    scrollTrigger: {
      trigger: ".susanoo-kushinada-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".susanoo-kushinada", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".susanoo-kushinada",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".pente", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".pente",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".battle-txt", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".battle-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".battle-susanoo", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".battle-susanoo",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".amaterasu-susanoo-txt", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".amaterasu-susanoo-txt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".amaterasu-susanoo", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".amaterasu-susanoo",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})
gsap.from("main", {
    opacity: 0,
    duration: 1,
})

gsap.from(".stagger", {
  y: 30,
  stagger: 0.1,
  opacity: 0,
})




gsap.from(".amaterasu", {
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

gsap.from(".textama", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".textama",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".effect", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".effect",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".susanootxt", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".susanootxt",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".wave", {
  x: 1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".wave",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

gsap.from(".endtext", {
  x: -1000,
  opacity: 0,
    scrollTrigger: {
      trigger: ".endtext",
      
      scroller: "body", 
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }  
})

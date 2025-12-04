


gsap.to("#timeline-section #timeline", {
    duration: 4,
    transform: "translateX(-75%)",
    scrollTrigger: {
        trigger: "#timeline-section",
        scroller: "body",
        start: "top 0%",
        end: "+=1000",
        scrub: 5,
        pin: true,
        pinSpacing: "margin"
    }
});
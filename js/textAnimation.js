function breakText() {
    var h1 = document.querySelector(".presenting-h1");
    
    var presentingH1 = document.querySelector(".presenting-h1").textContent;
    
    var splittedText = presentingH1.split("");
    
    var halfValue = Math.floor(splittedText.length / 2)

    var clutter = "";

    splittedText.forEach(function(e, idx) {
        if(idx < halfValue) {
            clutter += `<span class="a">${e}</span>`
        }
        else {
            clutter += `<span class="b">${e}</span>`
        }
    })
    

    h1.innerHTML = clutter
}

breakText();




    
    gsap.from("h1 .a", {
    y: 80,
    duration: 0.6,
    stagger: 0.15,
    opacity: 0
}) 


gsap.from("h1 .b", {
    y: 80,
    duration: 0.6,
    stagger: -0.15,
    opacity: 0
}) 



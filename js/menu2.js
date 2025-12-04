document.addEventListener('DOMContentLoaded', () => {
    const mitosToggle = document.querySelector('#mitos-toggle');
    const subItens = document.querySelectorAll(".subitens"); 
    const rotateIcon = document.querySelector(".rotateIcon");
    
    const HIDDEN_CLASS = 'unable'; 
    if (mitosToggle && rotateIcon) { 

        mitosToggle.addEventListener('click', (event) => {
            event.preventDefault(); 
            const isCurrentlyHidden = subItens[0].classList.contains(HIDDEN_CLASS);
            subItens.forEach(item => {
                item.classList.toggle(HIDDEN_CLASS); 
            });
            if (isCurrentlyHidden) {
                rotateIcon.style.transform = 'rotate(0deg)';
                mitosToggle.setAttribute('aria-expanded', 'true');
            } else {
                rotateIcon.style.transform = 'rotate(-90deg)';
                mitosToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os links do menu de capítulos
    const chapterLinks = document.querySelectorAll('#chapter-menu .chapter-number');
    
    // 2. Seleciona todas as seções de destino.
    const chapterSections = Array.from(chapterLinks).map(link => 
        document.querySelector(link.getAttribute('href'))
    ).filter(section => section);

    // Variável para armazenar a seção ativa atualmente
    let activeChapterId = null; 
    
    // Configurações do observador (Experimente um 'rootMargin' negativo)
    const options = {
        root: null, // viewport
        // Define uma margem no topo da viewport. A intersecção será contada
        // quando a seção cruzar a linha de 20% a partir do topo da tela.
        rootMargin: '0px 0px -80% 0px', 
        threshold: 0 // Não precisamos mais do threshold, a margem resolve.
    };

    // 3. Cria o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        // Encontra o primeiro elemento que está intersectando
        const intersectingEntry = entries.find(entry => entry.isIntersecting);

        // Se houver uma seção intersectando (cruzando a linha de 20% do topo)
        if (intersectingEntry) {
            const currentChapterId = intersectingEntry.target.id;

            // Só atualiza se o capítulo ativo for diferente do anterior
            if (currentChapterId !== activeChapterId) {
                activeChapterId = currentChapterId;

                // 4. Remove a classe 'active-chapter' de todos os links
                chapterLinks.forEach(link => {
                    link.classList.remove('active-chapter');
                });
                
                // 5. Adiciona a classe 'active-chapter' ao link correspondente
                const correspondingLink = document.querySelector(`a[href="#${activeChapterId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active-chapter');
                }
            }
        } 
        
        // OPCIONAL: Lidar com o topo da página, antes do chapter1
        if (window.scrollY === 0 && chapterLinks.length > 0) {
             chapterLinks.forEach(link => link.classList.remove('active-chapter'));
             chapterLinks[0].classList.add('active-chapter');
        }

    }, options);

    // 6. Observa cada seção de capítulo
    chapterSections.forEach(section => {
        observer.observe(section);
    });
});
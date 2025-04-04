const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const idLink = smoothLink.getAttribute('href');

        document.querySelector(idLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
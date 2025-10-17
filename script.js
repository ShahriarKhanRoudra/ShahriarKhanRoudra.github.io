const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['FET-Based Biosensors', 'Tunnel FETs', '2D Materials', 'Semiconductor Device Physics', 'Nanoelectronic Devices'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    var typed = new Typed('#typed-text', options);
});

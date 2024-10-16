// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    const toggleButton = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

 

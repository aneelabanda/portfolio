// Smooth scrolling for navigation links
// GSAP animations for hero section
gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });

// Typed.js for dynamic typing effect
window.onload = function() {
    new Typed("#typed-name", {
        strings: ["Aneela Banda", "a Web Developer", "a Creative Coder"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
};

// Shrink navbar on scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Shrink navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});

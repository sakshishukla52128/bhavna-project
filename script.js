// Get the navbar element
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value to control when the navbar should become sticky
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Toggle the side menu when clicking the burger icon
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

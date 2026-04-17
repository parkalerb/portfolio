// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Active link switching on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove menu on scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed text effect
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', '3D Graphics Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
});

// Form reset using session storage
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('portfolioForm');
    if (!form) return;

    if (sessionStorage.getItem('formState') === 'cleared') {
        form.reset();
        sessionStorage.removeItem('formState');
    }

    form.addEventListener('submit', function () {
        sessionStorage.setItem('formState', 'cleared');
    });
});

document.querySelectorAll('.skill-bar').forEach(bar => {
  const percent = bar.getAttribute('data-percent');
  bar.querySelector('.fill').style.width = `${percent}%`;
});

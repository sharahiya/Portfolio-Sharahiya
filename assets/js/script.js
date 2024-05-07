// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//scroll section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            }
        });

    };


// sticky navbar
// Menggunakan addEventListener untuk menambahkan event handler baru
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// remove toggle icon and navbar when click navbar link (scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

//scroll reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-content h3', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'left' });





var typed = new Typed(".multiple-text", {
    strings: ["UI/UX Designer", "Frontend Developer", "Social Media Specialist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var typed = new Typed(".multiple-textt", {
    strings: ["UI/UX Design Enthusiast!", "Frontend Developer", "Social Media Specialist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
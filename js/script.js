/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon ann navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal  */
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.Accueil-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.Accueil-img, .apropos-content, .compétences-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.Accueil-content h1, .apropos-img', { origin: 'left' });
ScrollReveal().reveal('.Accueil-content p, .apropos-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer Junior', 'Back-end Developer Junior'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})

/* validacion de formulario */
